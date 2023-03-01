import {useState} from 'react'

const User = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [confirmpw, setConfirmpw] = useState('')
    var mensaje1 = ''
    var mensaje2 = ''
    var mensaje3 = ''
    var mensaje4 = ''
    var mensaje5 = ''

    const message1 = () => {
      if (fname.length === 0) {
        return mensaje1
      }
      if (fname.length < 2 ) {
        mensaje1 = <small id="emailHelp" class="form-text text-muted">First Name must be at least 2 characters.</small>
        return mensaje1
      }
    }
    const message2 = () => {
      if (lname.length === 0) {
        return mensaje2
      }
      if (lname.length < 2 ) {
        mensaje2 = <small id="emailHelp" class="form-text text-muted">Last Name must be at least 2 characters.</small>
        return mensaje2
      }
    }
    const message3 = () => {
      if (email.length === 0) {
        return mensaje3
      }
      if (email.length < 2 ) {
        mensaje3 = <small id="emailHelp" class="form-text text-muted">Email must be at least 2 characters.</small>
        return mensaje3
      }
    }
    const message4 = () => {
      if (pw.length === 0) {
        return mensaje4
      }
      if (pw.length < 8 ) {
        mensaje4 = <small id="emailHelp" class="form-text text-muted">Password must be at least 8 characters.</small>
        return mensaje4
      }
    }

    const message5 = () => {
      if (pw !== confirmpw) {
        mensaje5 = <small id="emailHelp" class="form-text text-muted">Passwords must match.</small>
        return mensaje5
        }

    }

    const cambiarFname = (ev) => {
        setFname(ev.target.value);
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

          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="fname">First Name</span>
            </div>
            <input type="text" className="form-control" id="fname" onChange={cambiarFname}/>
          </div>
          {message1()}

          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="lname">Last Name</span>
            </div>
            <input type="text" className="form-control" id="lname" onChange={cambiarLname}/>
          </div>
          {message2()}

          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="email">Email Adress</span>
            </div>
            <input type="email" className="form-control" id="email" onChange={cambiarEmail}/>
          </div>
          {message3()}

          <div className="input-group mt-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="pw">Password</span>
            </div>
            <input type="password" className="form-control" id="pw" onChange={cambiarPw}/>
          </div>
          {message4()} <br/>

          {message5()}

          <div className="input-group mt-3">
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