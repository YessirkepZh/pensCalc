import React from 'react';
import InfoBlock from './InfoBlock';
export default ({ id,value, handleChange, title}:any) => 
<div className="uk-text-small uk-flex uk-flex-column uk-margin-small-bottom uk-text-left">
  <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{title} <InfoBlock text="Добровольные пенсионные взносы"/></span>
  

  <input type="text" id={id}  value={value} placeholder="*** *** ***" onChange={handleChange} className="uk-text-right uk-width-1-2 uk-input uk-form-small uk-margin-small-left " autoComplete="off"/>
   
</div>;