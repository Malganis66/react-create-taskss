import ShowData from "./components/showData";
import TaskForm from "./components/InputForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <ShowData />
      </div>
    </main>
  );
}

export default App;
