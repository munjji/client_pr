import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [done, setDone] = useState<string[]>([]);

  const handleInputValue = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleComplete = (item: string) => {
    setTodos(todos.filter((todo) => todo !== item));
    setDone([...done, item]);
  };

  const handleDone = (item: string) => {
    setDone(done.filter((d) => d !== item));
  };

  return (
    <div className="flex-col justify-center items-center">
      <p className="font-bold text-4xl text-center m-16">munjji TODO List</p>
      <hr />
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 flex justify-between items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="스터디 계획을 작성해보세요!"
            className="w-3/4 h-10 px-3 m-6 italic border border-black rounded-md outline-none"
          />
          <button
            onClick={handleInputValue}
            className="bg-green-600 rounded-md text-white font-semibold p-2"
          >
            할 일 추가
          </button>
        </div>
        <TodoList
          todos={todos}
          done={done}
          onComplete={handleComplete}
          onDone={handleDone}
        />
      </div>
    </div>
  );
}

export default App;
