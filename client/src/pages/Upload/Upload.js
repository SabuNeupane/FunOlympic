import React, { useState, useEffect } from "react";
import "./upload.css"; // Assuming you have a separate CSS file for styling
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const Upload = () => {
  const [link, setLink] = useState("");
  const [type, setType] = useState("");

  async function handleUpload(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/upload", {
          link,
          type,
        })
        .then((res) => {
          if (res.data) {
            toast.success("Content uploaded successfully", {
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
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/allVideo");
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  const handleDelete = async (id) => {
    // Handle delete action here

    try {
      await axios
        .post("http://localhost:8000/deleteVideo", {
          id,
        })
        .then((res) => {
          if (res.data) {
            toast.success("Deleted Successfully", {
              autoClose: 1000,
            });
            window.location.reload();
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "30px" }} className="form-container">
        <h2>Upload Video</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Video Link:</label>
            <input
              type="text"
              id="name"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="live">live</option>
              <option value="popular">popular</option>
              <option value="categories">categories</option>
              <option value="latest">latest</option>
              <option value="channel">channel</option>
              <option value="videos">videos</option>
            </select>
          </div>
          <button onClick={handleUpload}>Submit</button>
        </form>
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        Videos List: {data.length}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          marginBottom: "30px",
        }}
      >
        <table
          style={{ borderCollapse: "collapse", border: "1px solid black" }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Name
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Type
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item._id}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.link}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {item.type}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <button onClick={() => handleDelete(item._id)}>
                    <i className="fa fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Upload;
