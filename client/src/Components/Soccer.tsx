import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Soccer = () => {
  const [apidata, setApidata] = useState([]);

  const config = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/standings",
    params: {
      season: "2020",
      league: "39",
    },
    headers: {
      "X-RapidAPI-Key": "59712827fcmshac0151f05797042p1a1ed0jsn91982e933062",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(apidata);
  return (
    <>
      <Link className="link" to={"/"}>
        Home
      </Link>
      <div className="container">
        <h1>
          This is the Soccer page. We are in season and will be updating soon!
        </h1>
      </div>
    </>
  );
};
export default Soccer;
