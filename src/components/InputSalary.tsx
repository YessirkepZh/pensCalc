import React from 'react';
import InfoBlock from './InfoBlock';
export default ({ id,value, handleChange, title, tooltipText}:any) => 
  <label className="uk-margin-small-left uk-text-secondary uk-text-small uk-text-normal  uk-flex uk-flex-column uk-margin-remove-top uk-margin-remove-bottom">
    {title}
    <input type="text" id={id}  value={value} placeholder="*** *** ***" onChange={handleChange} className="uk-text-right uk-width-1-2 uk-input uk-form-small margin-bottom" autoComplete="off"/>
  </label>
