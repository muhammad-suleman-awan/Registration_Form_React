import { yupToFormErrors } from "formik";
import * as Yup from "yup";
import { setLocale } from "yup";

// Assuming you have a function called `checkEmailExists` that checks if an email already exists
 
export const validationSchema = ({ checkformValues }) =>
  Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Invalid Name")
      .min(2, "Too Short!")
      .max(12, "Too Long!")
      .required("Required")
      .test("logFirstName", "Console log firstName", function (value) {
        console.log("firstNamedfgdfg:", value);
        console.log("checkformValues:", checkformValues);
        return true; // Return true to pass the test
      }),

    lastName: Yup.string()
      .min(2, "Too Short!")
      .matches(/^[A-Za-z]+$/, "Invalid Name")
      .max(12, "Too Long!"),

      company: Yup.string()
      .min(2, "Too Short!")
      .max(24, "Too Long!")
      .matches(/^\S.*$/, "Company name should not start with a space")
      .required("Required"),
      

     
      email: Yup.string()
      .email("Invalid email")
      .test("no-space", "Spaces are not allowed in email", function (value) {
        if (value && /\s/.test(value)) {
          return this.createError({
            path: "email",
            message: "Spaces are not allowed in email",
          });
        }
        return true;
      })
      .required("Email is required"),
      
      
     


    
      areaCode: Yup.string()
      .matches(/^[^\s]+$/, "Spaces are not allowed in area code")
      .test("is-numeric", "3-Digits", (value) => /^\d{3}$/.test(value))
      .typeError("Invalid Area") // Error message for invalid number format
      .required("Area code is required"), // Error message for missing value

      phoneNumber: Yup.string()
      .matches(/^[^\s]+$/, "Spaces are not allowed in phone number")
      .matches(/^\d{7}$/, "Phone number must be exactly 7 digits")
      .required("Phone number is required"), // Error message for missing value


    // phoneNumber: Yup.number()
    // .test(
    //   'is-seven-digits',
    //   'Phone Number 7 digits',
    //   (value) => /^\d{7}$/.test(value)
    // )
    // .required('Required'),

    option: Yup.string()
      .test("isRequired", "Please select an option", (value) => {
        return value === "yes" || value === "no";
      })
      .required("Please select an option"),

    options: Yup.string()
      .oneOf(["Linux", "UBuntu", "MVX", "Audi"], "Please select a valid option")
      .required("Please select an option"),
  });
