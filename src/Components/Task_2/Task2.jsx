import React from "react";
import { useState } from "react";

const Task2 = () => {
  const [users, setUsers] = useState([]);
  const [showPassword, setPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdayDate: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      birthdayDate: "",
      gender: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
    });
  };
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          className="form-control form-control-lg"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="firstName">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="form-control form-control-lg"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="lastName">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input
                          type="date"
                          name="birthdayDate"
                          className="form-control form-control-lg"
                          id="birthdayDate"
                          value={formData.birthdayDate}
                          onChange={handleChange}
                        />
                        <label for="birthdayDate" className="form-label">
                          Birthday
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          className="form-control form-control-lg"
                          value={formData.emailAddress}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="form-control form-control-lg"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type={!showPassword ? "password" : "text"}
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <button
                        className="btn btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                          setPassword(!showPassword);
                        }}
                      >
                        Show password
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                      value="Register"
                      onClick={submit}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task2;
