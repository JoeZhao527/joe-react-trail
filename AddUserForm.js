import React, {Component} from 'react'

class AddUserForm extends Component {
    initialState = {
        name: '',
        age: '',
        email: ''
    }
    state = this.initialState

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render() {
        const { name, age, email } = this.state
        return (
            <form>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="age">Age: </label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={age}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                />
                <input type="button" value="submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default AddUserForm