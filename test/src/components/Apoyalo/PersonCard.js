import { Component } from 'react';

class PersonCard extends Component {
    state = {  } 
    render() { 
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>
                {lastName}, {firstName}   
                </h1>
                <p>age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;
	