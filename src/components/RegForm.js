import React, { forwardRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validationSchema } from "../validation/formvalidation";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
const Form_Reg = ({
  onSubmit,
  sharedData,
  setisFormopen,
  setSharedData,
  checkformValues,
}) => { 
  const handleSubmit = (values, { resetForm }) => {
    const existingEmail = checkformValues.find(
      (record) => record.email === values.email
    );
    const existingPhone = checkformValues.find(
      (record) => record.phoneNumber === values.phoneNumber
    );
    if (existingEmail && !sharedData.id) {
      Swal.fire("Error", "Email already exists", "error");    
    } else if (existingPhone && existingPhone.id !== sharedData.id) {
      Swal.fire("Error", "Phone number already exists", "error");
    } else {
      if (sharedData.id) {
        onSubmit(values);
        resetForm();
      } else {
        const newData = { ...values, id: uuidv4() };
        onSubmit(newData);
        resetForm();
      }
    }
  };
  
  const isEditMode = sharedData && Object.keys(sharedData).length > 0;
  return (
    <div className="box ">
      <div className="header">
        <p>EVENT REGESTRATION FORM</p>
      </div>
      <Formik
        initialValues={{
          id: sharedData.id ? sharedData.id : uuidv4(),
          firstName: sharedData.firstName,
          lastName: sharedData.lastName,
          company: sharedData.company,
          email: sharedData.email,
          areaCode: sharedData.areaCode,
          phoneNumber: sharedData.phoneNumber,
          options: sharedData.options,
          option: sharedData.option,
        }}
        validationSchema={validationSchema(checkformValues)}
        onSubmit={handleSubmit} 
      >
        {(props) => (
          <Form>
            <div className="row  ">
              <div className="col-2" style={{ margin: "10px 0px 0px 0px" }}>
                <p>Name</p>
              </div>
              <div className="col-4 ">
                {/* <input type="text" name="firstname"/> */}
                <Field
                  type="text"
                  name="firstName"
                  onChange={props.handleChange}
                  //{(e) => {
                  // console.log(
                  //   "onChange: ",
                  //   e.currentTarget.name,
                  //   e.currentTarget.value
                  //   //     setSharedData({...sharedData, firstName: e.target.value })
                  // );
                  // }

                  onBlur={(e) => {
                    console.log(
                      "onBlur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.firstName}
                  style={{ margin: "0px 0px 0px 0px" }}
                />
                <small>First Name</small>
                <p className="text-danger">
                  <ErrorMessage name="firstName"></ErrorMessage>
                </p>
              </div>

              <div className="col-4">
                {/* <input type="text" id="lastName" name="lastName" /> */}
                <Field
                  type="text"
                  name="lastName"
                  onChange={(e) => {
                    console.log(
                      "onChange: "
                      // e.currentTarget.name,
                      //   e.currentTarget.value
                    );
                    props.handleChange(e);
                  }}
                  onBlur={(e) => {
                    console.log(
                      "onBlur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.lastName}
                  style={{ margin: "0px 0px 0px 0px" }}
                />
                <small>Last Name</small>
              </div>
            </div>

            <div className="row ">
              <div className="col-2" style={{ margin: "15px 0px 0px 0px" }}>
                <p>Company</p>
              </div>
              <div className="col-8">
                {/* <input type="text" id="company" /> */}
                <Field
                  type="text"
                  name="company"
                  onChange={(e) => {
                    console.log(
                      "Onchange Comapnay::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleChange(e);
                  }}
                  onBlur={(e) => {
                    console.log(
                      "onBlur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.company}
                  style={{ margin: "8px 0px 0px 0px" }}
                />
                <p className="text-danger">
                  <ErrorMessage name="company"></ErrorMessage>
                </p>
              </div>
            </div>

            <div className="row ">
              <div className="col-2" style={{ margin: "10px 0px 0px 0px" }}>
                <p>Email</p>
              </div>
              <div className="col-8">
                {/* <input type="email" name="email" /> */}
                <Field
                  type="email"
                  name="email"
                  disabled={sharedData.email !== undefined}
                  onChange={(e) => {
                    console.log(
                      "Onchange ::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleChange(e);
                  }}
                  onBlur={(e) => {
                    console.log(
                      "OnBLur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.email}
                  style={{ margin: "2px 0px 0px 0px" }}
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>
            </div>

            <div className="row  ">
              <div className="col-2" style={{ margin: "10px 0px 0px 0px" }}>
                <p>Phone</p>
              </div>
              <div className="col-3" style={{ margin: "px 0px 0px 0px" }}>
                <Field
                  type="text"
                  name="areaCode"
                  //disabled={sharedData.areaCode !== undefined}
                  onChange={(e) => {
                    console.log(
                      "Onchange ::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleChange(e);
                  }}
                  onBlur={(e) => {
                    console.log(
                      "OnBLur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.areaCode}
                  style={{ margin: "0px 0px -2px 0px" }}
                />
                <small>Area Code</small>
                <p className="text-danger">
                  <ErrorMessage
                    name="areaCode"
                    style={{ borderStyle: "solid" }}
                  />
                </p>
              </div>
              <div className="col-5">
                <Field
                  type="text"
                  name="phoneNumber"
                  //disabled={sharedData.phoneNumber !== undefined}
                  onChange={(e) => {
                    console.log(
                      "onchange:: ",
                      e.currentTarget.value,
                      e.currentTarget.name
                    );
                    props.handleChange(e);
                  }}
                  onBlur={(e) => {
                    console.log(
                      "onBlur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.phoneNumber}
                  style={{ margin: "0px 0px -2px 0px" }}
                />
                <small>Phone Number</small>
                <p className="text-danger">
                  <ErrorMessage name="phoneNumber"></ErrorMessage>
                </p>
              </div>
            </div>

            <div className="row  ">
              <div className="col-2" style={{ margin: "12px 0px 0px 0px" }}>
                <p>Subject</p>
              </div>

              <div className="col-10">
                <Field
                  component="select"
                  name="options"
                  id="option"
                  className="select-field"
                  onChange={(e) => {
                    console.log(
                      "onChange::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleChange(e);
                  }}
                  onBlur={(e) => {
                    console.log(
                      "onBlur::",
                      e.currentTarget.name,
                      e.currentTarget.value
                    );
                    props.handleBlur(e);
                  }}
                  value={props.values.options}
                  style={{ margin: "5px 0px 0px 0px" }}
                >
                  <option value="" defaultValue="">
                    Select an option
                  </option>
                  \]
                  <option value="Linux">Linux</option>
                  <option value="UBuntu">UBuntu</option>
                  <option value="MVX">MVX</option>
                  <option value="Audi">Audi</option>
                </Field>
                <p>
                  <ErrorMessage name="option" className="text-danger" />
                </p>
              </div>
            </div>

            <div className="row1" style={{ margin: "-10px 0px 0px 0px" }}>
              <div className="col-6" style={{ margin: "0px 0px 0px 0px" }}>
                <p>Are you an existing customer?</p>
                <label>
                  <Field
                    type="radio"
                    className="r1"
                    name="option"
                    value="yes"
                    onChange={(e) => {
                      console.log(
                        "onChange::",
                        e.currentTarget.name,
                        e.currentTarget.value
                      );
                      props.handleChange(e);
                    }}
                    onBlur={(e) => {
                      console.log(
                        "onBlur::",
                        e.currentTarget.name,
                        e.currentTarget.value
                      );
                      props.handleBlur(e);
                    }}
                    //value={props.values.option}
                    style={{ margin: "10px 5px 0px -10px" }}
                  />
                  Yes
                </label>
                <label>
                  <Field
                    type="radio"
                    className="r2"
                    name="option"
                    value="no"
                    autoComplete="no"
                    onChange={(e) => {
                      console.log(
                        "onChange::",
                        e.currentTarget.name,
                        e.currentTarget.value
                      );
                      props.handleChange(e);
                    }}
                    onBlur={(e) => {
                      console.log(
                        "onBlur::",
                        e.currentTarget.name,
                        e.currentTarget.value
                      );
                      props.handleBlur(e);
                    }}
                    // value={props.values.option}
                    style={{ margin: "15px 5px 0px 30px" }}
                  />
                  No
                </label>
                <p
                  className="text-danger"
                  style={{ margin: "0px 5px 0px 0px" }}
                >
                  <ErrorMessage name="option"></ErrorMessage>
                </p>

                {/* <ErrorMessage name="option" component="div" className="text-danger" style={{fontWeight: "bold",}} /> */}
              </div>
            </div>

            <div className="row1">
              <div className="col-6" style={{ margin: "0px 0px 0px 5px" }}>
                <button className="btn btn-lg btn-danger" type="submit">
                  {isEditMode ? "EDIT" : "REGISTER"}
                </button>
                <button
                  onClick={() => {
                    setisFormopen(false);
                  }}
                  className="btn btn-lg btn-primary"
                  type="button"
                  style={{ margin: "-76px -0px 0px 135px" }}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Form_Reg;
