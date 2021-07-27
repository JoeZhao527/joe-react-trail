import React, {Component} from 'react'
import './Table.css'

const TableHead = () => {
    return (
        <thead>
            <tr className="row">
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

const TableData = (props) => {
    const dataInput = props.dataInput
    const removeUser = props.removeUser
    const rows = dataInput.map((row, idx) => {
        return (
            <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.email}</td>
                <td>
                    <button onClick={() => removeUser(idx)}>delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}
class Table extends Component {
    render(){
        const { userData, removeUser } = this.props
        return (
            <table>
                <TableHead />
                <TableData dataInput={userData} removeUser={removeUser}/>
            </table>
        )
    }
}

export default Table