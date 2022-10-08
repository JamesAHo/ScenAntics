import { useState } from 'react';
import {Link} from 'react-router-dom'
import { useMutation } from '@apollo/client';
import {SIGN_UP} from '../utils/mutations'
import Auth from '../utils/Authentication'
const style ="flex items-center justify-center rounded-md appearance-none relative block w-80 mt-3  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"



export default function Signup(){
    const [formState, setFormState] = useState({
      name: "",
      email: "",
      password:"",
    });
    
    const [createUser, {error, data}] = useMutation(SIGN_UP);
    
    // update value to database
    const handleChange = (event) => {
      const {name, value} = event.target;
      setFormState({
        ...formState, [name]: value,
      })
    }
    // handleSubmit function
    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const {data} = await createUser({
          variables: {...formState },
        });
        Auth.login(data.createUser.token)
      } catch (error) {
        console.log(error)
      }
    }
    

    return(
     
      <main className="flex-row justify-center mb-4">
      <div className="flex-row justify-center mb-4">
        <div className="flex items-center justify-center">
          
          <div className="flex items-center justify-center">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <h4 className=" text-left">Sign Up</h4>
                <input
                  className={style}
                  placeholder="Your username"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input 
                  className={style}
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className={style}
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};


         

      
