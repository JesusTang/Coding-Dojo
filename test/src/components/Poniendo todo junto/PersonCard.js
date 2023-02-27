import { Component } from 'react';
                
                
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    addYears = () => {
        const number = this.state.age;
            this.setState({ age : (number+1) });
    }
    
    render() {
    const { firstName, lastName, hairColor } = this.props;
    const { age } = this.state
        return (
                
        <div>
            <h1>
            {lastName}, {firstName}   
            </h1>
            <p>age: {age}</p>
            <p>Hair Color: {hairColor}</p>
                <button onClick={ this.addYears }>Birthday Button for {firstName} {lastName}</button>
        </div>
                
        );
    }
}

export default PersonCard;
