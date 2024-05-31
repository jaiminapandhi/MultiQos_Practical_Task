import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { template } from "../StaticData/data";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap"

const SelectTemplateComponent = () => {
  const [templateData, setTemplateData] = useState([]);
  const navigate = useNavigate()

  const checkboxEventHandler = (e, type) => {
    let temp = [...templateData];
    temp.forEach((item) => {
      if (item.value === e.target.value) {
        if (item.checked) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      }
    });
    setTemplateData(temp);
  };

  const handleSubmit = () => {
    localStorage.setItem("selectedtemplate", JSON.stringify(templateData));
    alert("form submitted")
  };
  const handlePrev=()=>{
    localStorage.setItem("selectedtemplate", JSON.stringify(templateData));
    navigate("/payment")
  }
  useEffect(() => {
    if(localStorage.getItem("selectedtemplate")){
      setTemplateData(JSON.parse(localStorage.getItem("selectedtemplate")))
    }
    else{

      setTemplateData(template);
    }
  }, []);

  return (
    <div>
      <h1>SelectTemplateComponent</h1>

      <Row className="justify-content-lg-start">
        {templateData.map((item) => {
          return (
            <Col xs lg="4">
              <Form.Check
                inline
                checked={item.checked}
                label={item.label}
                value={item.value}
                name="group1"
                type="checkbox"
                id={`inline-1`}
                onChange={(e) => checkboxEventHandler(e)}
              />
            </Col>
          );
        })}
      </Row>

      <hr/>
      <Button variant="primary" onClick={()=>handlePrev()}>
        Prev
      </Button>{" "}
      <Button variant="primary" onClick={handleSubmit}>
        Next
      </Button>{" "}
    </div>
  );
};

export default SelectTemplateComponent;
