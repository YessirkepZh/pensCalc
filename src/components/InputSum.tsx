import React from 'react';

export default ({ id,handleChange }:any) => 
<label className="uk-text-small uk-flex uk-flex-between uk-margin-remove">
  текущая сумма накоплений:
  <input id={id} type="number" placeholder="*** *** ***" onChange={handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
</label>;

