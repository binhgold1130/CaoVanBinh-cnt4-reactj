
import './App.css';
import CvbListUsers from './components/CvbListUsers';
import axios from './api/cvbApi'
import { useEffect, useState } from 'react';
function CvbApp() {
  const [cvbListUsers,setCvbListUsers] = useState([]);

  // đọc dữ liệu từ api
  const cvbGetAllUsers = async  ()=>{
    const cvbResponse = await axios.get("cvbUsers");
    console.log("Api Data:",cvbResponse.data);
    setCvbListUsers(cvbResponse.data)
  }
 
  useEffect(()=>{
    cvbGetAllUsers();
  },[])
  return (
    <div className="container border my-3">
         <h1>Làm việc với Mock Api</h1>
         <hr/>
         <CvbListUsers renderCvbListUsers={cvbListUsers}/>
    </div>
  );
}

export default CvbApp;
