import React, { Component } from 'react';
import Coin from './Coin'

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            face: true
        }
        this.flip = this.flip.bind(this);
    }
    flip() {
        let toss = Math.floor(Math.random() * 2);
        if (toss === 0) {
            this.setState((state) => {
                return {
                    flips: state.flips + 1,
                    heads: state.heads + 1,
                    tails: state.tails,
                    face: true
                }
            });
        } else {
            this.setState((state) => {
                return {
                    flips: state.flips + 1,
                    heads: state.heads,
                    tails: state.tails + 1,
                    face: false
                }
            });
        }

    }
    render() {
        const { flips, heads, tails, face } = this.state;
        return <div>
            <h1>Flip it</h1>
            <Coin Heads={face} />
            <button onClick={this.flip}>Flip Coin!</button>
            <p>Out of {flips} flips, there have been {heads} heads and {tails} tails</p>
        </div>
    }
}

export default Flipper;