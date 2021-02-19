//this file contains the service calls to fetch the data from the API
//this is done using axios

import axios from "axios";
const BASE_URL = "https://api.coingecko.com/api/v3";
const vs_currency = "eur";
const order = "market_cap_desc";
const per_page = "10";

export const getAllCryptoCurrencies = () => {
  //axios call to fetch the list of all cryptocurrencies by sending the appropriate parameters
  return axios
    .get(
      `${BASE_URL}/coins/markets?vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&sparkline=false`
    )
    .then((res) => res.data);
};

export const getOneCryptoCurrency = (id) => {
  //axios get call to fetch the item by sending the id of the cryptocurrency in the params
  //the id is received from clicking on the name of the cryptocurrency in the table
  return axios.get(`${BASE_URL}/coins/${id}`).then((res) => res.data);
};
