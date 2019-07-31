/* eslint-disable no-useless-constructor */
import React from 'react';
import Board from './Board';
import Settings from '../Components/Settings'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            board: <Board width={9} height={9} mines={10} />,
        }
    }
    resetBoard(e) {
        console.log('inside resetBoard')
        e.preventDefault();
        let newBoard = <Board width={9} height={9} mines={10} />;

        if (e.target.value) e = e.target.value;
        switch(e) {
            case 'beginner':
                newBoard = <Board width={9} height={9} mines={10}/>
                break
            case 'intermediate':
                newBoard = <Board width={16} height={16} mines={40}/>
                break
            case 'advanced':
                newBoard = <Board width={16} height={30} mines={99}/>
                break
            default:
                break
        }

        this.setState({board: newBoard})
    }

    render() {
        return (
            <div>
                <Settings 
                    changeDifficulty={this.resetBoard}/>
                {this.state.board}
            </div>
        )
    }
}

export default Game;
