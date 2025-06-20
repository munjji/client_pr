import React from "react";
import List from "./List";
import type { TodoListProps } from "../types/list";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  done,
  onComplete,
  onDone,
}) => {
  return (
    <div className="grid grid-flow-col grid-cols-2 w-3/4 gap-10">
      <div>
        <p className="inline-block border-b-2 font-bold text-center mb-6">
          해야 할 일
        </p>
        <div>
          {todos.map((item) => (
            <List key={item} content={item} isTodo onComplete={onComplete} />
          ))}
        </div>
      </div>
      <div>
        <p className="inline-block border-b-2 font-bold text-center mb-6">
          해낸 일
        </p>
        <div>
          {done.map((item) => (
            <List key={item} content={item} isTodo={false} onDone={onDone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
