import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { useNavigate} from "react-router-dom"



const PaymentAggrementComponent = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentOptions] = useState([
    { value: "monthly", label: "monthly" },
    { value: "3 month", label: "3 month" },
    { value: "6 month", label: "6 month" },
    { value: "yearly", label: "yearly" },
  ]);
  const [acceptTerms, setAcceptterms] = useState();
  const navigate =useNavigate()

  const handleSubmit = () => {
    localStorage.setItem("paymentOption", JSON.stringify(selectedPayment));
    
    localStorage.setItem("acceptTerms", JSON.stringify(acceptTerms));
    navigate("/selecttemplate")

  };
  const handlePrev=()=>{
    localStorage.setItem("paymentOption", JSON.stringify(selectedPayment));
    localStorage.setItem("acceptTerms", JSON.stringify(acceptTerms));
    navigate("/")
  }
  const checkboxEventHandler = (e) => {
    setAcceptterms(!acceptTerms);
  };
  useEffect(() => {
    if (localStorage.getItem("paymentOption")) {
      setSelectedPayment(JSON.parse(localStorage.getItem("paymentOption")));
    }
    setAcceptterms(localStorage.getItem("acceptTerms")?true:false);
  }, []);

  return (
    <div>
      <h1> Payment Page</h1>
      <Select
        value={selectedPayment}
        onChange={setSelectedPayment}
        options={paymentOptions}
        placeholder="Select"
      />
      <br></br>
      <hr />
      <Form.Check
        inline
        label="Accept terms and conditions"
        value="Accept terms and conditions"
        name="terms"
        type="checkbox"
        checked={acceptTerms}
        onChange={(e) => checkboxEventHandler(e, "otherHeatingOptionData")}
      />
      <Button variant="primary" onClick={()=>handlePrev()}>
        Prev
      </Button>{" "}
      <Button variant="primary" onClick={handleSubmit}>
        Next
      </Button>{" "}
    </div>
  );
};

export default PaymentAggrementComponent;
