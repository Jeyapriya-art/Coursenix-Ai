"use client";

import React, { useEffect, useState } from 'react';
import { createCourse, updateCourse, deleteCourse } from '@/lib/courseService';
import type { Course, CourseFormData } from '@/types/course';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import {
  trackCourse,
  untrackCourse,
  clearLimitError,
  fetchAllCourses,
  initializeTrackedCourses,
} from '@/lib/store/slices/courseSlice';


const Courses: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    courses,
    loading,
    trackedCourses,
    maxCourseLimit,
    limitError,
  } = useAppSelector((state) => state.courses);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [saving, setSaving] = useState<boolean>(false);

  const [formData, setFormData] = useState<CourseFormData>({
    tag: '',
    title: '',
    desc: '',
    time: '',
    level: 'beginner',
  });

  useEffect(() => {
    dispatch(initializeTrackedCourses());
    dispatch(fetchAllCourses());
  }, [dispatch]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function resetForm(): void {
    setFormData({ tag: '', title: '', desc: '', time: '', level: 'beginner' });
    setEditingId(null);
    setShowForm(false);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setSaving(true);
    try {
      const payload: Partial<Course> = {
        title: formData.title,
        description: formData.desc,
        category: formData.tag,
        duration: formData.time,
        level: formData.level,
      };

      if (editingId) {
        await updateCourse(editingId, payload);
      } else {
        await createCourse({
          ...payload,
          slug: formData.title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now(),
        });
      }

      resetForm();
      await dispatch(fetchAllCourses());
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error saving course:', err.message);
      }
    } finally {
      setSaving(false);
    }
  }

  function handleEditClick(course: Course): void {
    setFormData({
      tag: course.category || '',
      title: course.title || '',
      desc: course.description || '',
      time: course.duration || '',
      level: (course.level as 'beginner' | 'intermediate' | 'advanced') || 'beginner',
    });
    setEditingId(course.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(id: string | number): Promise<void> {
    if (!confirm('Are you sure you want to delete this course?')) return;
    try {
      await deleteCourse(id);
      dispatch(untrackCourse(id));
      await dispatch(fetchAllCourses());
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error deleting course:', err.message);
      }
    }
  }

  const filteredCourses = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category?.toLowerCase().includes(searchQuery.toLowerCase());

    const isTracked = trackedCourses.some((tc) => String(tc.courseId) === String(c.id));
    const matchesLevel =
      selectedLevel === 'all'
        ? true
        : selectedLevel === 'tracked'
        ? isTracked
        : c.level?.toLowerCase() === selectedLevel.toLowerCase();

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white px-6 md:px-14 py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-zinc-900">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#2dd4a7]/40 bg-[#2dd4a7]/5 text-xs font-semibold text-[#2dd4a7] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2dd4a7] animate-pulse" />
            LIVE COURSE REPOSITORY
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            AI-Generated Courses
          </h1>
          <p className="text-zinc-400 text-sm md:text-base mt-1">
            Create, manage, and explore structured curricula powered by Supabase &amp; Coursenix Engine.
          </p>
        </div>

        <button
          onClick={() => (showForm ? resetForm() : setShowForm(true))}
          className="self-start md:self-auto bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] text-black font-semibold px-6 py-3 rounded-xl text-sm transition hover:opacity-95 shadow-lg shadow-[#2dd4a7]/10 flex items-center gap-2"
        >
          <span>{showForm ? '✕ Cancel' : '+ Generate New Course'}</span>
        </button>
      </div>
      

      {/*  3-Course User Limit  */}
      <div className="max-w-7xl mx-auto mb-8 p-5 rounded-2xl border border-zinc-800 bg-[#0c120f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-white">Course Tracking Quota</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300">Free Tier</span>
          </div>
          <p className="text-xs text-zinc-400">
            You are currently tracking <span className="text-[#2dd4a7] font-semibold">{trackedCourses.length}</span> of your allowed <span className="text-white font-semibold">{maxCourseLimit}</span> active courses.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="w-full sm:w-36 h-2.5 bg-zinc-800 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${trackedCourses.length >= maxCourseLimit ? 'bg-amber-400' : 'bg-[#2dd4a7]'}`} 
              style={{ width: `${Math.min((trackedCourses.length / maxCourseLimit) * 100, 100)}%` }}
            />
          </div>
          <span className="text-sm font-bold text-white whitespace-nowrap">
            {trackedCourses.length} / {maxCourseLimit}
          </span>
        </div>
      </div>

      {/* Limit Error Notification */}
      {limitError && (
        <div className="max-w-7xl mx-auto mb-6 p-4 rounded-xl border border-red-800/80 bg-red-950/40 text-red-300 text-sm flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>{limitError}</span>
          </div>
          <button 
            onClick={() => dispatch(clearLimitError())} 
            className="text-xs text-red-200 underline hover:text-white font-semibold ml-4"
          >
            Dismiss
          </button>
        </div>
      )}

      

      {/* Form Modal / Drawer */}
      {showForm && (
        <div className="max-w-2xl mx-auto mb-14 bg-[#0d1310] border border-[#2dd4a7]/40 rounded-2xl p-7 shadow-2xl relative">
          <h3 className="text-xl font-bold text-white mb-1">
            {editingId ? 'Edit Course Curriculum' : 'Generate / Add New Course'}
          </h3>
          <p className="text-xs text-zinc-400 mb-6">
            Enter course details or syllabus requirements to save to Supabase.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Category / Tag</label>
                <input
                  name="tag"
                  placeholder="e.g. AI & Machine Learning"
                  value={formData.tag}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#141b17] border border-zinc-700 focus:border-[#2dd4a7] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Estimated Duration</label>
                <input
                  name="time"
                  placeholder="e.g. 8h 30m"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#141b17] border border-zinc-700 focus:border-[#2dd4a7] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Course Title</label>
              <input
                name="title"
                placeholder="e.g. Full-Stack Next.js 16 with Supabase"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-[#141b17] border border-zinc-700 focus:border-[#2dd4a7] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Course Description</label>
              <textarea
                name="desc"
                placeholder="Key learning outcomes, modules, or prerequisite topics..."
                value={formData.desc}
                onChange={handleChange}
                required
                rows={3}
                className="w-full bg-[#141b17] border border-zinc-700 focus:border-[#2dd4a7] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5">Proficiency Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full bg-[#141b17] border border-zinc-700 focus:border-[#2dd4a7] text-white px-4 py-2.5 rounded-xl text-sm outline-none transition"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-zinc-800">
              <button
                type="button"
                onClick={resetForm}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-400 hover:text-white border border-zinc-800 hover:bg-zinc-900 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="bg-gradient-to-r from-[#2dd4a7] to-[#00c3ff] text-black font-semibold px-6 py-2.5 rounded-xl text-sm transition hover:opacity-95 shadow-lg shadow-[#2dd4a7]/10 disabled:opacity-50"
              >
                {saving ? 'Saving...' : editingId ? 'Update Course' : 'Save to Supabase'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filters and Search Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Search */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="Search courses, tags, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111] border border-zinc-800 focus:border-[#2dd4a7] rounded-xl px-4 py-2.5 pl-10 text-sm text-white placeholder-zinc-500 outline-none transition"
          />
          <svg
            className="absolute left-3.5 top-3 text-zinc-500 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Level & Tracking Filters */}
        <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto pb-2 md:pb-0">
          {['all', 'tracked', 'beginner', 'intermediate', 'advanced'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium capitalize transition flex items-center gap-1.5 ${
                selectedLevel === lvl
                  ? 'bg-[#2dd4a7] text-black font-bold'
                  : 'bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              <span>{lvl === 'tracked' ? `Tracked (${trackedCourses.length})` : lvl}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20 text-zinc-500 flex items-center justify-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#2dd4a7] animate-ping" />
            Loading courses from Supabase...
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-[#111214]/50 border border-zinc-800/80 rounded-2xl">
            <p className="text-zinc-400 text-base mb-2">No courses found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
              }}
              className="text-[#2dd4a7] text-xs font-semibold underline mt-2"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((c) => {
              const isTracked = trackedCourses.some((tc) => String(tc.courseId) === String(c.id));
              return (
              <div
                key={c.id}
                className="group bg-[#0e1411] border border-zinc-800/80 hover:border-[#2dd4a7]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#2dd4a7]/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="bg-[#2dd4a7]/10 border border-[#2dd4a7]/30 text-[#2dd4a7] text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                      {c.category || 'General'}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                      {c.level || 'beginner'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#2dd4a7] transition-colors mb-2 leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                    {c.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 py-3 border-t border-zinc-900">
                    <span className="flex items-center gap-1.5">
                      <span>⏱</span> {c.duration || 'Flexible'}
                    </span>
                    <span className="text-[#2dd4a7] text-[11px] font-semibold">AI Verified ✓</span>
                  </div>

                  {/* Track Course & Management Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    {isTracked ? (
                      <button
                        onClick={() => dispatch(untrackCourse(c.id))}
                        className="flex-1 bg-amber-500/10 border border-amber-500/40 hover:bg-amber-500/20 text-amber-300 py-2 rounded-xl text-xs font-semibold transition"
                      >
                        ✓ Tracked (Untrack)
                      </button>
                    ) : (
                      <button
                        onClick={() => dispatch(trackCourse({ id: c.id, title: c.title }))}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold transition ${
                          trackedCourses.length >= maxCourseLimit
                            ? 'bg-zinc-800/80 border border-zinc-700 text-zinc-500 cursor-not-allowed'
                            : 'bg-[#2dd4a7]/20 border border-[#2dd4a7]/50 hover:bg-[#2dd4a7] hover:text-black text-[#2dd4a7]'
                        }`}
                      >
                        {trackedCourses.length >= maxCourseLimit ? 'Quota Full (3/3)' : '+ Track Course'}
                      </button>
                    )}

                    <button
                      onClick={() => handleEditClick(c)}
                      className="border border-zinc-800 hover:border-[#2dd4a7] hover:text-[#2dd4a7] text-zinc-300 px-3 py-2 rounded-xl text-xs font-semibold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="border border-red-900/60 hover:bg-red-950/40 text-red-400 px-3 py-2 rounded-xl text-xs font-semibold transition"
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
