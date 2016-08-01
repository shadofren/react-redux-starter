import React, {Component} from 'react';
import {connect} from 'react-redux'

class UserDetails extends Component{

    render(){
        if (this.props.activeUser == null){
            return (
                <h3>Select a user...</h3>
            );
        }
        return (
            <div>
                <img src={this.props.activeUser.thumbnail}/>
                <h3>{this.props.activeUser.first} {this.props.activeUser.last}</h3>
                <h3>Age: {this.props.activeUser.age}</h3>
                <h3>{this.props.activeUser.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        activeUser: state.activeUser
    };
}


export default connect(mapStateToProps)(UserDetails);