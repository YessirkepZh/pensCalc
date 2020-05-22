import React, { Component, useState } from 'react';
import InputSum from './components/InputSum';
import InputExp from './components/InputExp';
import InputSalary from './components/InputSalary';
import SelectPeriod from './components/SelectPeriod';
import InfoBlock from './components/InfoBlock';
// import DatePicker from './components/DatePicker'
import Results from './components/Results'
import axios from 'axios';
import base64  from 'base-64';
import {Response,EnpfCalculatorOptimist,EnpfCalculatorRealist,EnpfCalculatorPessimist, inputObj, outputObj} from './components/interface';
import Swal from 'sweetalert2';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';
import { DatePicker } from "@material-ui/pickers";

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
  enlarge:boolean

};
let result = {} as Response;

export default class  App extends Component<AppProps,AppState> {

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
      enlarge:false
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleChange(event:any) {
    console.log(this.state.input)
    // console.log(this.state.input.Exp1998.substring(this.state.input.Exp1998.indexOf(".")+1))
    // console.log(this.state.input.Exp1998.substr(0, this.state.input.Exp1998.indexOf('.')+1)); 
    try{
      let id = event.target.id;
      let input = this.state.input;
      switch (id) {
        case 'exp1998year':
          input.Exp1998=event.target.value+this.state.input.Exp1998.substring(this.state.input.Exp1998.indexOf("."));
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
          input.AverageSal= event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'PeriodPayOPV':
          input.PeriodPayOPV= event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'SumOPV':
          input.SumOPV=event.target.value;
          input.OPV= (this.state.opv).toString();
          this.callbackFunctionInput(input);
          break;
        case 'SumOPPV':
          input.SumOPPV = event.target.value;
          input.OPPV = (this.state.oppv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'SumDPV':
          input.SumDPV = event.target.value;
          input.DPV = (this.state.dpv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'PeriodPayDPV':
          input.PeriodPayDPV = event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'EnlargeTenge':
          input.EnlargeTenge = event.target.value;
          input.EnlargeType = (this.state.typeSal).toString();
          this.callbackFunctionInput(input);
          break;

        case 'EnlargePercent':
          input.EnlargePercent = event.target.value;
          input.EnlargeType = (this.state.typeSal).toString();
          this.callbackFunctionInput(input);
          break;
                
        case 'SumDPVtenge':
          input.SumDPVtenge=event.target.value;
          input.SumDPVtype = (this.state.typeDpv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'SumDPVpercent':
          input.SumDPVpercent=event.target.value;
          input.SumDPVtype = (this.state.typeDpv).toString();
          this.callbackFunctionInput(input);
          break;

        case 'PayoutMonth':
          input.PayoutMonth = event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'PayoutAge':
          input.PayoutAge = event.target.value;
          this.callbackFunctionInput(input);
          break;

        case 'BirthDate':
          console.log(event.target.value);
          input.BirthDate = event.target.value;
          this.callbackFunctionInput(input);
          break;
          
        default:
          break;
      }
    }
    catch(ex){console.error(ex)}
  }

  handleSubmit(event:any) {
    try {
      this.setState({loader:true});
      console.log(this.state.input)
      axios.post(`https://mobile.enpf.kz/JasperReports/api/EnpfCalculator2`, JSON.stringify(this.state.input))
      .then(res => {
        this.setState({loader:false});
        if(res.data.code === "0"){
          
          result =  JSON.parse(base64.decode(res.data.message));
          this.callbackFunction(result);
          this.setState({button:false});
        }
        if(res.data.code === "-1"){
          Swal.fire('Ошибка', res.data.message, 'error')

        }
        
      }).catch((e)=>{
        console.error(e)
        event.preventDefault();
      })
    }
    catch(ex){console.error(ex)}
    event.preventDefault();
  }

  callbackFunction = (childData:Response) => {
    this.setState({output: childData})
  };

  callbackFunctionInput = (childData:any) => {
    this.setState({input: childData})
  };

  callbackClear = () => {
   this.setState({input:inputObj,output:outputObj,button:true,});
  };

  clearAll(){
    try{
    this.callbackClear()
    }
    catch(ex){console.log(ex)}
  }

  async sendEmail(){
    console.log(this.state.input)

    Swal.fire({
      text: 'Введите Ваш e-mail чтобы получить результаты прогноза пенсии и нажмите «Отправить»',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      cancelButtonText:'Отмена',
      cancelButtonColor:'#f0506e',
      confirmButtonText: ' Отправить',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
      
        let data =this.state.input;
        data.email=login;

        return axios.post(`https://mobile.enpf.kz/JasperReports/api/sendPDFtoEmail`, JSON.stringify(data))
        .then((result:any) => {
         
          if(result.data.code==="0"){
            Swal.fire('', result.data.message, 'success')
          }
          else{
            Swal.fire('', 'Не правильный E-mail', 'error')
          }
          
        }).catch((e)=>{
          Swal.showValidationMessage(
             `${e}`
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

  Loader (){
     return(
      <div className="uk-overlay-primary uk-position-cover">
          <div className="uk-position-center">
            <div uk-spinner="ratio: 2" ></div>
          </div>
      </div>
     )
  }

render(){

  return (
    
    <div className="App">
  
     <div className="uk-margin-small-top uk-container uk-container-xsmall">
        <div className="uk-card uk-card-default">
        
          <form onSubmit={this.handleSubmit} className="uk-margin-small-left uk-margin-small-right">

            <h4 className="uk-heading-line uk-text-center"><span>Входные данные</span></h4>

              <div className="uk-flex uk-flex-left uk-text-small uk-margin-small-bottom">
                <span className="uk-text-primary uk-margin-small-right uk-margin-small-top uk-heading-bullet">Пол:</span>
                <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top ">
                    <button id="male" className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={this.handleChange} >Мужской</button>
                    <button id="female" className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={this.handleChange}>Женский</button>
                </div>
              </div>

              <div className="uk-flex uk-flex-left uk-text-small uk-margin-small-bottom">
                <span className="uk-text-primary uk-margin-small-right uk-margin-small-top uk-heading-bullet">Дата рождения:</span>
                <input id="BirthDate" className="uk-input  uk-width-1-2 uk-form-small" type="date"/>
              </div>

              <InputExp id1="exp1998year" id2="exp1998month" handleChange={this.handleChange} title="Трудовой стаж до 1998 года:"/>

              <InputExp id1="expYear" id2="expYearM" handleChange={this.handleChange} title="Стаж в накопительной пенсионной системе с 1998 года:"/>

              <InputSalary id="AverageSal" handleChange={this.handleChange} title="Средняя заработная плата в месяц, применяемая для исчисления (брутто): "/>

              <div className="uk-flex uk-flex-column">

                <span className="uk-text-small uk-text-primary uk-heading-bullet uk-text-left">Периодичность взносов: <InfoBlock text="Добровольные пенсионные взносы"/></span>

                <SelectPeriod change={this.handleChange} id="PeriodPayOPV" classN={"uk-select uk-form-small uk-margin-small-top uk-margin-small-bottom uk-text-right uk-width-1-5 "}/>
                
              </div>
              <ul uk-accordion="multiple: true;animation:true" className="uk-margin-remove-top uk-text-left " >
                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary " href="#" onClick={()=>this.setState({enlarge:!this.state.enlarge})}>
                      <span className="uk-heading-bullet">С учетом ежегодного роста заработной платы:</span> 
                    </a>
                    <div className="uk-accordion-content">

                      <div className="uk-text-small uk-flex uk-flex-left uk-margin-remove">
                          {this.state.typeSal===true? 
                            <input id="EnlargeTenge" type="number" placeholder="*** *** ***" onChange={this.handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
                          : <input id="EnlargePercent" type="number" placeholder="**" onChange={this.handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
                          }
                          <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top uk-margin-small-left ">
                            <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeSal:true})}><span>&#8376;</span></button>
                            <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeSal:false})}>%</button>
                        </div>
                        </div>

                    </div>
                </li>
              </ul>
              <ul uk-accordion="multiple: true;animation:true" className="uk-margin-remove-top uk-text-left " >
                <li  className="uk-open " >
                    <a className="uk-accordion-title uk-text-small uk-text-primary " href="#" onClick={()=>this.setState({opv:!this.state.opv})}>
                      <span className="uk-heading-bullet">Обязательные пенсионные взносы (ОПВ):</span> 
                    </a>
                    <div className="uk-accordion-content">
                      <InputSum id="SumOPV" handleChange={this.handleChange}/>
                    </div>
                </li>

                <li>
                    <a  className="uk-accordion-title uk-text-small uk-text-primary" href="#" onClick={()=>this.setState({oppv:!this.state.oppv})}>
                      <span className="uk-heading-bullet">Обязательные профессиональные пенсионные взносы (ОППВ)</span> 
                    </a>
                    <div className="uk-accordion-content">
                        <InputSum id="SumOPPV" handleChange={this.handleChange}/>
                    </div>
                </li>

                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#" onClick={()=>this.setState({dpv:!this.state.dpv})}>
                      <span className="uk-heading-bullet">Добровольные пенсионные взносы (ДПВ)</span>
                    </a>
                    <div className="uk-accordion-content">
                        <InputSum id="SumDPV" handleChange={this.handleChange}/>

                        <div className="uk-flex uk-flex-left uk-margin-small-top uk-text-small">
                          <div className="uk-flex uk-flex-column">
                            <span>возраст получения:</span>
                            <input type="text" id="PayoutAge" onChange={this.handleChange}  className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                          </div>

                          <div className="uk-flex uk-flex-column uk-margin-small-left">
                            <span>периодичность взносов:</span>
                             <SelectPeriod  handleChange={this.handleChange} id="PeriodPayDPV" classN="uk-select uk-form-small uk-margin-small-top uk-margin-small-bottom uk-text-right uk-width-1-2"/>
                          </div>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small">
                          <span>сумма добровольных взносов:</span>
                            <div className="uk-text-small uk-flex uk-flex-left uk-margin-remove">
                            {this.state.typeDpv===true? 
                              <input id="SumDPVtenge" type="number" placeholder="*** *** ***" onChange={this.handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
                            : <input id="SumDPVpercent" type="number" placeholder="**" onChange={this.handleChange} className="uk-input uk-form-small uk-text-right uk-width-1-2"/>
                            }
                            <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top uk-margin-small-left ">
                              <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeDpv:true})}><span>&#8376;</span></button>
                              <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button" onClick={()=> this.setState({typeDpv:false})}>%</button>
                            </div>
                          </div>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small uk-margin-small-top">
                          <span>желаемая ежемесячная выплата в тенге:
                            <InfoBlock text="Добровольные пенсионные взносыДобровольные пенсионные взносыДобровольные пенсионные взносы"/>
                          </span>
                          <input id="PayoutMonth" type="text" placeholder="*** *** ***" className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small" onChange={this.handleChange}/>
                        </div>


                    </div>
                </li>
            </ul>

            <div className="uk-flex uk-flex-around">
              <button  onClick={this.clearAll} className = "uk-button uk-button-danger uk-margin-small-bottom uk-button-small uk-text-center" disabled={this.state.button}>Сбросить</button>  
              <button  onClick={this.handleSubmit} className = "uk-button uk-button-primary uk-margin-small-bottom uk-button-small uk-text-center" >Рассчитать</button>   
            </div>  

          </form>
        </div>

        <div className="uk-card uk-card-default uk-margin-small-top uk-margin-small-bottom">
          <form  className="uk-margin-small-left uk-margin-small-right">
            <h4 className="uk-heading-line uk-text-center "><span>Прогноз вашей пенсии</span></h4>

            <div className="uk-matgin-remove-top">
              <div className="uk-width-auto ">
                  <ul className="uk-tab-center uk-margin-remove uk-padding-remove uk-flex-center" uk-tab="connect: #datas">
                      <li><a className="uk-text-small uk-text-capitalize uk-margin-remove-left uk-margin-remove-right" href="#">Пессимистичный</a></li>
                      <li><a className="uk-text-small uk-text-capitalize"  href="#">Реалистичный</a></li>
                      <li><a className="uk-text-small uk-text-capitalize"  href="#">Оптимистичный</a></li>
                      
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
              <div className="uk-flex uk-flex-around uk-margin-remove-top">
                {/* <a onClick={this.sendEmail} className="uk-button uk-button-default uk-button-small uk-margin-small-bottom uk-margin-small-top">отправить на e-mail</a> */}
                <a href="" className="uk-icon-button" uk-totop="true" uk-scroll="true"></a>
              </div>
            </div>
          
          </form>        
   

        </div>
     
      </div>
      {this.state.loader === true ? this.Loader() : null}
    </div>
  );
}
}
