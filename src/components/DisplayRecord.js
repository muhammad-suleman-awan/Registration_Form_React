import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteSweep } from "react-icons/md";
import { GrView } from "react-icons/gr";
import Form_Reg from "./RegForm.js";
import { within } from "@testing-library/react";

const Record = ({ data, onEdit, setisFormopen, setSharedData, onDelete,onView }) => {
  if (!data) {
    return null;
  }
  //console.log("Data Collect in Display Component xyz:>", data);
  //console.log("Data object:", data.firstName);

  //console.log("First record:", data.firstName);

  const handleDelete = (record) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) { 
        onDelete(record);
      }
    });

    //onDelete(record);
    // setisFormopen(true);
  };

  const handleView = (record) => {
   //onView(record); 
    const {
      firstName,
      lastName,
      company,
      email,
      areaCode,
      phoneNumber,
      options,
      option,
    } = record;

    const message = `First Name: ${firstName} \nLast Name: ${lastName}\nCompany: ${company}\n
      Email: ${email}\nPhone: ${areaCode}${phoneNumber}\nSubject: ${options}\nExiting Customer: ${option}`;

    Swal.fire({
      title: "View Record",
      text: message,
      icon: "info",
      customClass: {
        container: "swal-container",
      },
      showConfirmButton: false,
      showCloseButton: true,
      //timer: 5000,
    });
  };
  const handleEdit = (record) => {
    onEdit(record);
    setisFormopen(true);
    //console.log("Data Collect in Edit button call record :", record );
  };
  return (
    <>
      <div
        className="sl"
        style={{
          borderColor: "white",
          borderStyle: "solid",
          borderSolor: "white",

          backgroundColor: "white",
          marginLeft: "3%",
          width: "95%",
          marginTop: "20px",
        }}
      >
        <nav
          style={{
            backgroundColor: "white",
            marginTop: "10px",
            marginLeft: "10px",
            marginRight: "20px",
            width: "95%",
            paddingBottom: "px",
            textAlign: "left",
            //  backgroundColor: "hsl(0deg 0% 99.14%)",
            // borderColor: "red",
            // borderStyle: "solid",
            // borderSolor: "red",
          }}
        >
          <p
          
          >
          <button
             onClick={() => {
                  setisFormopen(true);
                  setSharedData({});
                }}
                type="button"
                className="btn   btn-lg"
                style={{
              fontWeight: "bold",
              color: "White",
              paddingTop: "0px",
              fontSize: "22px",
              color: "Black",
              marginLeft: "0px",
              backgroundColor: "white",
            }}
            >
            Registration Information
           </button>
          </p>
          <a>
            <p
              style={{
                paddingRight: "0px",
                marginTop: "-70px",
                textAlign: "right",
                fontSize: "20px",
                color: "Black",
                backgroundColor: "white",
              }}
            >
              <button
                onClick={() => {
                  setisFormopen(true);
                  setSharedData({});
                }}
                type="button"
                className="btn   btn-lg"
                style={{
                  fontWeight: "bold",
                  width:"130px",
                  height:"40%",
                  borderColor: "lightgray",
                  borderTopWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightWidth: "2px",
                  borderLeftWidth: "2px",
                    borderStyle: "double double double double",
                }}
              >
                New User
              </button>
            </p>
          </a>
        </nav>

        <table
          style={{
            // borderColor: "red",
            // borderStyle: "groove;",
            // borderSolor: "white",
            marginTop: " 30px",
            marginLeft: "30px",
            marginRight: "20px",
            marginBottom: "20px",
            width: "95%",
            backgroundColor: "white",
            borderColor: "lightgray",
            borderTopWidth: "2px",
            borderBottomWidth: "2px",
            borderStyle: "solid none none none",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  paddingLeft: "0px",
                  paddingRight: "40px",
                  backgroundColor: "white",
                }}
              >
                NAME
              </th>
              <th
                style={{
                    paddingLeft: "10px",
                  paddingRight: "20px",
                  backgroundColor: "white", 
                }}
              >
                COMPANY
              </th>
              <th
                style={{
                  //backgroundColor: "yellow",
                  //   paddingLeft: "10px",
                  paddingRight: "40px",
                  backgroundColor: "white", 
                }}
              >
                EMAIL
              </th>
              <th
                style={{
                  // backgroundColor: "yellow",
                  //   paddingLeft: "10px",
                  paddingRight: "40px",
                  backgroundColor: "white",
                }}
              >
                PHONE
              </th>
              <th
                style={{
                  //  backgroundColor: "yellow",
                  //   paddingLeft: "10px",
                 // paddingRight: "40px",
                  backgroundColor: "white",
                  padding: "0px 0px 0px 10px ",
                }}
              >
                SUBJECT
              </th>
              <th
                style={{
                  //  backgroundColor: "yellow",
                  //   paddingLeft: "10px",
                  //paddingRight: "40px",
                  backgroundColor: "white",
                  padding: "0px 0px 0px 10px ",
                }}
              >
                EXITING CUSTOMER
              </th>
              <th
                style={{
                  //  backgroundColor: "yellow",
                  //   paddingLeft: "10px",
                  paddingRight: "40px",
                  backgroundColor: "white",
                }}
              >
                ACTIONS
              </th>
            </tr>
          </thead>
            {data.map((record, index) => {
              return (
                <tr
                  key={record.id}
                  style={{
                    height: "50px",

                    borderColor: "lightgray",
                    borderTopWidth: "2px",
                    borderBottomWidth: "1px",
                    borderStyle: "solid none solid none",
                  }}
                >
                  <td
                  style={{
                      paddingRight: "5px",
                    }}
                  >
                    {record.firstName}   {record.lastName}
                  </td>
                
                  <td
                    style={{
                      height: "50px",
                      width: "20px",
                      paddingLeft: "15px",
                      backgroundColor: "white",
                    }}
                  >
                    {record.company}
                  </td>
                  <td
                    style={{
                      height: "50px",

                      paddingLeft: "0px",
                      backgroundColor: "white",
                    }}
                  >
                    {record.email}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      borderColor: "red",
                      borderStyle: "groove",
                      borderSolor: "white",
                      paddingLeft: "5px",
                    }}
                  >
                    {record.areaCode}
                    {record.phoneNumber}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      borderColor: "red",
                      borderStyle: "groove",
                      borderSolor: "white",
                      padding: "0px 0px 0px 10px ",
                    }}
                  >
                    {record.options}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      borderColor: "red",
                      borderStyle: "groove",
                      borderSolor: "white",
                      padding: "0px 0px 0px 10px ",
                    }}
                  >
                    {record.option}
                  </td>
                  <td
                    style={{
                      height: "50px",
                      backgroundColor: "white",
                      borderColor: "red",
                      borderStyle: "groove",
                      borderSolor: "white",
                      padding: "0px 0px 0px 0px ",
                    }}
                  >
                  <div style={{
                      height:"80%",width:"90px", borderWidth: "thin", border: "solid lightgray",
                      padding:"0px 0px 2px 0px",
                        borderColor:"lightgray",
                        borderRadius:"10px ",    
                  borderTopWidth: "2px",
                  borderBottomWidth: "2px",
                  borderRightWidth: "2px",
                  borderLeftWidth: "2px",
               
                  borderStyle: "double double double double",
                    }}>
                    <button style={{
                      border:"none",
                      marginLeft: "5px"
                    }}
                      onClick={() => {
                        
                        handleEdit(record);
                      }}
                      
                    >
                      <i class="fa-solid fa-user" ic></i>
                      <AiFillEdit />
                    </button>
                    <button 
                      onClick={() => {
                        handleDelete(record);
                      }}
                      style={{ marginLeft: "10px",border:"none"
                       }}
                    >
                      <i class="fa-solid fa-user" ic></i>
                      <MdDeleteSweep />
                    </button>
                    <button
                      onClick={() => {
                        handleView(record);
                      }}
                      style={{ margin: "10px", border:"none" }}
                    >
                      <i class="fa-solid fa-user" ic></i>
                      <GrView />
                    </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          
        </table>
      </div>
      <table></table>
    </>
  );
};

export default Record;
