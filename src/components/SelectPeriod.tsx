import React from 'react';
import ru from '../locale/ru.json'
import kz from '../locale/kz.json'
import InfoBlock from './InfoBlock';

export default ({ change,id,lang,val}:any) => 

  <label className="uk-text-secondary uk-text-small uk-text-normal  uk-flex uk-flex-column uk-margin-remove">

    {lang==='ru' ? ru.input.period_pay : kz.input.period_pay} 
    <select   className="uk-select uk-form-small uk-text-right uk-width-1-5 "  onChange={change} id={id} value={val}>
      <option value="1" key="1">1</option>
      <option value="2" key="2">2</option>
      <option value="3" key="3">3</option>
      <option value="4" key="4">4</option>
      <option value="5" key="5">5</option>
      <option value="6" key="6">6</option>
      <option value="7" key="7">7</option>
      <option value="8" key="8">8</option>
      <option value="9" key="9">9</option>
      <option value="10" key="10">10</option>
      <option value="11" key="11">11</option>
      <option  defaultValue  ="12" key="12">12</option>
    </select>
  </label>


