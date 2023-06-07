import "bootstrap/dist/css/bootstrap.css";
import YouTube from "react-youtube";
import React, { useState } from "react";
import axios from "axios";

const MyForm = () => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [amount, setAmount] = useState(0);

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
          <li key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyForm;
