import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const MLB = () => {
  const [apidata, setApidata] = useState([]);
  const config = {
    method: "GET",
    url: "https://api-baseball.p.rapidapi.com/standings",
    params: {
      league: "1",
      season: "2023",

    },
    headers: {
      "X-RapidAPI-Key": "59712827fcmshac0151f05797042p1a1ed0jsn91982e933062",
      "X-RapidAPI-Host": "api-baseball.p.rapidapi.com",
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

  apidata.forEach((val) => {
    console.log(val)
  })
  return (
    <div>
      <Link className="link" to={"/"}>
        Home
      </Link>
        <h3>
          This is the MLB page. We are in season and will be updating soon!
        </h3>
        {/* <div className="standings">
          <h2>Standings...</h2>
          <table className="border">
            <thead>
              <tr>
                <th>Team</th>
                <th>Wins</th>
                <th>Losses</th>
                <th>Win %</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="live">
          <h2>Live games...</h2>
        </div> */}
      </div>
  );
};
export default MLB;
