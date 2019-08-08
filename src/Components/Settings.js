import React from 'react'

const Settings = props => {
    const {turns, time, changeDifficulty} = props;
    return (
        <div className='settings-bar'>
            <h5 className='turns'>Turns: {turns}</h5>
            <form className='difficulty'>
                <select name='difficulty-list' onChange={(e) => changeDifficulty(e)}>
                    <option value='beginner'>Beginner</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='advanced'>Advanced</option>
                </select>
            </form>
            <h5 className="time">Time: {time}</h5>
        </div>
  );
}

export default Settings;
