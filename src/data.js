// data= POKEMON.pokemon
// condition= Seleción de usuario "Grass", "Poison",etc...
// filterBy= Criterio de filtro (debilidad o tipo)
// counterBy= Criterio de contador (debilidad o tipo)
// sortBy= Criterio de orden (nombre o número)
// sortOrder= Orden ascendente 1-151 ó a-z (usa sort normal) 
//               o descendente 151-1 ó z-a(usa sort con reverse)

//FILTRO DE POKEMON POR TIPO O DEBILIDAD
const filterPoke = (data, condition, filterBy) => {
  let filterResult = data.filter(element => {
    return element[filterBy].includes(condition);
  })
  return filterResult;
};
window.filterPoke = filterPoke;

//CONTADOR DE POKEMON POR TIPO O DEBILIDAD
const counter = (data, condition, counterBy) => {
  let result = data.reduce((counterResult, data) => {
    if (data[counterBy].includes(condition)) {
      return counterResult + 1;
    } else {
      return counterResult;
    }
  }, 0)
  return result;
};
window.counter = counter;

//ORDENAR LA DATA
const orderData = (data, sortBy, sortOrder) => {
  const orderResult = data.sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
  })
  if (sortOrder === "asc") {
    return orderResult;
  }
  if (sortOrder === "des") {
    return orderResult.reverse();
  }
}
window.orderData = orderData;


  