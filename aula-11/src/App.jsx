import Form from "./components/form";
import List from "./components/list";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-wrap">
        <Form />
        <List />
      </div>
    </>
  );
}

export default App;
