import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/bootstrap.min.css";
import PlantList from "./PlantList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlantInfoPage from "./PlantInfoPage";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <PlantList />
        </div>
      </div> */}
      <Navbar />
      <Router>
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<PlantList />} />
              <Route path="/plant/:id" element={<PlantInfoPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
