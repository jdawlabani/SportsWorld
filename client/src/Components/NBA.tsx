import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const NBA = () => {
  // WILL BE USED ONCE API IS CONNECTED
  const [apidata, setApidata] = useState([]);
  //   const [liveGames, setLiveGames] = useState([]);

  var config = {
    method: "get",
    url: "https://v2.nba.api-sports.io/standings?league=standard&season=2022",
    headers: {
      "x-rapidapi-key": "bdd2c9af47abe6ae0fd1f59672fcc1a7",
      "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
    },
  };

  /*
TO DO:
  -LIVE GAMES (if any)
  -Season standings (for NBA first)
*/
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

  console.log("THIS IS THE RAW API DATA", apidata);
  return (
    <div className="container">
        <Link className="link" to={"/"}>Home</Link>
      <div className="standings">
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
          <tbody>
            {apidata.map((row, index) => {
              return (
                <tr>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="live">
        <h2>Live games...</h2>
      </div>
    </div>
  );
};
export default NBA;
