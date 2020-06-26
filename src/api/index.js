//https://covid19.mathdro.id/api/countries/BO
//https://covid19.mathdro.id/api/countries/BO/confirmed
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api/countries/BO'
const url2 = 'https://mauforonda.github.io/covid19-bolivia/data.json'

// Bolivia
const url3 = 'https://corona.lmao.ninja/v2/countries/Bolivia'



export const fetchBOGeneralData = async () => {
  try {
    const  { 
        data: {
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        todayRecovered,
        active,
        critical,
        tests
      } 
    } = await axios.get(url3);

    let lethalityPercent = roundNumber((deaths * 100) / cases );
    let recoveredPercent = roundNumber((recovered * 100) / cases);

    //console.log(confirmed.value +"/"+recovered.value)

    return { 
      cases ,
      todayCases,
      deaths, 
      todayDeaths,
      recovered, 
      todayRecovered,
      active, 
      critical,
      tests,
      lethalityPercent,
      recoveredPercent
    }
  } catch (error) {
    console.log(error);
  }
}

export const fetchBOData = async () => {
  try {
    const  { data: { confirmados, decesos, recuperados, sospechosos, descartados } } = await axios.get(url2);

    return { confirmados, decesos, recuperados, sospechosos, descartados }

  } catch (error) {
    console.log(error);
  }
}

/*

const fetchAllData = async () => {
      const fetchedBOData = await fetchBOData();
      //console.log(fetchedBOData.confirmados[0].dep.santa_cruz);
    }
    
*/

const countries = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Falkland Islands (Malvinas)",
  "French Guiana",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela"
];

//const countries = 'bolivia,chile,brazil'

// Sudamerica Data
const url4 = `https://corona.lmao.ninja/v2/countries/${countries.toString()}`

export const fetchSudCountriesData = async () => {
  try {
    const { data }  = await axios.get(url4);
    return data;

  } catch (error) {
    console.log(error)
  }
}

/*const sudamericaURL = 'https://corona.lmao.ninja/v2/continents/South%20America'

export const fetchContinentData = async () => {
  try {
   const  { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(sudamericaURL);

   let actives = confirmed.value - (recovered.value + deaths.value);
   let lethalityPercent = confirmed.value / (deaths.value * 100);
   let recoveredPercent = confirmed.value / (recovered.value * 100);

   return { confirmed, recovered, deaths, actives, lethalityPercent, recoveredPercent, lastUpdate  }
 } catch (error) {
   console.log(error);
   return error;
 }
}*/


function roundNumber(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
