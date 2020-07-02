import React, { useState } from 'react'
import { Popover, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const SudPopOver = ({ countryTarget, data, mapa }) => {
  
  //console.log('target ' + countryTarget)

  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  
  return (
    <div>
      <Popover 
        trigger="focus"
        placement="right-start" 
        isOpen={popoverOpen} 
        target={mapa}
        toggle={toggle}
        //offset={100}
      >
        <PopoverHeader>{ data.name }</PopoverHeader>
        <PopoverBody>
          {data.cases}, {data.deaths}, {data.recovered}
        </PopoverBody>
      </Popover>
    </div>
  )
}

export default SudPopOver
