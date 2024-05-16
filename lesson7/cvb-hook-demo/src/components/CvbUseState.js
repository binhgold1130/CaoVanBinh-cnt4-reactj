import React , { useState } from 'react'

export default function CvbUseState() {
     // Declare a new state variable, which we'll call "count"
     const [count, setCount] = useState(10);
     // mảng 
     const [list, setList] = useState([12]);
     /// hàm thêm ngẫu nhiên
     const cvbHandleList = () => {
         //sinh ngẫu nhiên 1 giá trị số 
         let num = parseInt(Math.random() * 100);
         // cập nhập lại
         setList([
             ...list,
             num
         ]);
         //cách khác
         //let lst = list.push(num)
         //setList(list);
     };
     return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 5)}>
                Click me
            </button>
            <hr />
            <h3>
                List: {list.toString()}</h3>
            <button onClick={cvbHandleList}>Thêm Ngẫu Nhiên</button>
        </div>
    );
}