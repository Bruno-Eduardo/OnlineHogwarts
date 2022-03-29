const getHouse = (name) => {
  let index = name[0].toUpperCase().charCodeAt(0)%4;
  let houses = ['ravenclaw', 'hufflepuff', 'gryffindor', 'slytherin'];
  return houses[index];
};

export {getHouse};
