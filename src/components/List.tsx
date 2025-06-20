import type { ListProps } from "../types/list";

const List = ({ content, isTodo, onComplete, onDone }: ListProps) => {
  return (
    <div className="flex justify-between items-center p-2 border-b-4">
      <p className="font-bold">{content}</p>
      {isTodo ? (
        <button
          onClick={() => onComplete?.(content)}
          className="bg-slate-300 p-1 text-sm"
        >
          완료
        </button>
      ) : (
        <button
          onClick={() => onDone?.(content)}
          className="bg-red-600 p-1 text-sm text-white"
        >
          삭제
        </button>
      )}
    </div>
  );
};

export default List;
