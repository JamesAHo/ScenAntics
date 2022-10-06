import { useState } from 'react';
import { signupInputs } from "../constants/formInputs"
import ActionForm from "../components/ActionForm";
import Input from "../components/Input";

const inputs=signupInputs;
let inputsState={};

inputs.forEach(field => inputsState[field.id]='');

export default function Signup(){
  const [signupInputs,setSignupState]=useState(inputsState);

  const handleChange=(e)=>setSignupState({...signupInputs,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupInputs)
    createAccount()
  }

  const createAccount=()=>{

  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                inputs.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupInputs[field.id]}
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
          <ActionForm handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}