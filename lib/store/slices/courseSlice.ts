import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { listCourses } from '@/lib/courseService';
import type { Course } from '@/types/course';

export interface TrackedCourse {
    courseId: string | number;
    courseTitle: string;
    enrolledAt: string;
}

export interface CourseState {
    courses: Course[];
    trackedCourses: TrackedCourse[];
    maxCourseLimit: number; // Strictly 3
    limitError: string | null;
    loading: boolean;
    error: string | null;
}

const STORAGE_KEY = 'coursenix_tracked_courses';

// Safely load initial tracked courses from localStorage
const loadInitialTrackedCourses = (): TrackedCourse[] => {
    if (typeof window === 'undefined') return [];
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const initialState: CourseState = {
    courses: [],
    trackedCourses: loadInitialTrackedCourses(),
    maxCourseLimit: 3, // Strict 3-course limit for tracking
    limitError: null,
    loading: false,
    error: null,
};

export const fetchAllCourses = createAsyncThunk('courses/fetchAllCourses', async () => {
    const data = await listCourses();
    return data;
});

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        // Hydrate tracked courses from localStorage on client mount
        initializeTrackedCourses: (state) => {
            if (typeof window !== 'undefined') {
                try {
                    const data = localStorage.getItem(STORAGE_KEY);
                    if (data) {
                        state.trackedCourses = JSON.parse(data);
                    }
                } catch {
                    // Ignore JSON parse errors
                }
            }
        },

        // 1. Track Course (Strict 3-course limit enforcement)
        trackCourse: (state, action: PayloadAction<{ id: string | number; title: string }>) => {
            const isAlreadyTracked = state.trackedCourses.some(
                (c) => String(c.courseId) === String(action.payload.id)
            );
            if (isAlreadyTracked) {
                state.limitError = 'You are already tracking this course!';
                return;
            }

            // Enforce quota
            if (state.trackedCourses.length >= state.maxCourseLimit) {
                state.limitError = `Course limit reached! You can only track up to ${state.maxCourseLimit} courses. Untrack an existing course to track this one.`;
                return;
            }

            const item: TrackedCourse = {
                courseId: action.payload.id,
                courseTitle: action.payload.title,
                enrolledAt: new Date().toISOString(),
            };

            state.trackedCourses.push(item);
            state.limitError = null;

            if (typeof window !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.trackedCourses));
            }
        },

        // 2. Untrack Course (Free up slot)
        untrackCourse: (state, action: PayloadAction<string | number>) => {
            state.trackedCourses = state.trackedCourses.filter(
                (c) => String(c.courseId) !== String(action.payload)
            );
            state.limitError = null;
            if (typeof window !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.trackedCourses));
            }
        },

        clearLimitError: (state) => {
            state.limitError = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCourses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchAllCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to load courses';
            });
    },
});

export const { initializeTrackedCourses, trackCourse, untrackCourse, clearLimitError } = courseSlice.actions;
export default courseSlice.reducer;
