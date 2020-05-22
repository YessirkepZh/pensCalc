import React from 'react';
import InfoBlock from './InfoBlock';
export default ({ id,handleChange, title}:any) => 
<div className="uk-text-small uk-flex uk-flex-column uk-margin-small-bottom uk-text-left">
  <span className="uk-text-primary uk-heading-bullet">{title} <InfoBlock text="Добровольные пенсионные взносы"/></span>
  

  <input type="number" id={id} placeholder="*** *** ***" onChange={handleChange} className="uk-text-right uk-width-1-2 uk-margin-small-top uk-input uk-form-small "/>
   
</div>;