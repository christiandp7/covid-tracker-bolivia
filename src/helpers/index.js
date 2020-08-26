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