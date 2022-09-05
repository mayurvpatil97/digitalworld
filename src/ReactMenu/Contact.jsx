import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    // let name = event.target.name;
    // let val = event.target.value;
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    alert(
      `My full name is${data.fullname}.  My mobile number is${data.phone}.  My message is${data.msg}. My email id is${data.email}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1>Contact US</h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={FormSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    FullName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby=""
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Enter your Mobile No."
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    placeholder="Enter text message "
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="Enter your Email Id"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
