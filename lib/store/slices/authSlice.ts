import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '@/lib/supabaseClient';
import type { User, Session } from '@supabase/supabase-js';

export interface AuthState {
    user: User | null;
    session: Session | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    session: null,
    loading: false,
    error: null,
};

// 1. Email Sign In Thunk
export const signInWithEmail = createAsyncThunk(
    'auth/signInWithEmail',
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return rejectWithValue(error.message);
        return data;
    }
);

// 2. Email Sign Up Thunk
export const signUpWithEmail = createAsyncThunk(
    'auth/signUpWithEmail',
    async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) return rejectWithValue(error.message);
        return data;
    }
);

// 3. Sign Out Thunk
export const signOutUser = createAsyncThunk('auth/signOutUser', async (_, { rejectWithValue }) => {
    const { error } = await supabase.auth.signOut();
    if (error) return rejectWithValue(error.message);
    return null;
});

// 4. OAuth Sign In (Google / GitHub)
export const signInWithOAuth = createAsyncThunk(
    'auth/signInWithOAuth',
    async (provider: 'google' | 'github', { rejectWithValue }) => {
        const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}/courses` : undefined;
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: redirectUrl,
            },
        });
        if (error) return rejectWithValue(error.message);
        return data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<Session | null>) => {
            state.session = action.payload;
            state.user = action.payload?.user ?? null;
            state.loading = false;
            state.error = null;
        },
        clearAuthError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Email Sign In
            .addCase(signInWithEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInWithEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.session = action.payload.session;
                state.user = action.payload.user;
            })
            .addCase(signInWithEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Email Sign Up
            .addCase(signUpWithEmail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpWithEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.session = action.payload.session;
                state.user = action.payload.user;
            })
            .addCase(signUpWithEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // OAuth Sign In
            .addCase(signInWithOAuth.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signInWithOAuth.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(signInWithOAuth.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Sign Out
            .addCase(signOutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signOutUser.fulfilled, (state) => {
                state.user = null;
                state.session = null;
                state.loading = false;
                state.error = null;
            })
            .addCase(signOutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setSession, clearAuthError } = authSlice.actions;
export default authSlice.reducer;
