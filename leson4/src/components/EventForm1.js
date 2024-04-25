import React, { Component } from 'react';

class EventForm1 extends Component {
    //hàm xử lý  sự kiện
    eventHandleClick1 = () =>{
        alert("event handle 1");
    }
    eventHandleClick2 = () =>{
        alert("event handle 2")
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Event Handle</h2>
                {/* gọi hàm xử lý sự kiện khi render   */}
                {/* <button onClick={this.eventHandleClick1()}>Click 1</button>  */}
                {/* gọi hàm xử lý khi click    */}
                <button onClick={this.eventHandleClick2()}>Click 2</button>
            </div>
        );
    }
}

export default EventForm1;