import React, { useState } from "react";
import axios from "axios";

export default function VideoSearch() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 10,
          q: searchQuery,
          type: "video",
          key: "AIzaSyAcMvEOYRIp3hrE46ZoeH2vwEOAsgc8CLo",
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
      <h1>Video Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
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
}

