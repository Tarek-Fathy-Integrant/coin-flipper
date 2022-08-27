import React, { Component } from 'react';

class Coin extends Component{
    render(){
        let coin = this.props.Heads? 
        <img src = "https://tinyurl.com/react-coin-heads-jpg" alt = "Heads"/>
        :<img src = "https://tinyurl.com/react-coin-tails-jpg" alt = "Tails"/> ;
        return <div>
            {coin}
            <button>Flip Coin!</button>
        </div>
    }
}

export default Coin;