//https://covid19.mathdro.id/api/countries/BO
//https://covid19.mathdro.id/api/countries/BO/confirmed
import axios from 'axios'
import { roundNumber } from '../variables/math'

//const url = 'https://covid19.mathdro.id/api/countries/BO'
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

    let lethalityPercent = roundNumber(((deaths * 100) / cases ), 2);
    let recoveredPercent = roundNumber(((recovered * 100) / cases), 2);

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

const selCountries = [
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

const url4 = 'https://corona.lmao.ninja/v2/continents/South%20America'
export const fetchSudGeneralData = async () => {
  try {
    const  { 
      data: {
      cases,
      deaths,
      recovered,
      active,
      critical,
      tests
    } 
  }  = await axios.get(url4);

  let lethalityPercent = roundNumber(((deaths * 100) / cases ), 2);
  let recoveredPercent = roundNumber(((recovered * 100) / cases), 2);

    return { 
      cases ,
      deaths, 
      recovered, 
      active, 
      critical,
      tests,
      lethalityPercent,
      recoveredPercent
    }

  } catch (error) {
    console.log(error)
  }
}

const url5 = `https://corona.lmao.ninja/v2/countries/${selCountries.toString()}`
export const fetchSudCountriesData = async () => {
  try {
    const { data }  = await axios.get(url5);
    return data;

  } catch (error) {
    console.log(error)
  }
}

export const fetchCountriesHistoryData = async (countries, lastDays=30) => {

  if(!countries) {
    countries = [
      "Argentina",
      "Bolivia",
      "Brazil",
      "Chile",
      "Peru",
    ];
  }

  const historyUrl = `https://corona.lmao.ninja/v2/historical/${countries.toString()}?lastdays=${lastDays}`;
  try {
    const { data }  = await axios.get(historyUrl);
    //console.log(data)
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

/*
function roundNumber(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}
*/