import React from 'react';
import withAuth from './helpers/auth'
import api from './helpers/api'

class Users extends React.Component{
    state = {
        users: []
    }
    async componentDidMount(){
        try{
            const result = await api.get('/users');
            this.setState({
                users: result.data
            })
        } catch (err){
            // if (err.response.status === 401 || 403){
            //     this.props.history.push('/login')
            // } else {
            console.error(err)
            // }
        }
    }

    render(){
        return(
            <div>
                <h3>Users</h3>
                <ul>
                    {this.state.users.map((user, i) => {
                        return <li key={i}>{user.username}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default withAuth(Users);