import React, { Component } from 'react';

class EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Bình"
        }
    }
    handleGetName = ()=>{
        alert(this.props.name);
        this.setState({
            name:this.props.name
        })
    }

    render() {
        return (
            <div>
                <h2>Lấy dữ liệu từ props</h2>
                <button onClick={this.handleGetName}>Lấy tên</button>
                <h2>Welcome to , {this.state.name}</h2>
            </div>
        );
    }
}

export default EventForm4;