import {useState} from 'react'

const User = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [confirmpw, setConfirmpw] = useState('')
    
    const cambiarFname = (ev) => {
        setFname(ev.target.value)
    }
    const cambiarLname = (ev) => {
        setLname(ev.target.value)
    }
    const cambiarEmail = (ev) => {
        setEmail(ev.target.value)
    }
    const cambiarPw = (ev) => {
        setPw(ev.target.value)
    }
    const cambiarConfirmpw = (ev) => {
        setConfirmpw(ev.target.value)
    }
    return (
      <main className='container'>
        <form className="mt-5">

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="fname">First Name</span>
            </div>
            <input type="text" className="form-control" id="fname" onChange={cambiarFname}/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="lname">Last Name</span>
            </div>
            <input type="text" className="form-control" id="lname" onChange={cambiarLname}/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="email">Email Adress</span>
            </div>
            <input type="email" className="form-control" id="email" onChange={cambiarEmail}/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="pw">Password</span>
            </div>
            <input type="password" className="form-control" id="pw" onChange={cambiarPw}/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="confirmpw">Confirm password</span>
            </div>
            <input type="password" className="form-control" id="confirmpw" onChange={cambiarConfirmpw}/>
          </div>

          <div>
            <h4>Your Form Data</h4>
            <p>First Name: {fname}</p>
            <p>Last Name: {lname}</p>
            <p>Email: {email}</p>
            <p>Password: {pw}</p>
            <p>Confirm Password: {confirmpw}</p>
        </div>
        </form>
      </main>
    )
}

export default User;