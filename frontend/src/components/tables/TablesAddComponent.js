import React from 'react'

class TablesAddComponent extends React.Component {

    constructor(props) {
        super(props)

        this.onChangePlace = this.onChangePlace.bind(this)
        this.onChangeSize = this.onChangeSize.bind(this)
        this.onSubmit = this.onSubmit.bind(this)       
        
        this.state = {
            place:'',
            size: 0,
        }
    }

    onChangePlace(e) {
        this.setState({
            place: e.target.value
        })
    }

    onChangeSize(e) {
        this.setState({
            size: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const table = {
            place: this.state.place,
            size: this.state.size
        }

        console.log(table)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(table)
        }

        console.log('requestOptions.body')
        console.log(requestOptions.body)

        fetch('http://localhost:3001/tables', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

    }

    render() {
        return (
            <div>
                <h2>Add new table</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Place</label>
                        <input type='text' required
                            className='form-control'
                            value={this.state.place}
                            onChange={this.onChangePlace} />
                    </div>
                    <div className='form-group'>
                        <label>Size</label>
                        <input type='number' required
                            className='form-control'
                            value={this.state.size}
                            onChange={this.onChangeSize} />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Table' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}

export default TablesAddComponent