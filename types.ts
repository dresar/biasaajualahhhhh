export type StudentStatus = 'Active' | 'Inactive' | 'Suspended';

export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  status: StudentStatus;
  enrollmentDate: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'teacher';
}
