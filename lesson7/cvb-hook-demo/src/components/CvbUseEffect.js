import React, {useState, useEffect} from 'react'

export default function CvbUseEffect() {
     //state count
     const [count, setCount ]= useState(0);
     // hàm sử lý sự kiện
     const cvbHanldeClick = ()=>{
         setCount(prev => prev +1 );
     }
 
     // sử dung để cập nhập lại title
     useEffect(() => {
         document.title = `Cao Văn Bình:You clicked ${count} times`;
         console.log(`You clicked ${count} times`);
     });
     /// useeffect mảng rỗng
     useEffect(() => {
         console.log("chạy lần đầu tiên - một lần");
     },[])
     /// deps
     useEffect(()=>{
         console.log (`useEffect count click:`, count)
     },[count])

  return (
    <div>
      <h2> Demo - useEffect:You clicked {count} times </h2>
      <button onClick={cvbHanldeClick}>
            Click me
        </button>
    </div>
  )
}

