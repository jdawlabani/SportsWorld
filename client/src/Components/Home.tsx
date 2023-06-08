import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";


const Home = () => {
// WILL BE USED ONCE API IS CONNECTED
  const [standings, setStandings] = useState([]);
//   const [liveGames, setLiveGames] = useState([]);

  var config = {
    method: "get",
    url: "https://v2.nba.api-sports.io/standings?league=standard&season=2023",
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
useEffect(()=> {
    axios(config)
    .then((response) => {
      setStandings(response.data.response);
      console.log(response.data.response)

    })
    .catch((error) => {
      console.log(error);  
    });
}, []);


  return (
    <div className="container">
      <div className="standings">
        <h2>Standings...</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
              <th>GB</th>
            </tr>
          </thead>
          <tbody>
            {standings.map(() => {
              return (
                <tr key={team.id}>
                  <td>{win.total}</td>
                  <td>{loss.total}</td>
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
export default Home;
