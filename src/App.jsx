import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrypage from "./components/Entrypage";

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Entrypage />} />
        </Routes>
      </Router>
    );
  }
  export default App;

  //  Aditya Mohite 
  // adityamohite4973@gmail.com