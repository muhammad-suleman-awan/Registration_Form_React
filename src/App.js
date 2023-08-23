import "./App.css";
import React, { useRef } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Form_Reg from "./components/RegForm.js";
import Record from "./components/DisplayRecord";
import Swal from "sweetalert2";

function App() {
  const [formValues, setFormValues] = React.useState([]);
  const [selectedRecord, setSelectedRecord] = useState([]);
  const [sharedData, setSharedData] = useState([]);
  const [isFormopen, setisFormopen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (data) => {  
    console.log("Edit  data data DATA",data);
    const existingEmailRecord = formValues.find(
      (record) => record.email === data.email
      
    );
    const existingAreacode = formValues.find(
      (record) => record.areaCode === data.areaCode
    );
    const exitingPhoe = formValues.find(
      (record) => record.phoneNumber === data.phoneNumber
    );
    {
      const existingRecord = formValues.find((record) => record.id === data.id);
      if (existingRecord) {
        // Update existing record
        const updatedFormValues = formValues.map((record) => {
          if (record.id === data.id) {
            return data;
          }
          return record;
        });

        setFormValues(updatedFormValues);
      } else {
        // Add new record
        // if (existingEmailRecord) {
        //   Swal.fire("Already Email Exit ");
        //   setisFormopen(false);
        //   // console.log("Error");
        // } else 
        // if (existingAreacode && exitingPhoe) {
        //   Swal.fire("Already Phone Number Exit ");
        //   setisFormopen(false);
        //   //  console.log("Error");
        // } else 
        setFormValues([...formValues, data]);
      }
      // console.log(        "Data from App component after submitting the form:",formValues  );
      setisFormopen(false);
    }
  };
  const childRef = useRef(null); // Create a ref for the child component
  const handleDataChange = (newValue) => {
  //   console.log("Data selectedRecord  object App:", id);
    setSharedData(newValue);
  };
  const onDelete = (record) => {
    const updatedFormValues = formValues.filter(
      (item) => item.id !== record.id
    );
    setFormValues(updatedFormValues);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {isFormopen && (
            <Form_Reg
              sharedData={sharedData}
              onSubmit={handleFormSubmit}
              selectedRecord={selectedRecord}
              setisFormopen={setisFormopen}
              checkformValues={formValues}
              setSharedData={setSharedData}
            />
          )}
          {!isFormopen && formValues && (
            <Record
              data={formValues}
              onEdit={handleDataChange}
              setisFormopen={setisFormopen}
              setSharedData={setSharedData}
              onDelete={onDelete}
              onView
            />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
