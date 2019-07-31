import React from 'react';
import Cell from '../Components/Cell';

class Board extends React.Component {
    constructor(props) {
        super(props);

        // Create board & assign mines
        let allCells = [];
        let mineLocations = (() => {
            let max = this.props.width * this.props.height;
            let locations = {};
            for (let i = 0; i < this.props.mines; i += 1) {
                let temp = Math.floor((Math.random() * max) + 1);
                locations[temp] = true;
            }

            return locations;
        })()
        for (let i = 0; i < props.width; i += 1) {
            let row =[];
            for (let j = 0; j < props.height; j += 1) {
                row.push(<Cell 
                    key={`${i}-${j}`}
                    cellId={`${i}-${j}`}
                    openState={false}
                    mineState={mineLocations[i*j] ? true : false} 
                    changeState={this.changeCellState}/>)
            }
            allCells.push(row);
        }

        this.changeCellState = this.changeCellState.bind(this);
        this.state = {
            cells: allCells, //Storing in array or arrays is questionable
            width: this.props.width,
            height: this.props.height,
        };
    }
    changeCellState = (cellId) => {
        console.log(cellId);

        for (let i = 0; i < this.state.width; i += 1) {
            for (let j = 0; j < this.state.height; j += 1) {
                let currentCell = this.state.cells[i][j];
                console.log(currentCell);
                if (currentCell.mine) this.gameOver();
            }
        }
    }
    gameOver = () => {
        console.log('game over triggered');
    }

    render() {
        const {cells} = this.state
        return (
            <div>
                <h5>Minesweeper</h5>
                <div className='cells-container'>
                    {cells}
                </div>
            </div>
        )
    }
}

export default Board;
