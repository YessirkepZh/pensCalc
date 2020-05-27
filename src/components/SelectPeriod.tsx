import React from 'react';

export default ({ change,id,classN}:any) => 
<select  value='12' className={classN} onChange={change} id={id} >
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
</select>;

