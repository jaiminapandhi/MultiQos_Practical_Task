import "./App.css";
import StepperFormComponent from "./Component/StepperFormComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PaymentAggrementComponent from "./Component/PaymentAggrementComponent";
import SelectTemplateComponent from "./Component/SelectTemplateComponent";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

        <Route path="/" element={<StepperFormComponent />} />
        <Route path="/payment" element={<PaymentAggrementComponent />} />
        <Route path="/selecttemplate" element={<SelectTemplateComponent />} />
        </Routes>
      </Router>
      ;
    </div>
  );
}

export default App;
