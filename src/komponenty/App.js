import { render } from '@testing-library/react';
import { Component } from 'react';
import Wynik from './Wynik'
import './App.css';
import Form from './Form';
const key = "b422539207b8297abd9471f1ac69c459"

class App extends Component{
  state = {
      value: "",
      miasto: "",
      data: "",
      wschod: "",
      zachod: "",
      temp: "",
      cisnienie: "",
      wiatr: "",
      error: false

  }
  City = (event) => {
    event.preventDefault();
      const API = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.value+"&appid="+key
      fetch(API)
      .then(response => {
        if(response.ok){
          return response;
        }
        throw Error("Nie działa")
      })
      .then(response => response.json())
      .then(data => {
        const date = new Date().toLocaleString()
        this.setState({
          miasto: this.state.value,
          data: date,
          wschod: data.sys.sunrise,
          zachod: data.sys.sunset,
          temp: data.main.temp,
          cisnienie: data.main.pressure,
          wiatr: data.wind.speed,
          error: false
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          miasto: this.state.value,
          error: true
        })
      })
  }
  InputHange = (e) => {
    this.setState({
      value: e.target.value,
      city: this.state.value
    })
  }
  render(){
    return(
      <div className="App">
        <Form 
        wynik={this.state.value} 
        metod={this.InputHange}
        submit={this.City}/>
        <Wynik pogoda={this.state}/>
      </div>
    )
  }
}

export default App;
