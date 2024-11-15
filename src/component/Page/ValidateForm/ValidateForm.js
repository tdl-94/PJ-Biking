import React, { useState } from "react";
import "./ValidateForm.css";
const ValidateForm = () => {
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [errs, setErrs] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrs = { ...errs };
    newErrs.username = !values.username ? "Username không được để trống" : "";
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!values.email) {
      newErrs.email = "Email không được để trống";
    } else if (!re.test(values.email)) {
      newErrs.email = "Email không hợp lệ";
    } else {
      newErrs.email = "";
    }
    newErrs.password = !values.password ? "Username is required." : "";
    if (!values.repassword) {
      newErrs.repassword = "Repassword không được rỗng";
    } else if (values.password !== values.repassword) {
      newErrs.repassword = "Password không giống nhau";
    } else {
      newErrs.repassword = "";
    }
    //newErrs nó rỗng hết -> Tất cả key của nó đều rỗng
    if (Object.values(newErrs).every((item) => item === "")) {
      alert("Thành Công Ngủ Rồi Yeah");
    }
    setErrs(newErrs);
    console.log(errs);
  };
  const handleInputchange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  return (
    <div className="concu">
      <div className="form">
        <h1>Get Started</h1>
        <form onSubmit={handleSubmit}>
          <p>Fullname</p>
          <input
            type="text"
            name="username"
            placeholder=""
            onChange={handleInputchange}
          />
          <p className="error">{errs.username}</p>
          <p>Email</p>
          <input
            type="text"
            name="email"
            placeholder=""
            onChange={handleInputchange}
          />
          <p className="error">{errs.email}</p>
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder=""
            onChange={handleInputchange}
          />
          <p className="error">{errs.password}</p>
          <p>rePassword</p>
          <input
            type="password"
            name="repassword"
            placeholder=""
            onChange={handleInputchange}
          />
          <p className="error">{errs.repassword}</p>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default ValidateForm;
