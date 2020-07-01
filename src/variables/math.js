import moment from 'moment'



export const roundNumber = (num, decimals=0) => {
  return (Math.round(num * 100) / 100).toFixed(decimals);
}


export const to100milPersons = (population, data) => {

}


const generateDaysEje = (desde, hasta) => {
  var list = [];
  for (var i = desde; i <= hasta; i++) {
      list.push(i);
  }
  return list;
}


const firstCaseDate = { // DD/MM/YYYY
  "Argentina": "03/03/2020",
  "Bolivia": "11/03/2020",
  "Brazil": "26/02/20",
  "Chile": "03/03/20",
  "Peru": "06/03/20"
}



// Ver que país tiene mas registros desde el día 1
// obtener la diferencia del numero de registros de todos los países con respecto al país que mas registros tiene
// quitar la cantidad (diferencia) de items del array de cada país





const getMaxDatesCountry = (country) => {
  //country.map(())

}


const daysDifference = (date1, date2) => {
  var a = moment(date1, 'DD/MM/YYYY');
  var b = moment(date2, 'DD/MM/YYYY');
  return Math.abs(a.diff(b, 'days')); // 1
  //return moment(date1.diff(date2, 'days');
}


export const remove2last = (array) => {

}

export const daysToZero = () => {

}


export function moveEjeToDays (timeline) {
  


  const countryFC = { // DD/MM/YYYY
    "Argentina": "03/03/2020",
    "Bolivia": "11/03/2020",
    "Brazil": "26/02/20",
    "Chile": "03/03/20",
    "Peru": "06/03/20"
  }

  /*for (var i in projects) {
    if (projects[i].value == value) {
       projects[i].desc = desc;
       break; //Stop this loop, we found it!
    }
  }*/

  let argentina = daysDifference(countryFC.Brazil, countryFC.Argentina);
  let bolivia = daysDifference(countryFC.Brazil, countryFC.Bolivia);
  let brazil = daysDifference(countryFC.Brazil, countryFC.Brazil);
  let chile = daysDifference(countryFC.Brazil, countryFC.Chile);
  let peru = daysDifference(countryFC.Brazil, countryFC.Peru);

  let argentinaTimeline = timeline[0];
  let boliviaTimeline = timeline[1];
  let brazilTimeline = timeline[2];
  let chileTimeline = timeline[3];
  let peruTimeline = timeline[4];


    /*for (let i = 0; i < timeline.length; i++) { // Recorriendo todos los países (timelines)
      const casesArray = timeline[i].timeline.cases; //obteniendo solo las fechas de los confirmados
      for (let j = 0; j < casesArray.length; j++) { //
        const caseDate = casesArray[j];
        console.log(caseDate);
      }
    }*/
  
    const newTimeline = timeline.map((countryItem, i) => {
      let countryName = countryItem.country; // Nombre del pais
      let daysDiff = daysDifference(countryFC.Brazil, countryFC[countryName]); // Obteniendo los días de referencia
      console.log(daysDiff)
      if(daysDiff > 0) {

        let counter = 0;
        let casesTemp = {};
        for (const [key, value] of Object.entries(countryItem.timeline.cases)) {
          if(counter > daysDiff) { // Error CAMBIAR LA CONDICION (INVERTIR) ERROR en el ELSE
            //console.log(`Deleted: ${key}: ${value}`);
            casesTemp[key] = value;
          } 
          counter ++;
        }
        //console.log(casesTemp);
        countryItem.timeline.cases = casesTemp;
        //console.log

        for (let k = 0; k < daysDiff; k++) {
          //const element = array[k];
          
          //delete countryItem.timeline.cases[Object.keys(countryItem.timeline.cases)[k]]

          //delete countryItem.timeline.cases[(Object.keys(countryItem.timeline.cases)[k]).toString]

          //delete countryItem.timeline.cases[Object.keys(countryItem.timeline.cases)[k]];

          //Object.keys(countryItem.timeline.cases)[k].delete(k)

          //console.log(Object.keys(countryItem.timeline.cases)[k])
          //console.log(countryItem.timeline.cases[Object.keys(countryItem.timeline.cases)])
          //console.log(countryItem.timeline.cases);
          //console.log(" --------" + k + "-------- ")
          
           //delete countryItem.timeline.cases[k];
          //dateToRemove.slice(1); //Quitar el primer elemento
          //const casesArray = countryItem.timeline.cases;
        }
        return countryItem; 
      }
      return countryItem; //Brazil
      //const casesArray = countryItem.timeline.cases;

    })

//console.log(argentina, bolivia, brazil, chile, peru)
//console.log(timeline)
  //return newTimeline;
  //console.log(newTimeline);
  //return timeline;
  console.log(newTimeline)
  return newTimeline;


}







/*export const formatDate = (date) => {
  console.log(date.split("/"))
  return date;
}*/