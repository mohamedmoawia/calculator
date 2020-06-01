import React from 'react';
import './App.css';
import Buttons from './Buttons';
class App extends React.Component {
    state = {
        number: '0',
        signFlag: false,
        decimalFlag: false,
        minusFlag: false   // solve the problem of usecase  13 the minus issue 
    }

    onButtonPressed = (button) => {
        var number = this.state.number
        switch (true) {
            case button === '0' ||
                button === '1' ||
                button === '2' ||
                button === '3' ||
                button === '4' ||
                button === '5' ||
                button === '6' ||
                button === '7' ||
                button === '8' ||
                button === '9':
                                            
                if (this.state.number !== '0') {
                    number += button

                }
                else { number = button }

                this.setState({ number, signFlag: false })

                break;

            case button === '*' ||
                button === '/' ||
                button === '-' ||
                button === '+':
                
                if (!this.state.signFlag) // indicate if i pressed a sign before  
                {
                    number += button
                    this.setState({ signFlag: true, decimalFlag: false })
                } 
                else {

                    if (button !== '-') { // make sure to wrtie negative numbers
                        if (this.state.minusFlag) { // if the user enter two opertor after each other using - it will excute just the last one
                            let newNumber = number.slice(0, number.length - 2)
                            newNumber += button
                            number = newNumber
                        } else {
                            let newNumber = number.slice(0, number.length - 1)
                            newNumber += button
                            number = newNumber
                        }
                    }
                    else {
                        if (!this.state.minusFlag) {
                            number += button
                            this.setState({ minusFlag: true })
                        
                        }

                    }

                }
                this.setState({ number })
                break;
            case button === '.':
                if (!this.state.decimalFlag) {
                    number += button
                    this.setState({ number, decimalFlag: true })
                }
                break;
            case button === '=':
                number = eval(number)
                this.setState({ number })
                break;
            case button === 'clear':
                number = '0'
                this.setState({ number, signFlag: false, decimalFlag: false, minusFlag: false })
                break;
            default: break;
        }
    }
    render() {
        return (
            <div id='body'>
                <div className='container'>
                    <div id='display'>
                        {this.state.number}
                    </div>
                    <Buttons onButtonPressed={this.onButtonPressed} />

                </div>
            </div>
        )
    }
}
export default App