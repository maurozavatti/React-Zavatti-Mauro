import React, {useState} from 'react';
import Button from '../Button/Button';
import InputForm from './InputForm';
import "./form.css";

export default function BuyForm(props) {

const [userData, setUserData] = useState({
    name:"",
    phone:"",
    email:"",
    address:""
});

console.log(userData);

function onInputChange(evt){
    const inputName = evt.target.name;
    const value = evt.target.value;

    const newUserData = {...userData};
    newUserData[inputName] = value;
    setUserData(newUserData)
}

function onSubmit(evt){
    evt.preventDefault();
    props.onSubmit(userData);
}

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <InputForm required="true" title="Nombre" name="name" value={userData.name} onInputChange={onInputChange}></InputForm>
                <InputForm required="true" title="Telefono" name="phone" value={userData.phone} onInputChange={onInputChange}></InputForm>
                <InputForm required="true" title="Direccion" name="address" value={userData.address} onInputChange={onInputChange}></InputForm> 
                <InputForm required="true" title="Email" name="email" value={userData.email} onInputChange={onInputChange}></InputForm>
                <Button onClick={onSubmit}>Crear Orden</Button>
            </form>
        </div>
    );
}