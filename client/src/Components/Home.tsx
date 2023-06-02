import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
    const [standings, setStandings] = useState([]);
    const [liveGames, setLiveGames] = useState([]);

}

var config = {
  method: 'get',
  url: 'https://api-nba-v1.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-key': 'bdd2c9af47abe6ae0fd1f59672fcc1a7',
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});



export default Home;