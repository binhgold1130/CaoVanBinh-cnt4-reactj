import './App.css';
import { React, useState,useEffect } from 'react'
import axios from "axios";
import CvbStudentList from './componerts/CvbStudentList.Js';





function CvbApp() {
 
  // sử dụng hàm useState của hook
  const [cvbStudentList, setCvbStudentList]=useState([]);
  // get data from api 
  const cvbGetStudent  = async () => {
    try {
      const response = await axios.get("https://666a9fd07013419182d02175.mockapi.io/api/cvbc1/cvbStudent");
      setCvbStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    cvbGetStudent();
  }, []);
  return (
    <div className="container border mt-5 p-3">
        <h1 className="text-center my-3">Xử lý chức năng CRUD - Hook - API</h1>
        <hr/>
        <CvbStudentList renderCvbStudentList = {cvbStudentList}/>
    </div>
  );
}

export default CvbApp;
