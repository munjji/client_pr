export interface ListProps {
  content: string;
  isTodo: boolean;
  onComplete?: (item: string) => void;
  onDone?: (item: string) => void;
}

export interface TodoListProps {
  todos: string[];
  done: string[];
  onComplete: (item: string) => void;
  onDone: (item: string) => void;
}
