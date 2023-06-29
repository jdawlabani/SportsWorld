import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const MLB = () => {
    
//   useEffect(() => {
//     axios(config)
//       .then((response) => {
//         setApidata(response.data.response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


  return (
    <div className="container">
        <Link className="link" to={"/"}>Home</Link>

        <h1>This is the MLB page. We are in season and will be updating soon!</h1>
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
            

          </tbody>
        </table>
      </div>
      <div className="live">
        <h2>Live games...</h2>
      </div>
    </div>
  );
};
export default MLB;
