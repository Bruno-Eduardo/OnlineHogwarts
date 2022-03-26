import axios from 'axios';

const CharsApi = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api',
});

const allCharacters = () => {
  let reponse = '';
  CharsApi.get(`characters`)
    .then(res => {
      reponse = res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return reponse;
};

const allHouses = () => {
  return ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];
};

const allCharactersFromGivenHouse = house => {
  let reponse = '';
  CharsApi.get(`characters/house/${house}`)
    .then(res => {
      reponse = res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return reponse;
};

export {allCharacters, allHouses, allCharactersFromGivenHouse, CharsApi};
