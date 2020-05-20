import React from 'react';
import InputSum from './components/InputSum';
import InputExp from './components/InputExp';
import InputSalary from './components/InputSalary';
import SelectPeriod from './components/SelectPeriod';
import InfoBlock from './components/InfoBlock';
// import DatePicker from './components/DatePicker'
import Results from './components/Results'
import './App.css';



function handleChange() {
   
};

function handleSubmit() {

};
function countReq(){
  console.log('click')
};

function App() {

  return (
    <div className="App">
     <div className=" uk-margin-small-top">
        <div className="uk-card uk-card-default">
          <form onSubmit={handleSubmit} className="uk-margin-small-left uk-margin-small-right">

            <h4 className="uk-heading-line uk-text-center"><span>Входные данные</span></h4>

              <div className="uk-flex uk-flex-left uk-text-small uk-margin-small-bottom">
                <span className="uk-text-primary uk-margin-small-right uk-margin-small-top uk-heading-bullet">Пол:</span>
                <div uk-switcher="animation: uk-animation-fade; toggle: > *" className="uk-margin-remove-top ">
                    <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button">Мужской</button>
                    <button className="uk-button uk-button-default uk-button-small uk-text-lowercase" type="button">Женский</button>
                </div>
              </div>

              <div className="uk-flex uk-flex-left uk-text-small uk-margin-small-bottom">
                <span className="uk-text-primary uk-margin-small-right uk-margin-small-top uk-heading-bullet">Дата рождения:</span>
       
              </div>

              <InputExp val="222" handleChange={handleChange} title="Трудовой стаж до 1998 года"/>

              <InputExp val="222" handleChange={handleChange} title="Стаж в накопительной пенсионной системе с 1998 года"/>

              <InputSalary val="222" handleChange={handleChange} title="Средняя заработная плата в месяц, применяемая для исчисления (брутто) "/>

              <div className="uk-flex uk-flex-column">

                <span className="uk-text-small uk-text-primary uk-heading-bullet">Периодичность взносов: <InfoBlock text="Добровольные пенсионные взносы"/></span>

                <SelectPeriod handleChange={handleChange()} classN={"uk-select uk-form-small uk-margin-small-top uk-margin-small-bottom uk-text-right uk-width-1-5"}/>
                
              </div>

              <ul uk-accordion="multiple: true;animation:true" className="uk-margin-remove-top ">
                <li className="uk-open ">
                    <a className="uk-accordion-title uk-text-small uk-text-primary " href="#">
                      <span className="uk-heading-bullet">Обязательные пенсионные взносы (ОПВ)</span> 
                    </a>
                    <div className="uk-accordion-content">
                      <InputSum val="222" handleChange={handleChange}/>
                    </div>
                </li>

                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">
                      <span className="uk-heading-bullet">Обязательные профессиональные пенсионные взносы (ОППВ)</span> 
                    </a>
                    <div className="uk-accordion-content">
                        <InputSum val="222" handleChange={handleChange}/>
                    </div>
                </li>

                <li>
                    <a className="uk-accordion-title uk-text-small uk-text-primary" href="#">
                      <span className="uk-heading-bullet">Добровольные пенсионные взносы (ДПВ)</span>
                    </a>
                    <div className="uk-accordion-content">
                        <InputSum val="" handleChange={handleChange}/>

                        <div className="uk-flex uk-flex-left uk-margin-small-top uk-text-small">
                          <div className="uk-flex uk-flex-column">
                            <span>возраст получения:</span>
                            <input type="text" defaultValue="" className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                          </div>

                          <div className="uk-flex uk-flex-column uk-margin-small-left">
                            <span>периодичность взносов:</span>
                             <SelectPeriod  handleChange={handleChange} classN="uk-select uk-form-small uk-margin-small-top uk-margin-small-bottom uk-text-right uk-width-1-2"/>
                          </div>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small">
                          <span>сумма добровольных взносов:
                            <InfoBlock text="Добровольные пенсионные взносы"/>
                          </span>
                          <input type="text" defaultValue="222" className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                        </div>

                        <div className="uk-flex uk-flex-left uk-flex-column uk-text-small uk-margin-small-top">
                          <span>желаемая ежемесячная выплата в тенге:
                            <InfoBlock text="Добровольные пенсионные взносыДобровольные пенсионные взносыДобровольные пенсионные взносы"/>
                          </span>
                          <input type="text" defaultValue="222" className="uk-text-right uk-width-1-2 uk-margin-small-top uk-width-1-2 uk-input uk-form-small"/>
                        </div>


                    </div>
                </li>
            </ul>

            <div className="uk-flex uk-flex-around">
              <button  className = "uk-button uk-button-danger uk-margin-small-bottom uk-button-small uk-text-center" >Сбросить</button>  
              <a href="" type="submit" onClick={countReq} className = "uk-button uk-button-primary uk-margin-small-bottom uk-button-small uk-text-center" >Рассчитать</a>   
            </div>  

          </form>
        </div>

        <div className="uk-card uk-card-default uk-margin-small-top uk-margin-small-bottom">
          <form onSubmit={handleSubmit} className="uk-margin-small-left uk-margin-small-right">
            <h4 className="uk-heading-line uk-text-center"><span>Прогноз вашей пенсии</span></h4>

            <div uk-grid>
              <div className="uk-width-auto">
                  <ul className="uk-tab-left" uk-tab="connect: #datas">
                      <li><a className="uk-text-small uk-text-capitalize" href="#">Пессимистичный</a></li>
                      <li><a className="uk-text-small uk-text-capitalize"  href="#">Реалистичный</a></li>
                      <li><a className="uk-text-small uk-text-capitalize"  href="#">Оптимистичный</a></li>
                      
                  </ul>
              </div>
              <div className="uk-width-expand">
                  <ul id="datas" className="uk-switcher" >
                      <li>
                          <ul className="uk-list"> 
                              <Results obj="222"/>
                          </ul>
                      </li>
                      <li>
                          <ul className="uk-list"> 
                              <Results obj="222"/>
                          </ul>
                      </li>
                      <li>
                          <ul className="uk-list"> 
                            <Results obj="222"/>
                          </ul>
                      </li>
                      
                  </ul>
              </div>
            </div>
          </form>        
    

        </div>
      </div>
    </div>
  );
}

export default App;
