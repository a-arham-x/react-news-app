import React, { Component } from 'react'
import NewsItem from './NewsItem'


var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abdularham123",
    database: "cinema",
    insecureAuth: true
});

console.log("Database Connected");

// var values = [1234, "Jurassic Park", "Adventure/Horror/Action", 120, 9.2, "../image/Jurassic_Park_(franchise_logo).png", "12-12-2022", "11-04-2023"];

// async function convertImageToBlob(url) {
//     const image = await fetch(url);
//     const blobImage = await image.blob();
//     values[6] = blobImage;
// }

// convertImageToBlob("../image/Jurassic_Park_(franchise_logo).png");


// con.query("insert into dummy_flms (film_id, title, genre, desc_, run_time, rating, cover_img, start_date, end_date) values (?)", values, (err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result);
// })
