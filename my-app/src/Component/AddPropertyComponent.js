import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import {
  commercialProperty,
  otherHeatingOptions,
  otherProperty,
  propertyStatus,
  residencialProperty,
} from "../StaticData/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Image } from "react-bootstrap";
import NumberInput from "./NumberInput";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const AddPropertyComponent = () => {
  const [residencialData, setResidencialData] = useState([]);
  const [commercialData, setCommercialData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [properyStatusData, setPropertyStatusData] = useState([]);
  const [otherHeatingOptionData, setOtherHeatingOptionData] = useState([]);
  const [propertyName, setProperyName] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [securityDeposite, setSecurityDeposite] = useState("");
  const [lotAreaSize, setLotAreaSize] = useState("");
  const [propertyAreaSize, setPropertyAreaSize] = useState("");
  const [orientation] = useState([
    { value: "Chocolate", label: "Chocolate" },
    { value: "Strawberry", label: "Strawberry" },
    { value: "Vanilla", label: "Vanilla" },
  ]);
  const [floor] = useState([
    { value: "1", label: "floor 1" },
    { value: "2", label: "floor 2" },
    { value: "3", label: "floor 3" },
  ]);
  const [zone] = useState([
    { value: "UK", label: "UK" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
  ]);
  const [heatingOption] = useState([
    { value: "Heating 1", label: "Heating 1" },
    { value: "Heating 2", label: "Heating 2" },
    { value: "Heating 3", label: "Heating 3" },
  ]);
  const [energyClassOptions] = useState([
    { value: "Class 1", label: "Class 1" },
    { value: "Class 2", label: "Class 2" },
    { value: "Class 3", label: "Class 3" },
  ]);
  const [isTopFloor, setIsTopFloor] = useState();
  const [isSuitableStudent, setIsSuitableStudent] = useState();
  const [isSuitableHoliday, setIsSuitableHoliday] = useState();
  const [isSuitablePets, setIsSuitablePets] = useState();
  const [selectedOrientation, setSelectedOrientation] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedHeatingValue, setSelectedHeatingValue] = useState(null);
  const [selectedHeatingMediumValue, setSelectedHeatingMediumValue] =
    useState(null);
  const [energyClass, setEnergyClass] = useState(null);
  const [bathroomValue, setBathroomValue] = useState();
  const [bedroomValue, setBedroomValue] = useState();
  const [wcValue, setWcValue] = useState();
  const [kitchenValue, setKitchenValue] = useState();
  const [livingRoomValue, setLivingRoomValue] = useState();
  const [wardrobeValue, setWardRobValue] = useState();
  const [levelValue, setLevelValue] = useState();
  const [constructionDate, setConstructionDate] = useState();
  const [commanExpenses, setCommonExpenses] = useState();
  const [description, setDescription] = useState();
  const [imageUpload, setImageUpload] = useState();
  const [imageData, setImageData] = useState(null);
  const [fileData, setFileData] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImageData(storedImage);
    }
    const localResidencialData = localStorage.getItem("residencialData");
    if (localResidencialData) {
      setResidencialData(JSON.parse(localResidencialData));
    } else {
      setResidencialData(residencialProperty);
    }
    const localcommercialData = localStorage.getItem("commercialData");
    if (localcommercialData) {
      setCommercialData(JSON.parse(localcommercialData));
    } else {
      setCommercialData(commercialProperty);
    }
    const localpropertyName = localStorage.getItem("propertyName");
    if (localpropertyName) {
      setProperyName(localpropertyName);
    } else {
      setPropertyStatusData(propertyStatus);
    }
    const localaddress = localStorage.getItem("address");
    if (localaddress) {
      setAddress(localaddress);
    }
    const localunit = localStorage.getItem("unit");
    if (localunit) {
      setUnit(localunit);
    }
    const localmonthlyPrice = localStorage.getItem("monthlyPrice");
    if (localmonthlyPrice) {
      setMonthlyPrice(localmonthlyPrice);
    }

    const localsecurityDeposite = localStorage.getItem("securityDeposite");
    if (localsecurityDeposite) {
      setSecurityDeposite(localsecurityDeposite);
    }

    setLotAreaSize(localStorage.getItem("lotAreaSize"));
    setPropertyAreaSize(localStorage.getItem("propertyAreaSize"));
    setSelectedOrientation(
      JSON.parse(localStorage.getItem("selectedOrientation"))
    );
    setSelectedFloor(JSON.parse(localStorage.getItem("selectedFloor")));
    setLevelValue(localStorage.getItem("levelValue"));
    setIsTopFloor(localStorage.getItem("isTopFloor") === "true");
    setBedroomValue(localStorage.getItem("bedroomValue"));
    setBathroomValue(localStorage.getItem("bathroomValue"));
    setWcValue(localStorage.getItem("wcValue"));
    setKitchenValue(localStorage.getItem("kitchenValue"));
    setLivingRoomValue(localStorage.getItem("livingRoomValue"));
    setWcValue(localStorage.getItem("wardrobeValue"));

    const localotherData = localStorage.getItem("otherData");
    if (localotherData) {
      setOtherData(JSON.parse(localotherData));
    } else {
      setOtherData(otherProperty);
    }
    const localotherHeatingOptionData = localStorage.getItem(
      "otherHeatingOptionData"
    );
    if (localotherHeatingOptionData) {
      setOtherHeatingOptionData(JSON.parse(localotherHeatingOptionData));
    } else {
      setOtherHeatingOptionData(otherHeatingOptions);
    }

    setSelectedZone(JSON.parse(localStorage.getItem("selectedZone")));
    setPropertyStatusData(
      JSON.parse(localStorage.getItem("properyStatusData"))
    );
    setConstructionDate(localStorage.getItem("constructionDate"));
    setCommonExpenses(localStorage.getItem("commanExpenses"));
    setIsSuitableStudent(localStorage.getItem("isSuitableStudent") === "true");
    setIsSuitableHoliday(localStorage.getItem("isSuitableHoliday") === "true");
    setIsSuitablePets(localStorage.getItem("isSuitablePets") === "true");
    setSelectedHeatingValue(
      JSON.parse(localStorage.getItem("selectedHeatingValue"))
    );
    setSelectedHeatingMediumValue(
      JSON.parse(localStorage.getItem("selectedHeatingMediumValue"))
    );
    setEnergyClass(JSON.parse(localStorage.getItem("energyClass")));
    setDescription(localStorage.getItem("description"));
    setFileData(localStorage.getItem("uploadedFile"));
  }, []);
  const checkboxEventHandler = (e, type) => {
    if (type === "residencialData") {
      let temp = [...residencialData];
      temp.forEach((item) => {
        if (item.value === e.target.value) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        }
      });
      setResidencialData(temp);
    }
    if (type === "commercialData") {
      let temp = [...commercialData];
      temp.forEach((item) => {
        if (item.value === e.target.value) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        }
      });
    }
    if (type === "otherData") {
      let temp = [...otherData];
      temp.forEach((item) => {
        if (item.value === e.target.value) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        }
      });
    }
    if (type === "properyStatusData") {
      let temp = [...properyStatusData];
      temp.forEach((item) => {
        if (item.value === e.target.value) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        }
      });
      setPropertyStatusData(temp);
    }
    if (type === "otherHeatingOptionData") {
      let temp = [...otherHeatingOptionData];
      temp.forEach((item) => {
        if (item.value === e.target.value) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        }
      });
      setOtherHeatingOptionData(temp);
    }
  };
  const handleChangeRadio = (e, type) => {
    if (type === "topfloor") {
      if (e.target.value === "yes") {
        setIsTopFloor(true);
      } else {
        setIsTopFloor(false);
      }
    }
    if (type === "suitableStudent") {
      if (e.target.value === "yes") {
        setIsSuitableStudent(e.target.value);
      } else {
        setIsSuitableStudent(e.target.value);
      }
    }
    if (type === "suitableHoliday") {
      if (e.target.value === "yes") {
        setIsSuitableHoliday(true);
      } else {
        setIsSuitableHoliday(false);
      }
    }
    if (type === "suitablePets") {
      if (e.target.value === "yes") {
        setIsSuitablePets(true);
      } else {
        setIsSuitablePets(false);
      }
    }
  };
  console.log("constructionDate", constructionDate);
  const handleSubmit = () => {
    localStorage.setItem("residencialData", JSON.stringify(residencialData));
    localStorage.setItem("commercialData", JSON.stringify(commercialData));
    localStorage.setItem("propertyName", propertyName);
    localStorage.setItem("address", address);
    localStorage.setItem("unit", unit);
    localStorage.setItem("monthlyPrice", monthlyPrice);
    localStorage.setItem("securityDeposite", securityDeposite);
    localStorage.setItem("lotAreaSize", lotAreaSize);
    localStorage.setItem("propertyAreaSize", propertyAreaSize);
    localStorage.setItem(
      "selectedOrientation",
      JSON.stringify(selectedOrientation)
    );
    localStorage.setItem("selectedFloor", JSON.stringify(selectedFloor));
    localStorage.setItem("levelValue", levelValue);
    localStorage.setItem("isTopFloor", isTopFloor);
    localStorage.setItem("bedroomValue", bedroomValue);
    localStorage.setItem("bathroomValue", bathroomValue);
    localStorage.setItem("wcValue", wcValue);
    localStorage.setItem("kitchenValue", kitchenValue);
    localStorage.setItem("livingRoomValue", livingRoomValue);
    localStorage.setItem("wardrobeValue", wardrobeValue);
    localStorage.setItem("otherData", JSON.stringify(otherData));
    localStorage.setItem("selectedZone", JSON.stringify(selectedZone));
    localStorage.setItem(
      "properyStatusData",
      JSON.stringify(properyStatusData)
    );

    localStorage.setItem("constructionDate", constructionDate);
    localStorage.setItem("commanExpenses", commanExpenses);
    localStorage.setItem("isSuitableStudent", isSuitableStudent);
    localStorage.setItem("isSuitableHoliday", isSuitableHoliday);
    localStorage.setItem("isSuitablePets", isSuitablePets);
    localStorage.setItem(
      "selectedHeatingValue",
      JSON.stringify(selectedHeatingValue)
    );
    localStorage.setItem(
      "selectedHeatingMediumValue",
      JSON.stringify(selectedHeatingMediumValue)
    );
    localStorage.setItem("energyClass", JSON.stringify(energyClass));
    localStorage.setItem(
      "otherHeatingOptionData",
      JSON.stringify(otherHeatingOptionData)
    );
    localStorage.setItem("description", description);
    localStorage.setItem("uploadedImage", imageUpload);
    localStorage.setItem("uploadedFile", fileData);
    history("/payment");
  };
  const handleSetDate = (e) => {
    const newDate = e.target.value;

    setConstructionDate(newDate);
  };
  const handleClearImage = () => {
    setImageData(null);
    // Clear image data from local storage
    localStorage.removeItem("uploadedImage");
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUpload(reader.result);
        setImageData(reader.result);
        // setUploadDate(new Date().toLocaleString());
        // Optionally, store image data in local storage
        // localStorage.setItem('uploadDate', new Date().toLocaleString());
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileData(reader.result);
        // setUploadDate(new Date().toLocaleString());
        // Optionally, store image data in local storage
        // localStorage.setItem('uploadDate', new Date().toLocaleString());
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Reacidencial</Accordion.Header>
          <Accordion.Body>
            <Row className="justify-content-lg-start">
              {residencialData?.map((item) => {
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
                      onChange={(e) =>
                        checkboxEventHandler(e, "residencialData")
                      }
                    />
                  </Col>
                );
              })}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Commercial</Accordion.Header>
          <Accordion.Body>
            <Row className="justify-content-lg-start">
              {commercialData?.map((item) => {
                return (
                  <Col xs lg="4">
                    <Form.Check
                      inline
                      checked={item.checked}
                      label={item.label}
                      value={item.value}
                      name={item.label}
                      type="checkbox"
                      id={`commercialData`}
                      onChange={(e) =>
                        checkboxEventHandler(e, "commercialData")
                      }
                    />
                  </Col>
                );
              })}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <hr />
      <div className=" ">
        <h2 className="">Main parameters</h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Property Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setProperyName(e.target.value)}
            value={propertyName}
            placeholder="Enter Property Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="Enter Address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Unit</Form.Label>
          <Form.Control
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Enter unit"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Monthly Price</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setMonthlyPrice(e.target.valye)}
            value={monthlyPrice}
            placeholder="Enter Monthly Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Security Deposit</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setSecurityDeposite(e.target.value)}
            value={securityDeposite}
            placeholder="Enter Security Deposit"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Upload image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
        </Form.Group>
        {imageData && (
          <div>
            <Image src={imageData} alt="Uploaded" fluid />
            <Button variant="danger" onClick={handleClearImage}>
              Clear Image
            </Button>
          </div>
        )}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Upload document</Form.Label>
          <Form.Control type="file" accept="" onChange={handleFileChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            Lot area size (m<sup>2</sup>)
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLotAreaSize(e.target.value)}
            value={lotAreaSize}
            placeholder="Enter Lot area size"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            Property area size (m<sup>2</sup>)
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setPropertyAreaSize(e.target.value)}
            value={propertyAreaSize}
            placeholder="Enter Property area size"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Orientation</Form.Label>
          <Select
            value={selectedOrientation}
            onChange={setSelectedOrientation}
            options={orientation}
            placeholder="Select"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Choose Floor</Form.Label>
          <Select
            value={selectedFloor}
            onChange={setSelectedFloor}
            options={floor}
            placeholder="Select"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Levels</Form.Label>
          <NumberInput value={levelValue} setValue={setLevelValue} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Is it on top floor?</Form.Label>
          <Form.Check
            label="yes"
            name="radio1"
            value="yes"
            type="radio"
            id={`radio1`}
            checked={isTopFloor}
            onClick={(e) => handleChangeRadio(e, "topfloor")}
          />
          <Form.Check
            label="no"
            name="radio1"
            value="no"
            type="radio"
            checked={!isTopFloor}
            id={`radio1`}
            onClick={(e) => handleChangeRadio(e, "topfloor")}
          />
        </Form.Group>
        <h2>Rooms</h2>
        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Bedroom</Form.Label>
            <NumberInput value={bedroomValue} setValue={setBedroomValue} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Bathroom</Form.Label>
            <NumberInput value={bathroomValue} setValue={setBathroomValue} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>WC</Form.Label>
            <NumberInput value={wcValue} setValue={setWcValue} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Kitchen</Form.Label>
            <NumberInput value={kitchenValue} setValue={setKitchenValue} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Living room</Form.Label>
            <NumberInput
              value={livingRoomValue}
              setValue={setLivingRoomValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Wardrobe</Form.Label>
            <NumberInput value={wardrobeValue} setValue={setWardRobValue} />
          </Form.Group>
        </div>
        <h2>Other Features</h2>
        <Row className="justify-content-lg-start">
          {otherData?.map((item) => {
            return (
              <Col xs lg="4">
                <Form.Check
                  inline
                  label={item.label}
                  value={item.value}
                  name="group5"
                  type="checkbox"
                  id={`group5`}
                  checked={item.checked}
                  onChange={(e) => checkboxEventHandler(e, "otherData")}
                />
              </Col>
            );
          })}
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Zone</Form.Label>
          <Select
            value={selectedZone}
            onChange={setSelectedZone}
            options={zone}
            placeholder="Select"
          />
        </Form.Group>
        <h2>The Property is</h2>
        <Row className="justify-content-lg-start">
          {properyStatusData?.map((item) => {
            return (
              <Col xs lg="4">
                <Form.Check
                  inline
                  label={item.label}
                  value={item.value}
                  name="group2"
                  type="checkbox"
                  id={`inline-1`}
                  onChange={(e) => checkboxEventHandler(e, "properyStatusData")}
                />
              </Col>
            );
          })}
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Construction Year</Form.Label>
          <Form.Control
            type="date"
            value={constructionDate}
            onChange={handleSetDate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
          <Form.Label>Common Expenses</Form.Label>
          <Form.Control
            type="text"
            value={commanExpenses}
            onChange={(e) => setCommonExpenses(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Is it suitable for students?</Form.Label>
          <Form.Check
            label="yes"
            name="radio2"
            type="radio"
            id={`radio2`}
            value="yes"
            checked={isSuitableStudent}
            onClick={(e) => handleChangeRadio(e, "suitableStudent")}
          />
          <Form.Check
            label="no"
            name="radio2"
            type="radio"
            id={`radio2`}
            value="no"
            checked={!isSuitableStudent}
            onClick={(e) => handleChangeRadio(e, "suitableStudent")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Is it suitable for holiday home?</Form.Label>
          <Form.Check
            label="yes"
            name="radio3"
            value="yes"
            type="radio"
            id={`radio3`}
            checked={isSuitableHoliday}
            onClick={(e) => handleChangeRadio(e, "suitableHoliday")}
          />
          <Form.Check
            label="no"
            name="radio3"
            value="no"
            type="radio"
            id={`radio3`}
            checked={!isSuitableHoliday}
            onClick={(e) => handleChangeRadio(e, "suitableHoliday")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Is it suitable for pets?</Form.Label>
          <Form.Check
            label="yes"
            value={"yes"}
            name="radio4"
            type="radio"
            id={`radio4`}
            checked={isSuitablePets}
            onClick={(e) => handleChangeRadio(e, "suitablePets")}
          />
          <Form.Check
            label="no"
            value="no"
            name="radio4"
            type="radio"
            id={`radio4`}
            checked={!isSuitablePets}
            onClick={(e) => handleChangeRadio(e, "suitablePets")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Heating</Form.Label>
          <Select
            value={selectedHeatingValue}
            onChange={setSelectedHeatingValue}
            options={heatingOption}
            placeholder="Select"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Heating Medium</Form.Label>
          <Select
            value={selectedHeatingMediumValue}
            onChange={setSelectedHeatingMediumValue}
            options={heatingOption}
            placeholder="Select"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Energy Class</Form.Label>
          <Select
            value={energyClass}
            onChange={setEnergyClass}
            options={energyClassOptions}
            placeholder="Select"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
          <Form.Label>Other Heating Data</Form.Label>
          <Row className="justify-content-lg-start">
            {otherHeatingOptionData?.map((item) => {
              return (
                <Col xs lg="4">
                  <Form.Check
                    inline
                    label={item.label}
                    value={item.value}
                    name="group7"
                    type="checkbox"
                    id={`group7`}
                    onChange={(e) =>
                      checkboxEventHandler(e, "otherHeatingOptionData")
                    }
                  />
                </Col>
              );
            })}
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          submit
        </Button>{" "}
      </div>
    </div>
  );
};

export default AddPropertyComponent;
