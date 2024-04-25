import React, { Component } from 'react';
// xử lý sự kiện với state, props
class EventForm3 extends Component {
    constructor(props){
        super(props);
        //tạo đối tượng thông qua state
        this.state = {
            name:'Cao Văn Bình',
            job: 'Student'

        }
    }
    // Hàm xử lý sự kiện
    handleChangeName = ()=>{
        this.setState({
            name:"K22cnt4-reactj"
        })
    }
    handleChangeJob=()=>{
        this.setState({
            job:"Công Nghệ"
        })
    }
    render() {
        return (
            <div className='alert alert-primary'>
                <h2>Thay đổi dữ liệu trong state</h2>
                <p>Dữ liệu:{this.state.name} - {this.state.job} </p>
                <button onClick={this.handleChangeName}>Thay đổi name</button>
                <button onClick={this.handleChangeJob}>Thay đổi job</button>
            </div>
        );
    }
}

export default EventForm3;