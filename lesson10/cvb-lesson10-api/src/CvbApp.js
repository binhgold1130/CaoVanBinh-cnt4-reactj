import { useState, useEffect } from 'react'
import './App.css';

//import api
import axios from './api/cvbApi';
import CvbCategoryLish from './components/CvbCategoryLish';
import CvbCategoryForm from './components/CvbCategoryForm';



function CvbApp() {
  /// lấy dữu liệu từ api
  const [cvbCategories, setCvbCategories] = useState([]);

  const getCategories = async () => {
    try {
      const cvbCateResponse = await axios.get("cvbCategory");
      setCvbCategories(cvbCateResponse.data);
    } catch (error) {
      console.log("lỗi:", error);
    }
  }
    useEffect(() => {
      getCategories();
      console.log("cvbCategories:", cvbCategories);
    }, [])

    // trạng thái form
    const [cvbCategoryIsForm, setCvbCategoryIsform]= useState(false);
    const cvbHandleAddNew = (param )=>{
      setCvbCategoryIsform(param);
    }
    const cvbHandleCategoryCloseForm=(param)=>{
      setCvbCategoryIsform(param);
    }
    
    const cvbHandleCategorySubmit = (param) => {
      let lastId = parseInt(cvbCategories[cvbCategories.length - 1].cvbId, 10);
      console.log("Mã ", lastId);
      param.cvbId = lastId + 1;
      cvbCategories.push(param);
      setCvbCategories((prev) => [...prev]);
      setCvbCategoryIsform(false);
    };


    return (
      <div className="container border my-3">
        <h1>Cao Văn Bình - CAll Api</h1>
        <CvbCategoryLish renderCvbCategories={cvbCategories}
                        onAddNew={cvbHandleAddNew}/>
        <hr/>
        {
        cvbCategoryIsForm===true?<CvbCategoryForm 
                                                onCloseForm={cvbHandleCategoryCloseForm}
                                                onCategorySubmit={cvbHandleCategorySubmit}/>:""
        }
      </div>
    );
  }
   
export default CvbApp

