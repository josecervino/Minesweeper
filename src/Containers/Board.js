import React from 'react';
import Cell from '../Components/Cell';
import {objectOfNRandomNumsUpToMax, arrayOfAdjacentCells} from '../utils.js';

/**
 * @component Board
 * @description Constructs Board according to props passed from parent component. Determines Cell properties & handles cell state changes.
 * 
 * @prop height [number]    Row count of board grid
 * @prop width [number]     Column count of board grid
 * @prop mines [number]     Count of mines to place on board
 * 
 * @requiredChildrenComponents Cell
 */
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static getDerivedStateFromProps(props, state) {
        // Construct board according to props parameters
        if (props.resetState || !state.cells) {
            const   {width} = props,
                    {height} = props,
                    {mines} = props,
                    maxCellCount = height * width,
                    cellsProperties = {},
                    mineLocations = objectOfNRandomNumsUpToMax(
                                        maxCellCount,
                                        mines);
    
            for (let i = 0; i < maxCellCount; i += 1) {
                cellsProperties[i] = {
                    id: i,
                    mine: (mineLocations[i] ? true : false),
                    open: false,
                }
            };

            // assign adjacent mine count property after mine locations are known
            for (let i = 0; i < maxCellCount; i += 1) {
                cellsProperties[i].adjacentMineCount = arrayOfAdjacentCells(i, width, height)
                                                            .reduce((acc, cv) => {
                                                                if (cv === null) return acc;

                                                                if (cellsProperties[cv].mine) {
                                                                    acc += 1;
                                                                }
                                                                return acc;
                                                            }, 0)
            }

            props.toggleResetBoard(); //! Not great, should be triggered automatically

            return {cells: cellsProperties}
        }
        else return state;
    }

    changeCellOpenState = (id) => {
        if (this.state.cells[id].mine) this.props.isGameOver();
        else {
            this.props.incrementTurnCount();
            this.setState((prevState, props) => {
                if (prevState.cells[id].adjacentMineCount > 0 ) {
                    return {
                        ...prevState,
                        cells: {
                            ...prevState.cells,
                            [id]: {
                                ...prevState.cells[id],
                                open: true,
                            },
                        }
                    }
                }
                else {
                    const updatedCells = arrayOfAdjacentCells(id, props.width, props.height)
                                            .reduce((acc, cv) => {
                                                if (cv === null) return acc;
                                                else if (prevState.cells[cv].mine > 0) return acc;
                                                acc[cv] = {
                                                    ...prevState.cells[cv],
                                                    open: true,
                                                }
                                                return acc;
                                            }, {})

                    return {
                        ...prevState,
                        cells: {
                            ...prevState.cells,
                            ...updatedCells,
                            [id]: {
                                ...prevState.cells[id],
                                open: true,
                            },
                        }
                    }
                }

            })
        }
    }


    render() {
        return (
            <div className={this.props.style} >
                {Object.entries(this.state.cells).map((cv, i) => {
                    return (<Cell
                                adjacentMineCount={cv[1].adjacentMineCount}
                                cellId={cv[1].id}
                                changeCellOpenState={this.changeCellOpenState}
                                key={`${this.props.difficulty}${i}`}
                                mineState={cv[1].mine}
                                openState={cv[1].open}
                            />)
                    })
                }
            </div>
        )
    }
}

export default Board;
