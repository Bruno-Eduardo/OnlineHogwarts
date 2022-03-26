import axios from 'axios';

const CharsApi = axios.create({
  baseURL: 'http://hp-api.herokuapp.com/api',
});

const api = axios.create({
    baseURL: "https://www.anapioficeandfire.com/api"
})


const allCharacters = () => {
  let reponse = "";
  CharsApi
    .get(`characters`)
  .then(res => {
    reponse = res.data;
  })
  .catch(err => {
    console.log(err);
  }
  );
return reponse;
};

const allHouses = () => {
  return ['gryffindor', 'hufflepuff', 'ravenclaw', 'slytherin'];
};

const allCharactersFromGivenHouse = (house) => {
  let reponse = "";
  CharsApi
    .get(`characters/house/${house}`)
    .then(res => {
      reponse = res.data;
    })
    .catch(err => {
      console.log(err);
    }
    );
  return reponse;
};


const gotData = () => {
  let reponsef = "";
  api
    .get('/characters?page=3&pageSize=10')
    .then(response => {
      reponsef = response.data;

    })
    .catch(error => {
      console.log('eror', error);
    });

    console.log(reponsef);
  return reponsef;
};

const allCharactersHardCoded = () => {
  return [{"name":"Harry Potter","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"},{"name":"Hermione Granger","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"19-09-1979","yearOfBirth":1979,"wizard":true,"ancestry":"muggleborn","eyeColour":"brown","hairColour":"brown","wand":{"wood":"vine","core":"dragon heartstring","length":""},"patronus":"otter","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Emma Watson","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/hermione.jpeg"},{"name":"Ron Weasley","alternate_names":["Dragomir Despard"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"01-03-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"blue","hairColour":"red","wand":{"wood":"willow","core":"unicorn tail-hair","length":14},"patronus":"Jack Russell terrier","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Rupert Grint","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/ron.jpg"},{"name":"Draco Malfoy","alternate_names":[],"species":"human","gender":"male","house":"Slytherin","dateOfBirth":"05-06-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"grey","hairColour":"blonde","wand":{"wood":"hawthorn","core":"unicorn tail-hair","length":10},"patronus":"","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Tom Felton","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/draco.jpg"}];
}
const allCharactersFromGivenHouseHardCoded = (house) => {
  return [{"name":"Harry Potter","alternate_names":[],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"wizard":true,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"},{"name":"Hermione Granger","alternate_names":[],"species":"human","gender":"female","house":"Gryffindor","dateOfBirth":"19-09-1979","yearOfBirth":1979,"wizard":true,"ancestry":"muggleborn","eyeColour":"brown","hairColour":"brown","wand":{"wood":"vine","core":"dragon heartstring","length":""},"patronus":"otter","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Emma Watson","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/hermione.jpeg"},{"name":"Ron Weasley","alternate_names":["Dragomir Despard"],"species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"01-03-1980","yearOfBirth":1980,"wizard":true,"ancestry":"pure-blood","eyeColour":"blue","hairColour":"red","wand":{"wood":"willow","core":"unicorn tail-hair","length":14},"patronus":"Jack Russell terrier","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Rupert Grint","alternate_actors":[],"alive":true,"image":"http://hp-api.herokuapp.com/images/ron.jpg"}];
}

export { allCharacters, allHouses, allCharactersHardCoded, allCharactersFromGivenHouseHardCoded, allCharactersFromGivenHouse, gotData};