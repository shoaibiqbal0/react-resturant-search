import queryString from "query-string";

const apiKey = process.env.REACT_APP_API;
const baseUrl =
  "https://gentle-fortress-11686.herokuapp.com/https://api.yelp.com/v3";

const searchResturants = (path, queryParams) => {
  const query = queryString.stringify(queryParams);
  return fetch(`${baseUrl}${path}?${query}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Origin: "localhost",
      withCredentians: true,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export default searchResturants;
