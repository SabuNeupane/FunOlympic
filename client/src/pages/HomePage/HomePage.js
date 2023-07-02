import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/popularVideo");
      console.log(response, "response");
      setData(response.data);
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
            <ul id="sideBar"></ul>
          </div>
        </div>

        <div className="right">
          {/* Embed YouTube videos */}
          <div className="video-wrapper">
            {data?.map((video, index) => (
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

export default HomePage;
