import React from 'react';

export default ({ id,value,handleChange }:any) => 
<div className="uk-flex uk-flex-column uk-margin-remove-top uk-margin-small-left">
  <div className="uk-text-secondary uk-text-small uk-text-normal ">текущая сумма накоплений:</div>
  <input id={id} type="text" value={value} placeholder="*** *** ***" onChange={handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
</div>;

