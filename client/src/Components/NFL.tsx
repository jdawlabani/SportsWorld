import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const NFL = () => {
  const options = {
    method: "GET",
    url: "https://nfl-api1.p.rapidapi.com/nflteamplayers",
    params: { teamid: "16" },
    headers: {
      "X-RapidAPI-Key": "59712827fcmshac0151f05797042p1a1ed0jsn91982e933062",
      "X-RapidAPI-Host": "nfl-api1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
export default NFL;
