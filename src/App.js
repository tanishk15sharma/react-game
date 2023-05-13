import { BoxesContainer } from "./components/BoxesContainer";

function App() {
  const config = [
    [true, true, true],
    [true, false, false],
    [true, true, true],
  ];
  return (
    <div className="App">
      <BoxesContainer config={config} />
    </div>
  );
}

export default App;
