import React from 'react';
import InfoBlock from './InfoBlock';

export default ({ obj }:any) => 
<div className="uk-text-small uk-margin-small-bottom">

  <div className="uk-flex uk-flex-bottom">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary  titleRes">возраст и дата выхода на пенсию (ОПВ/ОППВ) <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">12</span> лет <span className="uk-text-bold uk-text-emphasis ">12.12.2025</span></div>
  </div>
  
  <div className="uk-flex uk-flex-bottom uk-margin-small-top" >
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" >
        <span className="uk-text-primary  titleRes">возраст и дата начала получения выплат по ДПВ <InfoBlock text="Добровольные пенсионные взносы"/></span>
      </div>
      <div className="uk-text-small">
        <span className="uk-text-bold uk-text-emphasis ">12</span> лет <span className="uk-text-bold uk-text-emphasis ">12.12.2025</span>
      </div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top" >
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary  titleRes">количество лет до исчерпания накоплений по ОПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis"><span className="uk-text-bold uk-text-emphasis ">12</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary  titleRes">количество лет до исчерпания накоплений по ОППВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">12</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary  titleRes">количество лет до исчерпания накоплений по ДПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">12</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary ">солидарная пенсия, тг/мес. <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
  </div>
  
  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary ">базовая пенсия, тг/мес. <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary ">пенсия из ЕНПФ, тг/мес <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
  </div>

    <span className="uk-margin-small-left">в том числе:</span>

    <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-margin-medium-left">
        <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary titleRes">ОПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
        <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
    </div>

     <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-margin-medium-left">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary titleRes ">ОППВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
    </div>

    <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-margin-medium-left">
        <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary titleRes ">ДПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
        <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
    </div>

  <div className="uk-flex uk-flex-bottom uk-margin-remove-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary  titleRes">Пенсионный аннуитет из страховой компании, тг/мес <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small uk-text-bottom">129 000</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top ">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary titleRes uk-text-bold">ПОБЩАЯ СУММА, ТГ/МЕС. <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary ">Прогнозируемая заработная плата <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top">
      <div className="uk-width-expand uk-heading-bullet" uk-leader="true" ><span className="uk-text-primary uk-text-normal">Коэффициент замещения <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">129 000</div>
  </div>

  <div className="uk-flex uk-flex-around uk-margin-small-top uk-margin-small-bottom">
    <a href="" uk-toggle="target: #modal-graph" className="uk-button uk-button-default uk-button-small uk-margin-small-bottom uk-margin-small-top">график</a>

    <a href="" className="uk-icon-button" uk-totop="true" uk-scroll="true"></a>

    <a href="" uk-toggle="target: #modal-table" className="uk-button uk-button-default uk-button-small uk-margin-small-bottom uk-margin-small-top">таблица</a>
    
  </div>  

  <div id="modal-graph" className="uk-flex-top" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button className="uk-modal-close-default" type="button" uk-close="true"></button>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>
  </div>

  <div id="modal-table" className="uk-flex-top" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button className="uk-modal-close-default" type="button" uk-close="true"></button>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>
  </div>
  

</div>;