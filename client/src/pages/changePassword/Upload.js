import React, { useState, useEffect } from "react";
import "./upload.css"; // Assuming you have a separate CSS file for styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const ChangePassword = () => {
  const [password, setPassword] = useState("");

  async function handleUpload(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/updatePassword", {
          email: localStorage.getItem("email"),
          password,
        })
        .then((res) => {
          if (res.data) {
            toast.success("password changed successfully", {
              autoClose: 1000,
            });
            window.location.reload();
          }
        })
        .catch((e) => {
          toast.error("wrong details", {
            autoClose: 1000,
          });
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "30px" }} className="form-container">
        <h2>Change Password</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Enter Password</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleUpload}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
