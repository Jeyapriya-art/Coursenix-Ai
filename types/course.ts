export interface Course {
  id: string | number;
  title: string;
  description: string;
  category?: string;
  duration?: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | string;
  slug?: string;
  created_at?: string;
  status?: string;
  modules?: CourseModule[];
}

export interface CourseModule {
  id: string | number;
  title: string;
  description?: string;
  lessons?: CourseLesson[];
}

export interface CourseLesson {
  id: string | number;
  title: string;
  duration?: string;
}

export interface CourseFormData {
  tag: string;
  title: string;
  desc: string;
  time: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}
