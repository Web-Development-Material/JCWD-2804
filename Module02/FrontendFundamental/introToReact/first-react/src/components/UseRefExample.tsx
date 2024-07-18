import { useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="p-4">
      <input
        ref={inputRef}
        type="text"
        className="border p-2"
        placeholder="Focus me"
      />
      <button onClick={focusInput} className="bg-blue-500 text-white p-2 mt-2">
        Focus Input
      </button>
    </div>
  );
};

export default UseRefExample;
