import React from 'react';

export default function EvenForm2() {

    // Định nghĩa các hàm xử lý sự kiện
   const eventHandleClick1 = (content)=>{
        console.log('===============================');
        console.log(content);
        console.log('===============================');
    }
    return (
        <div className= 'alert alert-success'>
            <h2>Event Demo - Function Component</h2>
            <button onClick={eventHandleClick1("Demo bài 2")}>Gọi Khi render</button>
            <button onClick={()=>eventHandleClick1("K22cnt4-reactj")}>Gọi Khi click </button>
        </div>
    )
}