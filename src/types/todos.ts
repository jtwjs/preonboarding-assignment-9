export type Todo = {
	id: string;
	priority: 'high' | 'middle' | 'low' | 'lowest';
	content: string;
	isCheck: boolean;
	createdAt: Date;
}
