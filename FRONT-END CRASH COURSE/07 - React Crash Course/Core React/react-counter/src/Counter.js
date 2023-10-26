import React,{Component} from 'react';

class Counter extends Component{
    
    //state is a way to keep track of instance variables within your component
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <p>Current Count: {this.state.count} </p>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
}

export default Counter;