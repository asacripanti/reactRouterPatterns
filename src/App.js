import "./App.css";
import Navbar from "./components/Navbar";
import RouteList from "./components/RouteList";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [dogs, setDogs] = useState({ data: null, isLoading: true });

  useEffect(() => {
    async function loadDogs() {
      const response = await axios.get("http://localhost:5001/dogs");
      setDogs({ data: response.data, isLoading: false });
    }
    loadDogs();
  }, []);

  if (dogs.isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <BrowserRouter>
        <Navbar dogs={dogs.data} />
        <div className="container">
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
