export const vaccinePhasesText = (phasesArray) => {
  return phasesArray.map(phase => {
    if(phase['phase'].indexOf('Phase') != -1){ // Si tiene el texto Phase reemplazar por Fase
      return phase['phase'].replace('Phase', 'Fase');
    }
    if(phase['phase'].indexOf('Pre-clinical') != -1){
      return phase['phase'].replace('Pre-clinical', 'Pre-Clinica');
    }
    if(phase['phase'].indexOf('Early research') != -1){
      return phase['phase'].replace('Early research', 'Investigación temprana');
    }

    return phase['phase']
  })
}

export const vaccinePhaseText = phase => {
  if(phase.indexOf('Phase') != -1){ // Si tiene el texto Phase reemplazar por Fase
    return phase.replace('Phase', 'Fase');
  }
  if(phase.indexOf('Pre-clinical') != -1){
    return phase.replace('Pre-clinical', 'Pre-Clinica');
  }
  if(phase.indexOf('Early research') != -1){
    return phase.replace('Early research', 'Investigación temprana');
  }

  return phase
}


export const sortDepsData = (data, sortBy) => {
  if(sortBy === 'population') {
    return data.sort((a,b) => (a.population < b.population) ? 1 : -1)
  }
  if(sortBy === 'cases') {
    return data.sort((a,b) => (a.total.cases < b.total.cases) ? 1 : -1)
  }
  if(sortBy === 'deaths') {
    return data.sort((a,b) => (a.total.deaths < b.total.deaths) ? 1 : -1)
  }
  if(sortBy === 'recovered') {
    return data.sort((a,b) => (a.total.recovered < b.total.recovered) ? 1 : -1)
  }
  if(sortBy === 'active') {
    return data.sort((a,b) => (a.total.active < b.total.active) ? 1 : -1)
  }
  return data
}

export const sortTasasAsc = (data, sortBy) => {
  if(sortBy === 'val') {
    return data.sort((a,b) => (a.value < b.value) ? 1 : -1)
  }
  return data
}



export const sortCountriesData = (data, sortBy) => {
  if(sortBy === 'population') {
    return data.sort((a,b) => (a.population < b.population) ? 1 : -1)
  }
  if(sortBy === 'cases') {
    return data.sort((a,b) => (a.cases < b.cases) ? 1 : -1)
  }
  if(sortBy === 'deaths') {
    return data.sort((a,b) => (a.deaths < b.deaths) ? 1 : -1)
  }
  if(sortBy === 'recovered') {
    return data.sort((a,b) => (a.recovered < b.recovered) ? 1 : -1)
  }
  if(sortBy === 'active') {
    return data.sort((a,b) => (a.active < b.active) ? 1 : -1)
  }
  return data
}