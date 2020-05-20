import React from 'react';

export default ({ val,handleChange }:any) => 
<label className="uk-text-small uk-flex uk-flex-between uk-margin-remove">
  текущая сумма накоплений:
  <input type="number" defaultValue={val} onChange={handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
</label>;

