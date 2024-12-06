import Createlist from "./componments/CreateList.jsx";
import "./App.css";
import Header from "./componments/header.jsx";
import Adder from "./componments/adder.jsx";

function App() {
  const title = "shopping list";

  return (
    <>
      <div>
        <Header title={title} />
        <Createlist />
      </div>
    </>
  );
}

export default App;
