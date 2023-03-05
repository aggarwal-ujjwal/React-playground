import Header from "./components/Header";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar";
import Ternaryex from "./components/Ternaryex";

function App() {
  return (
    <div>
    <Header name ="Anna" color="purple" />
    <Main greet="Howdy" />
    <Sidebar greet="Hi" />
    <Header name ="Bob" color="Blue" />
    <Ternaryex />
    </div>
  );
}

export default App;
