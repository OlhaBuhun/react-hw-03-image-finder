import axios from 'axios';
// import { API_KEY } from './key';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '39533790-85df6cbf34193d8f2f0ca09de',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 50,
}

export const fetchImages = async (searchQueru, page) => {
  const response = await axios.get(`?q=${searchQueru}&page=${page}`);

  const data =   response.data;
  return data;
};



// export const axiosRequest = async (searchQueru) => {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const keyApi = '39533790-85df6cbf34193d8f2f0ca09de';
//   // const newSearchQueru = props.searchQueru;

//   const queryParameters = {
//     'key': keyApi,
//     'q' : searchQueru,
//     // 'image_type': 'photo',
//     // 'orientation': 'horizontal',
//     // 'safesearch': 'true',
//     'per_page': 12,
//     'page': 1,
//     // 'order': 'latest',
//   };

//   const response = await axios.get(BASE_URL, {
//     params: queryParameters,
//   });

//   const data =   response.data;
//   return data.hits;
// }

