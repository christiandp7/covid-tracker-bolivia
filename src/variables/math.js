import moment from 'moment'

// NUMBER FUNCTIONS
export const roundNumber = (num, decimals=0) => {
  return (Math.round(num * 100) / 100).toFixed(decimals);
}

export const numberWithCommas = (xnum) => {
  if(xnum === 0) return 0;
  if(xnum) return xnum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const valuePerHab = (numHab, value, population) => {
  return (numHab * Number(value)) / population
}



// FORMATING FUNCTIONS
export const formatDate1 = (str) => {
  let strArr = Array.from(str);
  return strArr.split('-').join('/');
}


// ESTADISTICS DATA FUNCTIONS

export const getLethalityRate = (deaths, cases) => { // Percents
  return roundNumber(((deaths * 100) / cases ), 2)
}

export const getRecoveredRate = (recovered, cases) => { // Percents
  return roundNumber(((recovered * 100) / cases), 2)
}




// SUDAMERICA FUNCTIONS

const firstCaseDate = { // DD/MM/YYYY
  "Argentina": "03/03/2020",
  "Bolivia": "11/03/2020",
  "Brazil": "26/02/20",
  "Chile": "03/03/20",
  "Peru": "06/03/20"
}




export const generateDailyRecords = (valueArray) => { // genera los registros Diarios

  let backArray = [];

  for(let i = valueArray.length - 1; i >= 0 ; i--) {

    if(i != 0){
      if(valueArray[i] === valueArray[i - 1]){ // Coloca el mismo valor por que es igual
        backArray[i] = valueArray[i - 1] - valueArray[i - 2];
      } else {                                 // Hace la resta y coloca el valor que es
        backArray[i] = (valueArray[i] - valueArray[i - 1]);
      }
      //console.log(backArray[j])
    } else { // El primer valor del array
      
      backArray[i] = null;
    }

  }

  /*backArray.slice().reverse().forEach(function(value, i){
    //backArray[i] = valueArray[i];
    //console.log(value + " ---- " + i);
    backArray[]
    k++;
  });*/

  //console.log(backArray.length);

  return backArray;
}





const daysDifference = (date1, date2) => {
  var a = moment(date1, 'DD/MM/YYYY');
  var b = moment(date2, 'DD/MM/YYYY');
  return Math.abs(a.diff(b, 'days')); // 1
  //return moment(date1.diff(date2, 'days');
}


// Ver que país tiene mas registros desde el día 1
// obtener la diferencia del numero de registros de todos los países con respecto al país que mas registros tiene
// quitar la cantidad (diferencia) de items del array de cada país

export const generateDaysEje = (keyArray, recordsNum) => {
  let lastDay = keyArray[keyArray.length - 1]
  let final = daysDifference(lastDay, firstCaseDate['Brazil'])
  let inicio = final - recordsNum;
  let list = [];
  for (var i = inicio; i < final; i++) {
      list.push(i);
  }
  return list;
}

export function moveEjeToDays (timeline) {

    const newTimeline = timeline.map((countryItem, i) => {
      let countryName = countryItem.country; // Nombre del pais
      let daysDiff = daysDifference(firstCaseDate.Brazil, firstCaseDate[countryName]); // Obteniendo los días de referencia
      //console.log(daysDiff)
      if(daysDiff > 0) {

        let counter = 0;
        let casesTemp = {};
        for (const [key, value] of Object.entries(countryItem.timeline.cases)) {
          if(counter > daysDiff) { 
            //console.log(`Deleted: ${key}: ${value}`);
            casesTemp[key] = value;
          } 
          counter ++;
        }
        //console.log(casesTemp);
        countryItem.timeline.cases = casesTemp;

        return countryItem; 
      }
      return countryItem; //Brazil
      //const casesArray = countryItem.timeline.cases;

    })

  //return timeline;
  //console.log(newTimeline)
  return newTimeline;


}
