import React from 'react'

class Settings extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <form>
                    <label value='Difficulty'>Difficulty: </label>
                    <select 
                        name='difficulty-list' 
                        ref={node => this.selectionNode = node}
                        onChange={() => {
                            console.log(this.selectionNode);
                        }}>
                        <option value='beginner' >Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='advanced'>Advanced</option>
                    </select>
                </form>
            </div>
  )};
}

export default Settings;
