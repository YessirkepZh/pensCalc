import React, {  } from 'react';
import InputSum from './components/InputSum';
import InputExp from './components/InputExp';
import InputSalary from './components/InputSalary';
import SelectPeriod from './components/SelectPeriod';
import InfoBlock from './components/InfoBlock';
// import DatePicker from './components/DatePicker'

import axios from 'axios';
import base64  from 'base-64';
import {Response,EnpfCalculatorOptimist,EnpfCalculatorRealist,EnpfCalculatorPessimist, inputObj, outputObj} from './components/interface';
import Swal from 'sweetalert2';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import Tabs from './components/Tabs'
import { Button } from '@material-ui/core';
import Spinner from './components/Spinner';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';
import ru from './locale/ru.json'
import kz from './locale/kz.json'


import queryString from 'query-string';
import { Route } from 'react-router-dom';

 

interface AppProps { 
}
export interface AppState {
  input:{
  Sex:string;
  BirthDate: string;
  Exp1998:string;
  ExpYear:string;
  AverageSal:string;
  EnlargeSal:string;
  EnlargeType:string;
  EnlargeTenge:string;
  EnlargePercent:string;
  PeriodPayOPV:string;
  OPV:string;
  SumOPV:string;
  OPPV:string;
  SumOPPV:string;
  DPV:string;
  SumDPV:string;
  SumDPVtype:string;
  SumDPVtenge:string;
  SumDPVpercent:string;
  PeriodPayDPV:string;
  PayoutAge:string;
  PayoutMonth:string;
  Lang:string;
  CalcType:string;
  email:string;},
  output:{
    EnpfCalculatorRealist:EnpfCalculatorRealist,
    EnpfCalculatorOptimist:EnpfCalculatorOptimist,
    EnpfCalculatorPessimist:EnpfCalculatorPessimist
  },
  button:boolean,
  loader:boolean,
  opv:boolean,
  oppv:boolean,
  dpv:boolean,
  typeSal:boolean,
  typeDpv:boolean,
  enlarge:boolean,
  lang:string,

};
let result = {} as Response;

export default class  App extends React.Component<AppProps,AppState> {
  myRef:any
  textInput: any;
  AverageSal:any;
  scrollTarget:any;


  textText:string='';

  constructor(props:any) {
    super(props);
    this.state = {
      input:inputObj,
      output:outputObj,
      button:true,
      loader:false,
      opv:true,
      oppv:false,
      dpv:false,
      typeSal:true,
      typeDpv:true,
      enlarge:false,
      lang:'ru'
      
    };

    this.myRef = React.createRef(); 
    this.textInput = React.createRef();
    this.AverageSal = React.createRef();
    this.scrollTarget = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.ResetTextInput = this.ResetTextInput.bind(this);
    console.log(this.props)
  }

  handleChange(event:any) {
    // console.log(this.state.input)
    // console.log(this.state.input.Exp1998.substring(this.state.input.Exp1998.indexOf(".")+1))
    // console.log(this.state.input.Exp1998.substr(0, this.state.input.Exp1998.indexOf('.')+1)); 
    try{
      let id = event.target.id;
      let input = this.state.input;
      switch (id) {
        case 'exp1998year':
          input.Exp1998=(parseInt(event.target.value) < 0 ? '0' : parseInt(event.target.value) >100 ? '100' :event.target.value)  +this.state.input.Exp1998.substring(this.state.input.Exp1998.indexOf("."));
          this.callbackFunctionInput(input);
          break;
        
        case 'exp1998month':
          let month= (parseFloat(event.target.value)/12).toFixed(2).toString();
          input.Exp1998=this.state.input.Exp1998.substr(0, this.state.input.Exp1998.indexOf('.'))+'.' +  month.substr(0, month.indexOf('.'));
          break;
          
        case 'expYearM':
          let month2= (parseFloat(event.target.value)/12).toFixed(2).toString();
          input.ExpYear=this.state.input.ExpYear.substr(0, this.state.input.ExpYear.indexOf('.'))+'.' +  month2.substr(0, month2.indexOf('.'));
          break;

        case 'expYear':
          input.ExpYear=event.target.value+this.state.input.ExpYear.substring(this.state.input.ExpYear.indexOf("."));
          this.callbackFunctionInput(input);
          break;
        case 'male':
          input.Sex ="M";
          this.callbackFunctionInput(input);
          break;
        case 'female':
          input.Sex ="F";
          this.callbackFunctionInput(input);
          break;

        case 'AverageSal':
          input.AverageSal=event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          this.callbackFunctionInput(input);
          break;

        case 'PeriodPayOPV':
          input.PeriodPayOPV= event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'SumOPV':
          input.SumOPV = event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          input.OPV= (this.state.opv).toString();
          this.callbackFunctionInput(input);
          break;
        case 'SumOPPV':
          input.SumOPPV=event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          input.OPPV = (this.state.oppv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'SumDPV':
          input.SumDPV=event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          input.DPV = (this.state.dpv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'PeriodPayDPV':
          input.PeriodPayDPV = event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'EnlargeTenge':
          input.EnlargeTenge=event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          input.EnlargeType = (this.state.typeSal).toString();
          input.EnlargeSal = (this.state.enlarge).toString();
          this.callbackFunctionInput(input);
          break;

        case 'EnlargePercent':
          input.EnlargePercent = event.target.value;
          input.EnlargeType = (this.state.typeSal).toString();
          input.EnlargeSal = (this.state.enlarge).toString();
          if (parseInt(event.target.value) < 0) input.EnlargePercent = '0';
          if (parseInt(event.target.value) > 100) input.EnlargePercent  = '100';
          this.callbackFunctionInput(input);
          break;
                
        case 'SumDPVtenge':
          input.SumDPVtenge=event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          input.SumDPVtype = (this.state.typeDpv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'SumDPVpercent':
          input.SumDPVpercent=event.target.value;
          input.SumDPVtype = (this.state.typeDpv).toString();
          if (parseInt(event.target.value) < 0) input.SumDPVpercent = '0';
          if (parseInt(event.target.value) > 100) input.SumDPVpercent  = '100';
          this.callbackFunctionInput(input);
          break;

        case 'PayoutMonth':
          input.PayoutMonth=event.target.value === '' ? '' : parseFloat((event.target.value).split(' ').join('')).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
          this.callbackFunctionInput(input);
          break;

        case 'PayoutAge':
          input.PayoutAge = event.target.value;
          if (parseInt(event.target.value) < 0) input.PayoutAge = '0';
          if (parseInt(event.target.value) > 100) input.PayoutAge  = '100';
          this.callbackFunctionInput(input);
          break;

        case 'BirthDate':
          // console.log(event.target.value);
          input.BirthDate = this.formatDate(event.target.value);
          this.callbackFunctionInput(input);
          break;
          
        default:
          break;
      }
    }
    catch(ex){console.error(ex)}
  }
  //сброс всех полей (выходных / входных)
  ResetTextInput() {
    try{
      this.textInput.current.reset();
    }
    catch(ex){console.error(ex)}
  }

  //валидация полей до расчета
  isValidInputs():boolean{

    let input= this.state.input;
    // console.log(input);
    if(this.state.input.EnlargeTenge===''){
      input.EnlargeTenge='0'
      this.callbackFunctionInput(input);
    }
    if(this.state.input.EnlargePercent===''){
      input.EnlargePercent='0'
      this.callbackFunctionInput(input);
    }
    if(this.state.input.SumDPVtenge===''){
      input.SumDPVtenge='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.SumDPVpercent===''){
      input.SumDPVpercent='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.AverageSal===''){
      input.AverageSal='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.SumOPV===''){
      input.SumOPV='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.SumOPPV===''){
      input.SumOPPV='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.SumDPV===''){
      input.SumDPV='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.PayoutAge===''){
      input.PayoutAge='0';
      this.callbackFunctionInput(input);
    }
    if(this.state.input.PayoutMonth===''){
      input.PayoutMonth='0';
      this.callbackFunctionInput(input);
    }
    return true
  }

  // возвращает json входных данных без раздярностей
  revmoveSpaceBetweenDigits(input:any){
    input.AverageSal=input.AverageSal.split(' ').join('');
    input.SumOPV=input.SumOPV.split(' ').join('');
    input.SumOPPV=input.SumOPPV.split(' ').join('');
    input.SumDPV=input.SumDPV.split(' ').join('');
    input.EnlargeTenge=input.EnlargeTenge.split(' ').join('');
    input.SumDPVtenge=input.SumDPVtenge.split(' ').join('');
    input.PayoutMonth=input.PayoutMonth.split(' ').join('');
    return JSON.stringify(input);
  }

  //расчитать результаты 
  handleSubmit(event:any) {
    try {
       if(this.isValidInputs()===true){
         
          this.setState({loader:true});
          axios.post(`https://mobile.enpf.kz/JasperReports/api/EnpfCalculator2`, this.revmoveSpaceBetweenDigits(this.state.input) )
          .then(res => {
            this.setState({loader:false});
            if(res.data.code === "0"){
              
              result =  JSON.parse(base64.decode(res.data.message));
              this.callbackFunction(result);
              this.setState({button:false});
            
              window.scrollTo(0, this.scrollTarget.current.offsetTop) 
            
              if(result.PensionAnnuityAsk==="1"||result.PensionAnnuityAsk==="3"||result.PensionAnnuityAsk==="4"){
                let scen1=this.state.lang==="ru" ? ru.alert.res_all : kz.alert.res_all ;
                let scen3=this.state.lang==="ru" ? ru.alert.res_real : kz.alert.res_real ;
                let scen4=this.state.lang==="ru" ? ru.alert.res_opt : kz.alert.res_opt ;

                let text = this.state.lang==='ru' ? ru.alert.res_annunity : kz.alert.res_annunity + (result.PensionAnnuityAsk==='1'? scen1 :result.PensionAnnuityAsk==="3" ? scen3 : scen4 )+this.state.lang==='ru' ? ru.alert.res_ask : kz.alert.res_ask;
                Swal.fire({
                  text: text,
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#2A6BCB',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Да',
                  cancelButtonText:'Нет'
                }).then((con) => {
                  
                  if (con.value) {
                    let val=this.state.input;
                    val.CalcType='2';
                    this.setState({loader:true});
                    axios.post(`https://mobile.enpf.kz/JasperReports/api/EnpfCalculator2`,this.revmoveSpaceBetweenDigits(val))
                    .then(res => {
                      this.setState({loader:false});
                      if(res.data.code === "0"){
                        
                        let result =  JSON.parse(base64.decode(res.data.message));
                        this.callbackFunction(result);
                        this.setState({button:false});
                        window.scrollTo(0, this.scrollTarget.current.offsetTop) 

                      }
                      if(res.data.code === "-1"){
                        Swal.fire('Ошибка', res.data.message, 'error')
              
                      }
                    }).catch((ex)=>{  Swal.fire('Ошибка', res.data.message, 'error')});

                  }
                })
                window.scrollTo(0, this.scrollTarget.current.offsetTop) 
              }
              
            }
            if(res.data.code === "-1"){
              Swal.fire({
                title:'Ошибка', 
                text:res.data.message,
                icon: 'error',
                confirmButtonColor: '#2A6BCB'})
            }
            
          }).catch((e)=>{
            console.error(e)
            event.preventDefault();
          })
      }
      else {
        Swal.fire({
          title:'Упс', 
          text:this.state.lang==='ru' ? ru.alert.enter_field : kz.alert.enter_field,
          icon: 'warning',
          confirmButtonColor: '#2A6BCB'});
      }
     
    }
    catch(ex){console.error(ex)}
    event.preventDefault();
  }

  //обновить выходные параметры
  callbackFunction = (childData:Response) => {
    this.setState({output: childData})
  };

  //обновить входные параметры
  callbackFunctionInput = (childData:any) => {
    this.setState({input: childData})
  };

  //отправка результата на почту
  async sendEmail(){
   

    Swal.fire({
      text: this.state.lang==='ru' ? ru.alert.enter_email : kz.alert.enter_email,
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText:'Отмена',
      cancelButtonColor:'#f0506e',
      confirmButtonText: ' Отправить',
      confirmButtonColor:'#2A6BCB',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
      
        let data =this.state.input;
        data.email=login;

        return axios.post(`https://mobile.enpf.kz/JasperReports/api/sendPDFtoEmail`, this.revmoveSpaceBetweenDigits(data))
        .then((result:any) => {
         
          if(result.data.code==="0"){
            Swal.fire('', result.data.message, 'success')
          }
          else{
            Swal.fire('',this.state.lang==='ru' ? ru.alert.incorrect_email : kz.alert.incorrect_email , 'error')
          }
          
        }).catch((e)=>{
          Swal.showValidationMessage(
             `${e}+333`
            )
        })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result:any) => {
      if (result.code ==="0") {
        Swal.fire('', result.message, 'success')
      }
    })
  }
  //спинер загрузки 
  Loader (){
     return(
      <div className="uk-overlay-primary uk-position-cover" >
          <div className="uk-position-center">
            <div uk-spinner="ratio: 2" ></div>
          </div>
      </div>
     )
  }
  // конверт формата даты 12.12.1989
  formatDate (input:any) {
    var datePart = input.match(/\d+/g),
    year = datePart[0], // get only two digits
    month = datePart[1], day = datePart[2];
  
    return day+'.'+month+'.'+year;
  }
 
  InputTenge = () => (
   
  <input id="EnlargeTenge" type="text" placeholder="*** *** ***" onChange={this.handleChange} value={this.state.input.EnlargeTenge} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>

)
  InputPercent= () => (
  <input id="EnlargePercent" type="text" placeholder="**" onChange={this.handleChange} value={this.state.input.EnlargePercent} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>

)


 
render(){


  return (
    

    <div className="App">

      <Route exact path='/main/:lang' component={App}/>
     
     <div className="uk-margin-small-top ">

       
          <form className="uk-text-left" ref={this.textInput}>

            <h4 className="uk-heading-line uk-text-center"><span> {this.state.lang==='ru' ? ru.input.title : kz.input.title}</span></h4>
              <div className="backGrey">
                <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left ">{this.state.lang==='ru' ? ru.input.sex : kz.input.sex}</span>
                <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top uk-margin-small-bottom uk-margin-small-left">
               
                    <button id="male" className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={this.handleChange} >{this.state.lang==='ru' ? ru.input.male : kz.input.male}</button>
                    <button id="female" className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={this.handleChange}>{this.state.lang==='ru' ? ru.input.female : kz.input.female}</button>
                </div>
              </div>

              <div className="uk-margin-small-bottom">
                <div className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{this.state.lang==='ru' ? ru.input.birthday : kz.input.birthday}</div>
                <input id="BirthDate" className="uk-input  uk-width-1-2 uk-form-small uk-margin-small-left" type="date" onChange={this.handleChange} />
              </div>
              <div className="backGrey">
                <InputExp id1="exp1998year" id2="exp1998month" handleChange={this.handleChange} title={this.state.lang==='ru' ? ru.input.exp_to : kz.input.exp_to}/>
              </div>
              
              <div className="">
                <InputExp id1="expYear" id2="expYearM" handleChange={this.handleChange} title={this.state.lang==='ru' ? ru.input.exp_after : kz.input.exp_after}/>
              </div>

              <div className="backGrey">
                <InputSalary id="AverageSal"  value={this.state.input.AverageSal} handleChange={this.handleChange} title={this.state.lang==='ru' ? ru.input.average : kz.input.average}/>
              <div>{this.textText}</div>
              </div>

              <div className="uk-margin-small-bottom">

                <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{this.state.lang==='ru' ? ru.input.period_pay : kz.input.period_pay}<InfoBlock text={this.state.lang==='ru' ? ru.input.title : kz.input.title}/></span>
                <div className="uk-margin-small-left">
                  <SelectPeriod change={this.handleChange} id="PeriodPayOPV" classN={"uk-select uk-form-small uk-text-right uk-width-1-5 "}/> 
                </div>
                
              </div>

              <ul uk-accordion="multiple: true;animation:true" className="uk-margin-remove uk-text-left " >
                <li className="uk-margin-small-bottom"> 
                    <a className="uk-accordion-title backGrey" href="#" onClick={()=>this.setState({enlarge:!this.state.enlarge})}>
                      <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{this.state.lang==='ru' ? ru.input.enlarge_sal : kz.input.enlarge_sal}</span> 
                    </a>
                    <div className="uk-accordion-content uk-text-small uk-flex uk-flex-left uk-margin-small-top uk-margin-small-left uk-margin-small-bottom">
                        {this.state.typeSal=== true ? this.InputTenge() : this.InputPercent()}
                        
                        <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top uk-margin-small-left ">
                          <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> {this.setState({typeSal:true})  }}><span>&#8376;</span></button>
                          <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeSal:false})}>%</button>
                        </div>

                    </div>
                </li>
              </ul>
              <ul uk-accordion="multiple: true;animation:true" className="uk-margin-remove-top uk-text-left " >
                <li  className="uk-open uk-margin-small-bottom" >
                    <a className="uk-accordion-title backGrey" href="#" onClick={()=>this.setState({opv:!this.state.opv})}>
                      <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{this.state.lang==='ru' ? ru.input.opv : kz.input.opv}</span> 
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-top">
                      <InputSum id="SumOPV" value={this.state.input.SumOPV} handleChange={this.handleChange}/>
                    

                    <ul uk-accordion="multiple: true;animation:true" className="uk-margin-small-top uk-text-left " >
                      <li className="uk-margin-remove-top">
                          <a  className="uk-accordion-title backGrey" href="#" onClick={()=>this.setState({oppv:!this.state.oppv})}>
                            <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{this.state.lang==='ru' ? ru.input.oppv : kz.input.oppv}</span> 
                          </a>
                          <div className="uk-accordion-content uk-margin-remove-top ">
                              <InputSum id="SumOPPV" value={this.state.input.SumOPPV} handleChange={this.handleChange}/>
                          </div>
                      </li>
                    </ul>
                    </div>
                </li>

                

                <li className="uk-margin-remove-top  ">
                    <a className="uk-accordion-title backGrey" href="#" onClick={()=>this.setState({dpv:!this.state.dpv})}>
                      <span className="uk-text-secondary uk-text-small uk-text-normal uk-margin-small-left">{this.state.lang==='ru' ? ru.input.dpv : kz.input.dpv}</span>
                    </a>
                    <div className="uk-accordion-content uk-margin-remove-top">
                        <InputSum id="SumDPV" value={this.state.input.SumDPV} handleChange={this.handleChange}/>

                        <div className="uk-flex uk-flex-column uk-margin-small-left">
                            <span className="uk-text-secondary uk-text-normal uk-text-small">{this.state.lang==='ru' ? ru.input.pay_age : kz.input.pay_age}</span>
                            <input type="text" id="PayoutAge" onChange={this.handleChange}  ref={this.myRef} className="uk-text-right uk-width-1-2 uk-width-1-5 uk-input uk-form-small"/>
                          </div>

                          <div className="uk-flex uk-flex-column uk-margin-small-left">
                            <span className="uk-text-secondary uk-text-normal uk-text-small">{this.state.lang==='ru' ? ru.input.title : kz.input.title}</span>
                             <SelectPeriod  change={this.handleChange} id="PeriodPayDPV" classN="uk-select uk-form-small uk-margin-small-bottom uk-text-right uk-width-1-5"/>
                          </div>
                       

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small uk-margin-small-left">
                          <span className="uk-text-secondary uk-text-normal">{this.state.lang==='ru' ? ru.input.sum_dpv : kz.input.sum_dpv}</span>
                            <div className="uk-text-small uk-flex uk-flex-left uk-margin-remove">
                            {this.state.typeDpv===true? 
                              <input id="SumDPVtenge" type="text" value={this.state.input.SumDPVtenge} placeholder="*** *** ***" onChange={this.handleChange}  className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
                            : <input id="SumDPVpercent" type="text" value={this.state.input.SumDPVpercent} placeholder="**" onChange={this.handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
                            }
                            <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top uk-margin-small-left ">
                              <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeDpv:true})}><span>&#8376;</span></button>
                              <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeDpv:false})}>%</button>
                            </div>
                          </div>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small uk-margin-small-top uk-margin-small-left">
                          <span className="uk-text-secondary uk-text-normal">{this.state.lang==='ru' ? ru.input.moth_sal : kz.input.month}
                            <InfoBlock text="Добровольные пенсионные взносыДобровольные пенсионные взносыДобровольные пенсионные взносы"/>
                          </span>
                          <input id="PayoutMonth" type="text" placeholder="*** *** ***" value={this.state.input.PayoutMonth} className="uk-text-right uk-width-1-2 uk-width-1-2 uk-input uk-form-small" onChange={this.handleChange}/>
                        </div>


                    </div>
                </li>
            </ul>

            <div className="uk-flex uk-flex-around uk-margin-small-bottom">
              {/* <button  onClick={this.ResetTextInput} className = "uk-button uk-button-danger uk-margin-small-bottom uk-button-small uk-text-center" >Сбросить</button>  
              <button  onClick={this.handleSubmit} className = "uk-button uk-button-primary uk-margin-small-bottom uk-button-small uk-text-center" >Рассчитать</button>   
             */}
             
              <Button  variant="outlined" className={this.state.button=== true ? "disabled":"but-reset"} onClick={this.ResetTextInput}  disabled={this.state.button}>{this.state.lang==='ru' ? ru.input.refrsh : kz.input.refrsh}</Button>
              <Button variant="contained" className="uk-text-normal but-result" onClick={this.handleSubmit} >{this.state.lang==='ru' ? ru.input.result : kz.input.result}</Button>
            </div>  

          </form>

        <div className="diveder"> 

        </div>     
          <form  className="uk-margin-small-top" ref={this.textInput}>
            <h4 className="uk-heading-line uk-text-center uk-margin-remove-bottom " ref={this.scrollTarget}><span>Прогноз вашей пенсии</span></h4>
            <Tabs 
              data={this.state.output}
              onClick={this.sendEmail}
              disabled={this.state.button}
              lang={this.state.lang}
            />    
{/* 
            <div className="uk-margin-small-top ">
              <div className="uk-width-expand">
                  <ul className="uk-tab-center uk-margin-remove uk-padding-remove uk-flex-center" uk-tab="connect: #datas">
                      <li><a className="uk-text-small uk-text-capitalize uk-margin-remove-left uk-margin-remove-right" href="#">Пессимистичный</a></li>
                      <li><a className="uk-text-small uk-text-capitalize uk-margin-remove-left uk-margin-remove-right"  href="#">Реалистичный</a></li>
                      <li><a className="uk-text-small uk-text-capitalize uk-margin-remove-left uk-margin-remove-right"  href="#">Оптимистичный</a></li>
                      
                  </ul>
              </div>
              <div className="uk-width-expand">
                  <ul id="datas" className="uk-switcher" >
                      <li>
                          <ul className="uk-list"> 
                              <Results 
                               data={this.state.output.EnpfCalculatorPessimist}
                               onClick={this.sendEmail}
                               disabled={this.state.button}
                              />
                          </ul>
                      </li>
                      <li>
                          <ul className="uk-list"> 
                              <Results 
                                data={this.state.output.EnpfCalculatorRealist}
                                onClick={this.sendEmail}
                                disabled={this.state.button}
                                />
                              
                          </ul>
                      </li>
                      <li>
                          <ul className="uk-list"> 
                            <Results 
                              data={this.state.output.EnpfCalculatorOptimist}
                              onClick={this.sendEmail}
                              disabled={this.state.button}
                              />
                          
                          </ul>
                      </li>
                      
                  </ul>
              </div>
              
            </div>
           */}
          </form>        
          <div className="uk-flex uk-flex-around uk-margin-remove-top">
                <button className="uk-icon-button" uk-totop="true" uk-scroll="true"></button>
          </div>
       
      </div>
      {/* {this.state.loader === true ? <Spinner/>: null} */}
    </div>
    
  );
}
}

