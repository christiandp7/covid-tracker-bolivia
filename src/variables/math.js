import moment from 'moment'

// Variables
export let BolPopoulation = '11633371';



// NUMBER FUNCTIONS
export const roundNumber = (xnum, decimals=0) => {
  return (Math.round(xnum * 100) / 100).toFixed(decimals);
}

export const numberWithDots = (xnum) => {
  if(xnum === 0) return 0;
  if(xnum) return xnum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const replaceDecDotByComma = (xnum) => {
  if(xnum === 0) return 0;
  if(xnum.toString().indexOf('.') > -1) { //contiene .
    
    let string = xnum.toString();
    let find = '.';
    let replace = ',';

    let lastIndex = string.lastIndexOf(find);
    
    let beginString = string.substring(0, lastIndex);
    let endString = string.substring(lastIndex + find.length);
    let result = beginString + replace + endString;
    return result;

  } 
  return xnum;  
}

export const valuePerHab = (numHab, value, population) => {
  return (numHab * Number(value)) / population
}

export const valuePercent = (x, y) => {
  return roundNumber(((x * 100) / y), 2)
}



// FORMATING Date FUNCTIONS
export const formatDateSlash = (str) => {
  let strStr = str.toString()
  return strStr.split('-').join('/');
}


// ESTADISTICS DATA FUNCTIONS

export const getLethalityRate = (deaths, cases, asNumber=false) => { // Percents
  if(asNumber){
    return roundNumber(((deaths * 100) / cases ), 2)
  }
  return replaceDecDotByComma(roundNumber(((deaths * 100) / cases ), 2))
}

export const getRecoveredRate = (recovered, cases, asNumber=false) => { // Percents
  if(asNumber){
    return roundNumber(((recovered * 100) / cases), 2)
  }
  return replaceDecDotByComma(roundNumber(((recovered * 100) / cases), 2))
}

// Mortality Rate
export const getMortalityRate = (deaths, population, asNumber=false) => { // per 100mil hab
  if(asNumber){
    return roundNumber(((deaths * 100000) / population ), 2)
  }
  return replaceDecDotByComma(roundNumber(((deaths * 100000) / population ), 2))
}

// Effective Effective Lethality Rate
export const getEffectiveLethalityRate = (cases, deaths, active, asNumber=false) => { // Percents
  if(asNumber){
    return roundNumber(((deaths * 100) / (cases - active)), 2)
  }
  return replaceDecDotByComma(roundNumber(((deaths * 100) / (cases - active)), 2))
}

// Incidence
export const getIncidenceRate = (cases, population, asNumber=false) => { // Percents
  if(asNumber){
    return roundNumber(((cases * 100000) / population), 2)
  }
  return replaceDecDotByComma(numberWithDots(roundNumber(((cases * 100000) / population), 2)))
}

// Tests menos Cases
export const getSuspectsAndDiscartedSum = (tests, cases) => { // Percents
  return Math.abs(tests - cases)
}




// Bolivia Today Sum
export const sumBOStatus = (deps, statusType, status) => { // Percents
  let sum = 0;
  for (let key in deps) {
    sum += deps[key][statusType][status];
  }
  //console.log(deps)
  return sum;
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

    if(i !== 0){
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

export function moveEjeToDays (timeline, status) {

    const newTimeline = timeline.map((countryItem, i) => {
      let countryName = countryItem.country; // Nombre del pais
      let daysDiff = daysDifference(firstCaseDate.Brazil, firstCaseDate[countryName]); // Obteniendo los días de referencia
      //console.log(daysDiff)
      if(daysDiff > 0) {

        let counter = 0;
        let casesTemp = {};
        for (const [key, value] of Object.entries(countryItem.timeline[status])) {
          if(counter > daysDiff) { 
            //console.log(`Deleted: ${key}: ${value}`);
            casesTemp[key] = value;
          } 
          counter ++;
        }
        //console.log(casesTemp);
        countryItem.timeline[status] = casesTemp;

        return countryItem; 
      }
      return countryItem; //Brazil
      //const casesArray = countryItem.timeline.cases;

    })

  //return timeline;
  //console.log(newTimeline)
  return newTimeline;


}
