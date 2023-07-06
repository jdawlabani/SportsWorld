import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

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
        setApidata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  console.log(apidata);
  return (
    <>
      <Link className="link" to={"/"}>
        Back to Home
      </Link>
      <h3>This is the NFL page. Congrats to the Kansas City Cheifs
        for winning Super Bowl 2023! Updates will be coming near the start
        of netx season.
      </h3>
    </>
  );
};
export default NFL;
