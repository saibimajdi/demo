import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class TablesComponent extends React.Component {

    state = {
        tables: [],
        errors: []
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/tables')
        .then(res => res.json())
        .then(results => {
            this.setState({
                tables: results
            })
            console.log(results)
        }, error => {
            alert(JSON.stringify(error))
        })
    }

    render(){
        return(
            <div className='row'>
                <h3 className='float-left'>Available tables</h3>
                <Link to='/tables/add' className="btn btn-primary float-right" >Add new table</Link>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Number</th>
                            <th scope="col">Place</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.tables.length === 0 && <tr><span>No available tables.</span></tr>}
                        { this.state.tables.map(table => 
                            <tr key={table._id}>
                                <th>{table._id}</th>
                                <td>{table.number}</td>
                                <td>{table.place}</td>
                                <td>{table.size}</td>
                            </tr>) }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablesComponent