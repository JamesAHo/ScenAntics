import { useState } from 'react';
import { loginInputs } from "../constants/formInputs";
import Input from "./Input";

const inputs=loginInputs;
let inputState = {};
inputs.forEach(field=>inputState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(inputState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }


    return(
        <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

       

      </form>
    )
}