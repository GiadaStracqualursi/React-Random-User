import { Routes, Route, BrowserRouter } from "react-router-dom";
import { User } from "./components/User";
import {Button} from "./components/Button";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
      <div>
        
        <Routes>
          <Route path="/" element={<Button text="Accedi"/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
