
export const roundNumber = (num, decimals=0) => {
  return (Math.round(num * 100) / 100).toFixed(decimals);
}


export const to100milPersons = (population, data) => {

}


export const formatDate = (date) => {
  console.log(date.split("/"))
  return date;
}