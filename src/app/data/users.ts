
export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'User'; // Strict typing for roles
  status: 'Active' | 'Inactive';
};

export const userData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Editor', status: 'Inactive' },
  { id: 4, name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'Active' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin', status: 'Inactive' },
  { id: 6, name: 'Diana Garcia', email: 'diana@example.com', role: 'Editor', status: 'Active' }
];