import React from 'react';

const Cell = props => {
    const {changeState, cellId, openState} = props;
    const state = {
        open: openState,
    }
    return (
        <button 
            className={state.open ? 'open' : 'close'}
            onClick={() => changeState(cellId)} />
    )
}

export default Cell;
