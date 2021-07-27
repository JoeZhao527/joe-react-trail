import React, {Component} from 'react'
import Table from './Table.js'
import AddUserForm from './AddUserForm.js'
import './index.css'

class App extends Component {
    state = {
        users: [
            {
                name: 'Joe',
                age: 21,
                email: '1016859319@qq.com'
            },
            {
                name: 'Zhao',
                age: 22,
                email: '1016859319@qq.com'
            }
        ]
    }
    
    removeUser = (idx) => {
        const { users } = this.state
        this.setState({
            users: users.filter((user, i) => {
                return i !== idx
            })
        })
    }

    handleSubmit = (user) => {
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render() {
        return (
            <div className="container">
                <Table userData={this.state.users} removeUser={this.removeUser} />
                <AddUserForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App