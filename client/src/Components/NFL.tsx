import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const NFL = () => {
    const [apidata, setApidata] = useState([]);

  const config = {
    method: "GET",
    url: "https://nfl-api1.p.rapidapi.com/nflteamplayers",
    params: { teamid: "16" },
    headers: {
      "X-RapidAPI-Key": "59712827fcmshac0151f05797042p1a1ed0jsn91982e933062",
      "X-RapidAPI-Host": "nfl-api1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios(config)
      .then((response) => {
        setApidata(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default NFL;
