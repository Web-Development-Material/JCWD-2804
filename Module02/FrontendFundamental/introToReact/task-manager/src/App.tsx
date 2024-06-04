import UseRefExample from "./components/UseRefExample";
import UseMemoExample from "./components/UseMemoExample";

const App = () => {
  return (
    <main className="w-screen h-full flex justify-center items-center">
      <UseRefExample />
      <UseMemoExample />
    </main>
  );
};

export default App;
