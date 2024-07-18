import UseRefExample from "../../components/UseRefExample";
import UseMemoExample from "../../components/UseMemoExample";
import UseReducerExample from "../../components/UseReducerExample";
import UseCallbackExample from "../../components/UseCallbackExample";

const CustomHookPage = () => {
  return (
    <main className="w-screen h-full grid grid-cols-1 gap-y-10 justify-center items-center">
      <UseRefExample />
      <UseMemoExample />
      <UseReducerExample />
      <UseCallbackExample />
    </main>
  );
};

export default CustomHookPage;
