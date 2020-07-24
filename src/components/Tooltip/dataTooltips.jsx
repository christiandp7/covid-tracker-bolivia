import React from 'react'
import CustomTooltip from './CustomTooltip'

export function TooltipTL() { // Tasa de Letalidad
  return (
    <CustomTooltip placement="top" tooltipClassName="tooltip-data" target="tooltipTL">
      <div>La Letalidad es la relación entre los fallecidos y los contagiados. Establece el valor porcentual de fallecidos para el total de enfermos detectados (confirmados, positivos).</div>
      <div>Ecuación:</div>
      <div className="ecu">T.L. = (decesos x 100) / confirmados</div>
    </CustomTooltip>
  )
}

export function TooltipTM() { // Tasa de Mortalidad
  return (
    <CustomTooltip placement="top" tooltipClassName="tooltip-data" target="tooltipTM">
      <div>La Mortalidad es la cantidad de personas que fallecen por cada 100 mil habitantes de una región o país.</div>
      <div>Ecuación:</div>
      <div className="ecu">T.M. = (decesos x 100000) / población</div>
    </CustomTooltip>
  )
}

export function TooltipTR() { // Tasa de Recuperación
  return (
    <CustomTooltip placement="top" tooltipClassName="tooltip-data" target="tooltipTR">
      <div>La Tasa de Recuperación es la relación entre los Recuperados y los Confirmados. Establece el valor porcentual de Recuperados para el universo de enfermos (Confirmados).</div>
      <div>Ecuación:</div>
      <div className="ecu">T.R. = (recuperados x 100) / confirmados</div>
    </CustomTooltip>
  )
}

export function TooltipTLE() { // Tasa de Letalidad Efectiva
  return (
    <CustomTooltip placement="top" tooltipClassName="tooltip-data" target="tooltipTLE">
      <div>La T.L.E. Es la relación entre los fallecidos y los Recuperados. Establece el valor porcentual de fallecidos para el conjunto de enfermos que culminaron el ciclo de la enfermedad.</div>
      <div>Ecuación:</div>
      <div className="ecu">T.L.E. = (decesos x 100) / <br/>
      (confirmados - activos)</div>
    </CustomTooltip>
  )
}

export function TooltipTI() { // Tasa de Incidencia
  return (
    <CustomTooltip placement="top" tooltipClassName="tooltip-data" target="tooltipTI">
      <div>La Tasa de Incidencia de Riesgo es la relación entre los Confirmados y la Población de una Región o País. Establece la cantidad de personas Confirmadas (Positivas) para la enfermedad, por cada 100.000 Hab.</div>
      <div>Ecuación:</div>
      <div className="ecu">T.I. = (confirmados x 100000) / población</div>
    </CustomTooltip>
  )
}