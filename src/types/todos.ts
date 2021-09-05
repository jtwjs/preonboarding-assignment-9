export type Todo = {
  id: number;
  priority: Priority
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export type Priority = 'high' | 'middle' | 'low' | 'lowest';

export type TargetIdRef = {
  id: Todo['id'];
  isCheck: Todo['isCheck'];
};