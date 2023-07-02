import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ChannelsPage() {
  const news = [
    {
      title: "Exciting Match Ends in Draw",
      description:
        "Yesterday's match between Team A and Team B ended in a thrilling draw. Both teams showed great skill and determination throughout the game.",
      image: "download1.jpg",
    },
    {
      title: "Player Breaks Record with Hat-trick",
      description:
        "Player X made history yesterday by scoring a hat-trick in the match against Team C. The crowd cheered as Player X led the team to a resounding victory.",
      image: "download2.jpg",
    },
    {
      title: "Upcoming Tournament: Register Now!",
      description:
        "Don't miss the chance to participate in the upcoming sports tournament. Register now to showcase your skills and compete against some of the best athletes in the region.",
      image: "download4.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <h1>Sports News</h1>
      {news.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "300px", height: "200px" }}
          />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ChannelsPage;
