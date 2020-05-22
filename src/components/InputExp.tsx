import React from 'react';

export default ({ id1,id2,handleChange, title}:any) => 
<div className="uk-text-small uk-margin-small-bottom uk-text-left">
  <span className="uk-text-primary uk-heading-bullet ">{title}</span>


  <div className="uk-flex uk-margin-small-top">
    <input id={id1} type="number" placeholder="_ _" onChange={handleChange} className="uk-input uk-text-right uk-width-1-5 uk-form-small"/>
    <span className="uk-margin-small-left uk-margin-small-right uk-margin-small-top uk-text-left">лет</span>
    
    <input id={id2} type="number" placeholder="_ _" onChange={handleChange} className="uk-text-right uk-width-1-5 uk-input uk-form-small"/>
    <span className="uk-margin-small-left uk-margin-small-top">мес.</span>

  </div>
</div>;