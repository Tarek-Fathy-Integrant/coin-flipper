import React, { Component } from 'react';
import './Coin.css'

class Coin extends Component {
    render() {
        return <div className='coin'>
            {
                this.props.Heads ?
                    <img src="../../public/heads.jpg" alt="Heads" />
                    : <img src="../../public/tails.jpg" alt="Tails" /> 
            }
        </div>
    }
}

export default Coin;