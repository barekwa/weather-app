import React from 'react';
const Wynik = (props) => {
    const {error, value, miasto, wschod, zachod, temp, cisnienie, wiatr} = props.pogoda;
    let content=null;
    if(!error && miasto){
        const wsch = new Date(wschod*1000).toLocaleTimeString()
        const zach = new Date(zachod*1000).toLocaleTimeString()
        content = (
            <div>
                <p>Pogoda dla: {miasto}</p>
                <p>Temperatura: {Math.round(temp-273.15)}&#176;C</p>
                <p>Wschód słonca o: {wsch}</p>
                <p>Zachód słonca o: {zach}</p>
                <p>Ciśnienie: {cisnienie}hPa</p>
                <p>Predkosc wiatru: {wiatr}m/s</p>

            </div>
        )
    }
    return(
        <div className="result">
            {error ? `Nie ma w bazie ${miasto}`: content}
        </div>
      );
}
export default Wynik;