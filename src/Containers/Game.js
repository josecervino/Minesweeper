import React from 'react';
import Board from './Board';
import Settings from '../Components/Settings'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            turns: 0,
            difficulty: 'beginner',
            reset: false,
        }
    }
    changeBoardDifficulty = (difficulty) => {
        if (difficulty.target.value) difficulty = difficulty.target.value;
        this.setState((prevState, props) => ({...prevState, difficulty: `${difficulty}`}))
        this.resetBoard();
    }
    incrementTurnCount = () => {
        this.setState((prevState, props) => ({
            ...prevState,
            turns: prevState.turns += 1,
        }))
    }
    incrementTimeCount = () => {
        this.setState((prevState, props) => ({
            ...prevState,
            time: prevState.time += 1,
        }))
    }
    toggleResetBoard = () => {
        this.setState((prevState, props) => ({...prevState, reset: !prevState.reset}));
    }
    resetBoard = () => { //Thought it necessary to provide fail-safe reset option
        this.setState((prevState, props) => ({
            ...prevState,
            reset: true,
            time: 0,
            turns: 0,
        }));
    }
    isGameOver = (win = false) => {
        win ? alert('You win!') : alert('Game Over! Don\'t quit yet!');
        this.resetBoard();
    }

    componentDidMount() {
        const interValId = setInterval(this.incrementTimeCount, 1000);
        this.setState((prevState, props) => ({...prevState, intervalId: interValId}));
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    render() {
        let width, height, mines, style;
        switch (this.state.difficulty) {
            case 'beginner':
                width = 9;
                height = 9;
                mines = 10;
                style = 'beginner-container';
                break;
            case 'intermediate':
                width = 16;
                height = 16;
                mines = 40;
                style = 'non-beginner-container';
                break;
            case 'advanced':
                width = 16;
                height = 30;
                mines = 99;
                style = 'non-beginner-container';
                break;
            default:
                width = 9;
                height = 9;
                mines = 10;
                style = 'beginner-container';
                break;
        }

        return (
            <div className='game-container'>
                <Settings 
                    changeDifficulty={this.changeBoardDifficulty}
                    className='settings-bar'
                    time={this.state.time}
                    turns={this.state.turns} />
                <Board 
                    difficulty={this.state.difficulty}
                    isGameOver={this.isGameOver}
                    height={height}
                    incrementTurnCount={this.incrementTurnCount}
                    mines={mines}
                    resetState={this.state.reset}
                    resetBoard={this.resetBoard}
                    style={style}
                    toggleResetBoard={this.toggleResetBoard}
                    width={width} />
            </div>
        )
    }
}

export default Game;
