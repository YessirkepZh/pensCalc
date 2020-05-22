import React from 'react';

export default ({ classN,handleChange}:any) => 
<select  className={classN} onChange={handleChange} >
  <option defaultValue="1">1</option>
  <option defaultValue="2">2</option>
  <option defaultValue="3">3</option>
  <option defaultValue="4">4</option>
  <option defaultValue="5">5</option>
  <option defaultValue="6">6</option>
  <option defaultValue="7">7</option>
  <option defaultValue="8">8</option>
  <option defaultValue="9">9</option>
  <option defaultValue="10">10</option>
  <option defaultValue="11">11</option>
  <option selected defaultValue  ="12">12</option>
</select>;

