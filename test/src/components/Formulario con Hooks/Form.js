import User from '//User.js';

function Form() {
    return (  
        <div>
            <h4>Your Form Data</h4>
            <p>First Name: {User.fname}</p>
            <p>Last Name: {User.lname}</p>
            <p>Email: {User.email}</p>
            <p>Password: {User.pw}</p>
            <p>Confirm Password: {User.confirmpw}</p>
        </div>
    );
}

export default Form;