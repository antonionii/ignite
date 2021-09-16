require("dotenv").config();

//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the  date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current Year-Month-Day
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// const getDate = () => {
//     const date = new Date().toISOString().slice(0,10);
//     return date;
// }

// short code for date in the format YYYY-MM-DD.

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;

const popularGamesURL = () => `${base_url}${popular_games}`;

console.log(popularGamesURL());
