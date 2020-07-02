import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const CustomTooltip = ({children, placement, target}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip placement={placement} isOpen={tooltipOpen} target={target} toggle={toggle}>
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;