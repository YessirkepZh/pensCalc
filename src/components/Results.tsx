import React from 'react';
import InfoBlock from './InfoBlock';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
function renderTableData(data:any) {
    return data.map((dat:any) => {
       const { Year, Age, BasicPension, SolidarityPension,OPV,OPPV,DPV,Total,KoefZam,PensAnnuity } = dat //destructuring
       return (
          <tr>
             <td key='0'>{Year}</td>
             <td key='1'>{Age}</td>
             <td key='2'>{BasicPension}</td>
             <td key='3'>{SolidarityPension}</td>
             <td key='4'>{OPV}</td>
             <td key='5'>{OPPV}</td>
             <td key='6'>{DPV}</td>
             <td key='7'>{Total}</td>
             <td key='8'>{KoefZam}</td>
             <td key='9'>{PensAnnuity}</td>
          </tr>
       )
    })
 }
 function renderTableHeader() {
    let header = ['Год','Возраст','Базовая пенсия','Солидарная пенсия','ОПВ','ОППВ','ДПВ','Пенсионный аннуитет','Всего','Коэффициент замещения'];
    return header.map((key) => {
       return <th className="uk-table-shrink">{key.toUpperCase()}</th>
    })
 }
 function getKey(array:any, keys:String){
   let value:any=[];
    array.forEach((element:any) =>  {
  
      Object.keys(element).forEach((key)=> {
        if(key===keys){
          value.push(element[key]);
          }   
        });
      }
    )
    return value;
 }

 function renderChart(data:any){

  const options: Highcharts.Options = {
    title: {
        text: 'График выплат пенсии'
    },
    xAxis: {
      categories: getKey(data,'Age')
    },
    yAxis: {
      title: {
        text: ''
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: 'т'
    },
    
    series: [{
        type: 'line',
        name:'Базовая пенсия',
        data: getKey(data,'BasicPension')
    },
    {
      type: 'line',
      name:'Солидарная пенсия',
      data: getKey(data,'SolidarityPension')
    },
    {
      type: 'line',
      name:'ОПВ',
      data: getKey(data,'OPV')
    },
    {
      type: 'line',
      name:'ОППВ',
      data: getKey(data,'OPPV')
    },
    {
      type: 'line',
      name:'ДПВ',
      data: getKey(data,'DPV')
    },
    {
      type: 'line',
      name:'Пенсионный аннуитет',
      data: getKey(data,'PensAnnuity')
    },
    {
      type: 'line',
      name:'Всего',
      data: getKey(data,'Total')
    }
  ],
  credits: {
    enabled: false
},
}
   

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
 }

  
export default ({ data ,onClick,disabled}:any) => 

<div className="uk-text-small">

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
    <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal  uk-text-small">возраст и дата выхода на пенсию (ОПВ/ОППВ) <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
    <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">{data.Retirement.Age ==='' ? '**':data.Retirement.Age}</span> лет <span className="uk-text-bold uk-text-emphasis ">{data.Retirement.Dt ==='' ? '**':data.Retirement.Dt}</span></div>
  </div>
  <hr className="uk-margin-remove"/>

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right" >
      <div className="uk-width-expand" uk-leader="true" >
        <span className="uk-text-secondary uk-text-normal uk-text-small">возраст и дата начала получения выплат по ДПВ <InfoBlock text="Добровольные пенсионные взносыДобровольные пенсионные взносыДобровольные пенсионные взносы"/></span>
      </div>
      <div className="uk-text-small uk-text-right">
        <span className="uk-text-bold uk-text-emphasis "> {data.Retirement.Age ==='' ? '**':data.Retirement.Age}</span> лет <span className="uk-text-bold uk-text-emphasis ">{data.Retirement.Dt ==='' ? '**':data.Retirement.Dt}</span>
      </div>
  </div>
  <hr className="uk-margin-remove"/>

  <div className="uk-text-left uk-text-secondary uk-margin-small-left uk-margin-small-right uk-text-small">количество лет до исчерпания накоплений по:</div>
  
  <div className="uk-flex uk-flex-bottom  uk-text-left uk-margin-medium-left uk-margin-medium-left uk-margin-small-right" >
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">ОПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis"><span className="uk-text-bold uk-text-emphasis ">{data.NumOfYearsBeforeExhAccumOPV === '' ? '**' :data.NumOfYearsBeforeExhAccumOPV}</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">ОППВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">{data.NumOfYearsBeforeExhAccumOPPV === '' ? '**' :data.NumOfYearsBeforeExhAccumOPPV}</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal  uk-text-small">ДПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">{data.NumOfYearsBeforeExhAccumDPV === '' ? '**' :data.NumOfYearsBeforeExhAccumDPV}</span> лет</div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">солидарная пенсия, тг/мес. <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.SolidarityPension === '' ? '***' : parseFloat(data.SolidarityPension).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>
  
  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">базовая пенсия, тг/мес. <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.BasicPension === '' ? '***' : parseFloat(data.BasicPension).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">пенсия из ЕНПФ, тг/мес <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.SolidarityPension === '' ? '***' : (parseFloat(data.EnpfPensionOPV)+parseFloat(data.EnpfPensionOPPV)+parseFloat(data.EnpfPensionDPV)).toLocaleString()} <span className="tenge" >&#8376;</span></div>
  </div>


    <div className="uk-text-left uk-margin-small-left uk-margin-small-right uk-text-small">в том числе:</div>

    <div className="uk-flex uk-flex-bottom  uk-text-left uk-margin-medium-left uk-margin-small-right">
        <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">ОПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
        <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.EnpfPensionOPV === '' ? '***' : parseFloat(data.EnpfPensionOPV).toLocaleString()} <span className="tenge">&#8376;</span></div>
    </div>

    <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">ОППВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.EnpfPensionOPPV === '' ? '***' : parseFloat(data.EnpfPensionOPPV).toLocaleString()} <span className="tenge">&#8376;</span></div>
    </div>

    <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
        <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">ДПВ <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
        <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.EnpfPensionDPV === '' ? '***' : parseFloat(data.EnpfPensionDPV).toLocaleString()} <span className="tenge">&#8376;</span></div>
    </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-remove-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">Пенсионный аннуитет из страховой компании, тг/мес <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small uk-text-bottom">{data.PensionAnnuity === '' ? '***' : parseFloat(data.PensionAnnuity).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-small uk-text-bold">ПОБЩАЯ СУММА, ТГ/МЕС. <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.TotalSum === '' ? '***' : parseFloat(data.TotalSum).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">Прогнозируемая заработная плата <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.SalaryBeforePension === '' ? '***' : parseFloat(data.SalaryBeforePension).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-bold uk-text-small">Коэффициент замещения <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small"> {data.Koef === '' ? '***' : parseFloat(data.Koef).toLocaleString()}%</div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-around uk-margin-small-top">
      
    <button type="button" uk-toggle="target: #modal-graph" className="uk-button uk-button-primary uk-button-small uk-margin-small-bottom uk-margin-small-top" disabled={disabled}>график</button>

    <button type="button" uk-toggle="target: #modal-table" className="uk-button uk-button-primary uk-button-small uk-margin-small-bottom uk-margin-small-top disabled" disabled={disabled}>таблица</button>

  </div>  
  <div className="uk-flex uk-flex-center">
    <button type="button" onClick={onClick} className="uk-button uk-button-primary uk-button-small uk-margin-small-bottom uk-margin-small-top" disabled={disabled}>отправить на e-mail</button>

  </div>

  <div id="modal-graph" className="uk-flex-top " uk-modal="true">
    <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body  uk-padding-remove">

        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
        {renderChart(data.EnpfCalcTable)}
    </div>
  </div>

  <div id="modal-table" className="uk-flex-top uk-modal-full" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-remove">

        <button className="uk-modal-close-default" type="button" uk-close="true"></button>

        <table id="table">
               <tbody>
                 <tr>{renderTableHeader()}</tr>
                  {renderTableData(data.EnpfCalcTable)}
               </tbody>
            </table>
    </div>
  </div>
  

</div>;