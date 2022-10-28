import React from 'react';
const Form = props => {
    return(
        <form onSubmit={props.submit}>
            <input type="text"
             value={props.wynik}
             placeholder="Podaj miasto"
             onChange={props.metod}
             />
            <button>Szukaj</button>
        </form>
    )
}
export default Form;