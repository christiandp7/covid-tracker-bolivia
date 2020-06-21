//https://covid19.mathdro.id/api/countries/BO
//https://covid19.mathdro.id/api/countries/BO/confirmed
import axios from 'axios'

const url = 'https://covid19.mathdro.id/api/countries/BO'

const url2 = 'https://mauforonda.github.io/covid19-bolivia/data.json'

export const fetchBOGeneralData = async () => {
   try {
    const  { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

    let actives = confirmed.value - (recovered.value + deaths.value);
    let lethalityPercent = confirmed.value / (deaths.value * 100);
    let recoveredPercent = confirmed.value / (recovered.value * 100);

    return { confirmed, recovered, deaths, actives, lethalityPercent, recoveredPercent, lastUpdate  }
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