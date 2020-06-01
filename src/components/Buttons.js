import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
    render() {
        return (
            <div className='buttons-container'>
                <button id='clear' className="button" onClick={() => this.props.onButtonPressed('clear')}>AC</button>
                <button id='divide' className='button sign' onClick={() => this.props.onButtonPressed('/')}>/</button>
                <button id='multiply' className='button sign' onClick={() => this.props.onButtonPressed('*')}>*</button>

                <button id='seven' className='button numbers' onClick={() => this.props.onButtonPressed('7')}>7</button>
                <button id='eight' className='button numbers' onClick={() => this.props.onButtonPressed('8')}>8</button>
                <button id='nine' className='button numbers' onClick={() => this.props.onButtonPressed('9')}>9</button>
                <button id='subtract' className='button sign' onClick={() => this.props.onButtonPressed('-')}>-</button>

                <button id='four' className='button numbers' onClick={() => this.props.onButtonPressed('4')}>4</button>
                <button id='five' className='button numbers' onClick={() => this.props.onButtonPressed('5')}>5</button>
                <button id='six' className='button numbers' onClick={() => this.props.onButtonPressed('6')}>6</button>
                <button id='add' className='button sign' onClick={() => this.props.onButtonPressed('+')}>+</button>

                <button id='one' className='button numbers' onClick={() => this.props.onButtonPressed('1')}>1</button>
                <button id='two' className='button numbers' onClick={() => this.props.onButtonPressed('2')}>2</button>
                <button id='three' className='button numbers' onClick={() => this.props.onButtonPressed('3')}>3</button>

                <button id='equals' className='button' onClick={() => this.props.onButtonPressed('=')}>=</button>
                <button id='zero' className='button numbers' onClick={() => this.props.onButtonPressed('0')}>0</button>
                <button id='decimal' className='button numbers' onClick={() => this.props.onButtonPressed('.')}>.</button>
            </div>
        )
    }
}

export default Buttons