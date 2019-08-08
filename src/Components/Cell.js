import React from 'react';
// TODO: toggle the button text depending on openState
const Cell = props => {
    return <button 
                className={props.openState ? 'open' : 'closed'}
                onClick={() => {
                    if (!props.openState) props.changeCellOpenState(props.cellId)
                }}
            >{props.openState && props.adjacentMineCount !== 0 ? `${props.adjacentMineCount}` : ''}</button>
}

export default Cell;
