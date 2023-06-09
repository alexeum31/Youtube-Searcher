import "bootstrap/dist/css/bootstrap.css";
import YouTube from "react-youtube";
import React, { useState } from "react";
import axios from "axios";
import './VideoList.css';

const MyForm = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [amount, setAmount] = useState(15);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRangeChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: amount,
          q: searchQuery,
          type: "video",
          key: "AIzaSyCBx94MMAzs5dT_U_vI8XTIAVjTvrUtJj4",
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form id="myForm">
        <h3>Enter Any Video Topic </h3>
        <textarea
          className="form-control"
          type="text"
          placeholder="Text here"
          onChange={handleInputChange}
        ></textarea>
        <br />

        <label htmlFor="myRange">Select Amount of Videos: </label>
        <input
          type="range"
          id="myRange"
          min="0"
          max="15"
          step="1"
          onChange={handleRangeChange}
        />
        <h3>{amount}</h3>
        <br />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSearch}
        >
          Submit
        </button>
      </form>
      <ul>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h2 className="VideoTitle">{video.snippet.title}</h2>
            <p className="VideoDesc">{video.snippet.description}</p>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MyForm;
