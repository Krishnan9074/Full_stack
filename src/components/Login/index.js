import React from 'react'
import { useState } from 'react'

export default function index() {
  const[email, setEmail] = useState('')
  const[password,setPassword] = useState('')

  async function submit (e) {
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/",{
        email,password
      });
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <>
    <h1 className="display-1 text-center m-4">Login</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate action='POST'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
