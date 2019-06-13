import React from 'react';
import api from './helpers/api';

class Signup extends React.Component{
    state = {
        username: '',
        password: '',
        fullname: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const {fullname, username, password} = this.state
            const result = await api.post('auth/register', {
                fullname,
                username,
                password,
            })
            console.log(result);
        } catch(err){
            console.error(err)
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="fullname" onChange={this.handleChange} placeholder="Full Name" value={this.state.fullname} />
                    <input type="text" name="username" onChange={this.handleChange} placeholder="Username" value={this.state.username} />
                    <input type="password" name="password" onChange={this.handleChange} placeholder="Password" value={this.state.password} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Signup;