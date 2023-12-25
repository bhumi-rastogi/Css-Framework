import AlertWindow from "./components/Alert";
import Cardpage from "./components/Card";
import Footerpage from "./components/Footer";
import Navpage from "./components/Nav";

function App() {
  return (
    <div>
      <Navpage/>
      <AlertWindow/>
      <Cardpage />
      <Footerpage />
    </div>
  );
}

export default App;