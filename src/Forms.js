import { useEffect, useState } from "react";

const LoginForm = () => {
  const initialValues = { fname: "", lname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    console.log(formValues);
  };

  //   useEffect(() => {
  //     (Object.keys(formErrors).length === 0 && isSubmit ? <p>Successful</p> : <p>Unsuccessful</p>)
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!(values.fname && values.lname)) {
      error.fname = "Input your name";
    }
    if (!values.email) {
      error.email = "Input your email";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email address";
    }

    if (!values.password) {
      error.password = "Input your password";
    } else if (values.password < 6) {
      error.password = "Password is too short";
    } else if (values.password > 15) {
      error.password = "Password is too long";
    }
    return error;
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit} className="forms">
        <div>
          <input
            type="text"
            value={formValues.fname}
            name="fname"
            placeholder="Firstname"
            onChange={handleChange}
          />
          <p className="error">{formErrors.fname}</p>
        </div>
        <div>
          <input
            type="text"
            value={formValues.lname}
            name="lname"
            placeholder="lastname"
            onChange={handleChange}
          />
          <p className="error">{formErrors.fname}</p>
        </div>
        <div>
          <input
            type="text"
            value={formValues.email}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <p className="error">{formErrors.email}</p>
        </div>
        <div>
          <input
            type="text"
            value={formValues.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <p className="error">{formErrors.password}</p>
        <input type="submit" className="btn" />
      </form>
    </div>
  );
};

export default LoginForm;
