import React, { Component } from 'react';
import { Input, Button, TextField } from '@material-ui/core';

class Prime extends Component {
    constructor() {
        super();
        this.state = {
            inputNumber: 0,
            outputNumber: 0,
        }
    }

    calculateNthPrimeNumber = (num) => {
        var i = 1;
        var c = 0;
        var arr = [];
        while (c < num){
          i++;
          if (this.isPrime(i)){
            arr.push(i);
            c++;
          }
        }
        return arr[num-1];
      }

      isPrime = (num) => {        
        for (var i=2; i < num; i++){
          if (num % i === 0){
            return false;
          }
        }
        return true;
      }

    handleClick = () => {
        const outputNumber = this.calculateNthPrimeNumber(this.state.inputNumber);
        this.setState({ outputNumber });
    }

    handleChange = (event) => {
        this.setState({inputNumber: event.target.value})
    }

    render() {
        return (
            <div>
                <h3>Calculer le n-ième nombre premier</h3>
                <div>
                    <p>Tapez un nombre</p>
                    <Input
                        id='number'
                        type='number'
                        value={this.state.inputNumber}
                        onChange={this.handleChange}
                        />
                    <Button onClick={this.handleClick} >Calculer</Button>
                </div>
                <div>
                    <p>Le {this.state.inputNumber}ième nombre premier est</p>
                    <TextField readOnly disabled value={this.state.outputNumber}/>
                </div>
            </div>
        )
    }
}

export default Prime;