import React from 'react';
import InfoBlock from './InfoBlock';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Button } from '@material-ui/core';
import { runInContext } from 'vm';
import ru from '../locale/ru.json'
import kz from '../locale/kz.json'
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
 function renderTableHeader(lang:string) {
   
    let header = (lang == "ru " ? 
      [
        ru.table.year,
        ru.table.age,
        ru.table.basic,
        ru.table.solidarity,
        ru.output.opv,
        ru.output.oppv,
        ru.output.dpv,
        ru.table.pens_annunity,
        ru.table.sum,
        ru.table.koef
      ]:[
        kz.table.year,
        kz.table.age,
        kz.table.basic,
        kz.table.solidarity,
        kz.output.opv,
        kz.output.oppv,
        kz.output.dpv,
        kz.table.pens_annunity,
        kz.table.sum,
        kz.table.koef
      ]);

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

 function renderChart(data:any,lang:string){

  const options: Highcharts.Options = {
    title: {
        text: lang==='ru'? ru.alert.payout_graph : kz.alert.payout_graph
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
        name: lang==='ru' ? ru.table.basic : kz.table.basic,
        data: getKey(data,'BasicPension')
    },
    {
      type: 'line',
      name: lang==='ru' ? ru.table.solidarity : kz.table.solidarity,
      data: getKey(data,'SolidarityPension')
    },
    {
      type: 'line',
      name: lang==='ru' ? ru.output.opv : kz.output.opv,
      data: getKey(data,'OPV')
    },
    {
      type: 'line',
      name: lang==='ru' ? ru.output.oppv : kz.output.oppv,
      data: getKey(data,'OPPV')
    },
    {
      type: 'line',
      name: lang==='ru' ? ru.output.dpv : kz.output.dpv,
      data: getKey(data,'DPV')
    },
    {
      type: 'line',
      name: lang==='ru' ? ru.table.pens_annunity : kz.table.pens_annunity,
      data: getKey(data,'PensAnnuity')
    },
    {
      type: 'line',
      name: lang==='ru' ? ru.table.sum : kz.table.sum,
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

  
export default ({ data ,onClick,disabled,lang}:any) => 

<div className="uk-text-small">

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
    <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal  uk-text-small">{lang==='ru' ? ru.output.payout_age_opv : kz.output.payout_age_opv}) <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
    <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">{data.Retirement.Age ==='' ? '**':data.Retirement.Age}</span> {lang==='ru' ? ru.input.year : kz.input.year} <span className="uk-text-bold uk-text-emphasis ">{data.Retirement.Dt ==='' ? '**':data.Retirement.Dt}</span></div>
  </div>
  <hr className="uk-margin-remove"/>

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right" >
      <div className="uk-width-expand" uk-leader="true" >
        <span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.payout_age_opv : kz.output.payout_age_opv} <InfoBlock text="Добровольные пенсионные взносыДобровольные пенсионные взносыДобровольные пенсионные взносы"/></span>
      </div>
      <div className="uk-text-small uk-text-right">
        <span className="uk-text-bold uk-text-emphasis "> {data.Retirement.Age ==='' ? '**':data.Retirement.Age}</span> {lang==='ru' ? ru.input.year : kz.input.year} <span className="uk-text-bold uk-text-emphasis ">{data.Retirement.Dt ==='' ? '**':data.Retirement.Dt}</span>
      </div>
  </div>
  <hr className="uk-margin-remove"/>

  <div className="uk-text-left uk-text-secondary uk-margin-small-left uk-margin-small-right uk-text-small">{lang==='ru' ? ru.output.payout_years : kz.output.payout_years}</div>
  
  <div className="uk-flex uk-flex-bottom  uk-text-left uk-margin-medium-left uk-margin-medium-left uk-margin-small-right" >
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.opv : kz.output.opv} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis"><span className="uk-text-bold uk-text-emphasis ">{data.NumOfYearsBeforeExhAccumOPV === '' ? '**' :data.NumOfYearsBeforeExhAccumOPV}</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.oppv : kz.output.oppv} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">{data.NumOfYearsBeforeExhAccumOPPV === '' ? '**' :data.NumOfYearsBeforeExhAccumOPPV}</span> лет</div>
  </div>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal  uk-text-small">{lang==='ru' ? ru.output.dpv : kz.output.dpv} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-small"><span className="uk-text-bold uk-text-emphasis ">{data.NumOfYearsBeforeExhAccumDPV === '' ? '**' :data.NumOfYearsBeforeExhAccumDPV}</span> лет</div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.solidarity : kz.output.solidarity} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.SolidarityPension === '' ? '***' : parseFloat(data.SolidarityPension).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>
  
  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.basic : kz.output.basic} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.BasicPension === '' ? '***' : parseFloat(data.BasicPension).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.pension_enpf : kz.output.pension_enpf}<InfoBlock text="Добровольные пенсионные взносы"/> </span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.SolidarityPension === '' ? '***' : (parseFloat(data.EnpfPensionOPV)+parseFloat(data.EnpfPensionOPPV)+parseFloat(data.EnpfPensionDPV)).toLocaleString()} <span className="tenge" >&#8376;</span></div>
  </div>


    <div className="uk-text-left uk-margin-small-left uk-margin-small-right uk-text-small">{lang==='ru' ? ru.output.what_more : kz.output.what_more}</div>

    <div className="uk-flex uk-flex-bottom  uk-text-left uk-margin-medium-left uk-margin-small-right">
        <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.opv : kz.output.opv} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
        <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.EnpfPensionOPV === '' ? '***' : parseFloat(data.EnpfPensionOPV).toLocaleString()} <span className="tenge">&#8376;</span></div>
    </div>

    <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.oppv : kz.output.oppv} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.EnpfPensionOPPV === '' ? '***' : parseFloat(data.EnpfPensionOPPV).toLocaleString()} <span className="tenge">&#8376;</span></div>
    </div>

    <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-medium-left uk-margin-small-right">
        <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.dpv : kz.output.dpv} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
        <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.EnpfPensionDPV === '' ? '***' : parseFloat(data.EnpfPensionDPV).toLocaleString()} <span className="tenge">&#8376;</span></div>
    </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-remove-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.pens_annunity : kz.output.pens_annunity} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small uk-text-bottom">{data.PensionAnnuity === '' ? '***' : parseFloat(data.PensionAnnuity).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-small uk-text-bold">{lang==='ru' ? ru.output.sum : kz.output.sum}<InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.TotalSum === '' ? '***' : parseFloat(data.TotalSum).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-normal uk-text-small">{lang==='ru' ? ru.output.prognoz : kz.output.prognoz}<InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small">{data.SalaryBeforePension === '' ? '***' : parseFloat(data.SalaryBeforePension).toLocaleString()} <span className="tenge">&#8376;</span></div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-bottom uk-margin-small-top uk-text-left uk-margin-small-left uk-margin-small-right">
      <div className="uk-width-expand" uk-leader="true" ><span className="uk-text-secondary uk-text-bold uk-text-small">{lang==='ru' ? ru.output.koef : kz.output.koef} <InfoBlock text="Добровольные пенсионные взносы"/></span></div>
      <div className="uk-text-emphasis uk-text-bold uk-text-small"> {data.Koef === '' ? '***' : parseFloat(data.Koef).toLocaleString()}%</div>
  </div>
  <hr className="deviderRes"/>

  <div className="uk-flex uk-flex-around uk-margin-small-top uk-margin-small-bottom">
      
    {/* <button type="button" uk-toggle="target: #modal-graph" className="uk-button uk-button-primary  uk-margin-small-bottom uk-margin-small-top" disabled={disabled}>график</button>

    <button type="button" uk-toggle="target: #modal-table" className="uk-button uk-button-primary  uk-margin-small-bottom uk-margin-small-top disabled" disabled={disabled}>таблица</button> */}
    
    <Button variant="contained" className={disabled=== true ? "disabledRes uk-width-1-2 uk-margin-small-left uk-margin-small-right":"but-result uk-width-1-2 uk-margin-small-left uk-margin-small-right"} uk-toggle="target: #modal-graph" disableElevation disabled={disabled}>{lang==='ru' ? ru.output.graph : kz.output.graph}</Button>
    
    <Button variant="contained" className={disabled=== true ? "disabledRes uk-width-1-2 uk-margin-small-left uk-margin-small-right":"but-result uk-width-1-2 uk-margin-small-left uk-margin-small-right"} uk-toggle="target: #modal-table" disableElevation disabled={disabled}>{lang==='ru' ? ru.output.table : kz.output.table}</Button>

  </div>  
  <div className="uk-flex uk-flex-center ">
    {/* <button type="button" onClick={onClick} className="uk-button uk-button-primary uk-button-small uk-margin-small-bottom uk-margin-small-top uk-width-1-2" disabled={disabled}>отправить на e-mail</button> */}
    <Button variant="contained" className={disabled=== true ? "disabledRes uk-width-2-2 uk-margin-small-left uk-margin-small-right":"but-result uk-width-2-2 uk-margin-small-left uk-margin-small-right"} onClick={onClick} disableElevation disabled={disabled}>{lang==='ru' ? ru.output.send_email : kz.output.send_email}</Button>

  </div>

  <div id="modal-graph" className="uk-flex-top " uk-modal="true">
    <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body  uk-padding-remove">

        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
        {renderChart(data.EnpfCalcTable,lang)}
    </div>
  </div>

  <div id="modal-table" className="uk-flex-top" uk-modal="true">
    <div className="uk-modal-dialog uk-modal-body uk-margin-remove uk-overflow-auto">

        <button className="uk-modal-close-default" type="button" uk-close="true"></button>

        <table id="table" className="uk-table">
               <tbody>
                 <tr>{renderTableHeader(lang)}</tr>
                  {renderTableData(data.EnpfCalcTable)}
               </tbody>
            </table>
    </div>
  </div>
  

</div>;