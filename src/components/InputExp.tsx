import React from 'react';


export default ({ val,handleChange, title}:any) => 
<div className="uk-text-small uk-margin-small-bottom">
  <span className="uk-text-primary uk-heading-bullet">{title}</span>


  <div className="uk-flex uk-margin-small-top">
    <input type="text" defaultValue={val} onChange={handleChange} className="uk-input uk-text-right uk-width-1-4 uk-form-small"/>
    <span className="uk-margin-small-left uk-margin-small-right uk-margin-small-top">лет</span>
    
    <input type="text" defaultValue={val} onChange={handleChange} className="uk-text-right uk-width-1-4 uk-input uk-form-small"/>
    <span className="uk-margin-small-left uk-margin-small-top">лет</span>

  </div>
</div>;