import { useRef } from "react";
import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"


function App() {
  const canvasRef = useRef();
 
 return (
  <main className="app transition-all ease-in">
    <Home/>
    <Canvas data={canvasRef}/>
    <Customizer data={canvasRef}/>
  </main>
 )
}

export default App
