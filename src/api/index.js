//https://covid19.mathdro.id/api/countries/BO
//https://covid19.mathdro.id/api/countries/BO/confirmed
import axios from 'axios'
import { roundNumber, getLethalityRate, getRecoveredRate, getMortalityRate, getEffectiveLethalityRate } from '../variables/math'







// ------------------------------------
//            Bolivia
// ------------------------------------

// Bolivia
const url1 = 'https://covid19bo.herokuapp.com/departments'
//const url2 = ''
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
        tests,
        population
      } 
    } = await axios.get(url3);

    let lethalityPercent = getLethalityRate(deaths, cases);
    let recoveredPercent = getRecoveredRate(recovered, cases);
    
    let mortalityRate = getMortalityRate(deaths, population);
    let effectiveLethalityRate = getEffectiveLethalityRate(cases, deaths, active);



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
      recoveredPercent,
      mortalityRate,
      effectiveLethalityRate
    }
  } catch (error) {
    console.log(error);
  }
}



export const fetchDepartmentsLastUpdate = async () => {
  try {
    const { data }  = await axios.get(url1);
    //console.log(data)
    return data;

  } catch (error) {
    console.log(error)
  }
}

export const fetchDepartmentsStatus = async (status='cases', lastDays=30) => {
  try {
    const { data }  = await axios.get(`${url1}/status/${status}?lastdays=${lastDays}`);
    //console.log(data)
    return data;

  } catch (error) {
    console.log(error)
  }
}


export const fetchDepartmentsDailyStatus = async (status='cases', lastDays=30) => {
  try {
    const { data }  = await axios.get(`${url1}/status/daily/${status}?lastdays=${lastDays}`);
    //console.log(data)
    return data;

  } catch (error) {
    console.log(error)
  }
}


// ------------------------------------
//            Sudamerica
// ------------------------------------

const selCountries = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  //"Falkland Islands (Malvinas)",
  "French Guiana",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela"
];

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

    let lethalityPercent = getLethalityRate(deaths, cases);
    let recoveredPercent = getRecoveredRate(recovered, cases);

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
