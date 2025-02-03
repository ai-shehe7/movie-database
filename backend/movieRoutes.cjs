
const apiToken = require("../index.cjs");


const express = require("express");
const router  = express.Router();
const needle = require("needle");
const url = require("url");


// console.log(apiToken);

router.get("/", async (req, res) => {
    const options = {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      };

    // console.log(req.query);

    const queries = req.query;

    // const movieListTypes = [ "trending", "popular", "top_rated", "upcoming", "now_playing"];  

    let url;

    // naivagating the data
    if (queries.page === "main") {
      if (queries.type === "trending") {
        url = `https://api.themoviedb.org/3/${queries.type}/movie/day?language=en-US`;
      } else {
        url = `https://api.themoviedb.org/3/movie/${queries.type}?language=en-US&page=1`;
      }
    } else {
      url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${queries.pageNum}&sort_by=popularity.desc`;
    }

    


    try {

        const params = new URLSearchParams({

        });


        const apiRes = await needle("get", url, options);

        const data = apiRes.body;
        // console.log("movie-data");
        // console.log(data);

        // console.log("res-json()");
        res.status(200).json(data);

    } catch(error) {
        console.log(error);
    }

});

module.exports = router;

