import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";
import { useState, useEffect } from "react";
import axios from "axios";

function CategoriesPage() {
  let navigate = useNavigate();

  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchData1();
  }, []);

  const fetchData1 = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categoriesVideo");
      console.log(response, "response");
      setData1(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="t-wrapper" id="SeasonalPicks">
        <div className="left">
          <div>
            <ul id="sideBar">
              <li>
                <a href="/live" className="active">
                  <i
                    className="fas fa-play fa-xs"
                    style={{ color: "white", marginRight: "5px" }}
                  ></i>
                  Live
                </a>
              </li>
              <li>
                <i
                  className="fas fa-tv fa-xs"
                  style={{ color: "white", marginRight: "5px" }}
                ></i>
                <a href="channel">Channel</a>
              </li>
              <li>
                <i
                  className="fas fa-clock fa-xs"
                  style={{ color: "white", marginRight: "5px" }}
                ></i>
                <a href="/latest">Latest</a>
              </li>
              <li>
                <i
                  className="fas fa-cog fa-xs"
                  style={{ color: "white", marginRight: "5px" }}
                ></i>
                <a href="index.html">Setting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="right">
          {/* Embed YouTube videos */}
          <div className="video-wrapper">
            {data1?.map((video, index) => (
              <div key={index} className="video-container">
                <iframe
                  width="582"
                  height="315"
                  src={video.link}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="video-title">{video.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesPage;
