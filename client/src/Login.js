import React from 'react';
import api from './helpers/api'
import {withRouter} from 'react-router-dom';

class Login extends React.Component{
    state = {
        username: '',
        password: '',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        try{
            const {username, password} = this.state
            const result = await api.post('/auth/login', {
                username,
                password,
            })
            localStorage.setItem('token', result.data.token)
            this.props.history.push('/users')
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
                    <input type="text" name="username" onChange={this.handleChange} placeholder="Username" value={this.state.username} />
                    <input type="password" name="password" onChange={this.handleChange} placeholder="Password" value={this.state.password} />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);