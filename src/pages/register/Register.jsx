import { useState } from "react";
import "./register.css";
import { uploadImage } from "../../utils/imageUpload";

const Register = () => {
  const [image, setImage] = useState(null);

  let dataEntries = [
    "Username",
    "First name",
    "Last name",
    "E-mail",
    "Password",
    "Confirm password",
  ];

  const handleImageUpload = async (file) => {
    let newImage = await uploadImage(file);
    setImage(newImage);
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <h3>Create an account</h3>
        <div className="register-form">
          <div className="left-form">
            {/* informations about user */}
            {dataEntries.map((entry, index) => {
              return (
                <div className="register-input" key={index}>
                  <h5 className="register-input-title">{entry}</h5>
                  <input className="register-input-box" />
                </div>
              );
            })}
          </div>
          <div className="right-form">
            <input type="file" onChange={(e) => handleImageUpload(e)} />
            {image && (
              <div className="photo-container">
                <img src={image} alt="" />
              </div>
            )}
          </div>
        </div>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
};

export default Register;
