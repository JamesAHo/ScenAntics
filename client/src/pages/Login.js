import { useState } from 'react';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import { LOGIN_QUERY } from '../utils/mutations'; 
import Auth from '../utils/Authentication';
const style ="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"

export default function Login(){
    const [formState, setFormState] = useState({email: "", password: ""});
    const [login, {error, data}] = useMutation(LOGIN_QUERY);

    // handleChange based on user input
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value,});
    }
    // Submiting form
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const {data} = await login({
                variables: { ...formState},
            })
            Auth.login(data.login.token)
        } catch (error) {
            console.log(error)
        }
        setFormState({email:"", password:"",})

    }   

    return(
        <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Welcome to ScenAntics!!
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
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
                  className="btn btn-block btn-info"
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
    )
}