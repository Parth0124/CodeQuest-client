import { fetchallusers } from "./action/users";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useDispatch } from "react-redux";

function App() {
  const [slidein, setslidein] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchallusers());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setslidein(false);
    }
  }, []);

  const handleslidein = () => {
    if (window.innerWidth <= 768) {
      setslidein((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleslidein={handleslidein} />
        <AllRoutes slidein={slidein} />
      </Router>
    </div>
  );
}

export default App;
