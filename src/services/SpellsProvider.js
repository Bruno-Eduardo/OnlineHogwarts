import axios from 'axios';

const SpellsApi = axios.create({
  baseURL:
    'https://raw.githubusercontent.com/bukinoshita/harry-potter-spells/master/spells.json',
});

const allSpells = () => {
  let reponse = '';
  SpellsApi.get()
    .then(res => {
      reponse = res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return reponse;
};

export {SpellsApi, allSpells};
