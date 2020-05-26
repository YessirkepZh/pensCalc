import React from 'react';

export default ({ change,id,classN}:any) => 
<select  className={classN} onChange={change} id={id} >
  <option defaultValue="1" key="1">1</option>
  <option defaultValue="2" key="2">2</option>
  <option defaultValue="3" key="3">3</option>
  <option defaultValue="4" key="4">4</option>
  <option defaultValue="5" key="5">5</option>
  <option defaultValue="6" key="6">6</option>
  <option defaultValue="7" key="7">7</option>
  <option defaultValue="8" key="8">8</option>
  <option defaultValue="9" key="9">9</option>
  <option defaultValue="10" key="10">10</option>
  <option defaultValue="11" key="11">11</option>
  <option selected defaultValue  ="12" key="12">12</option>
</select>;

