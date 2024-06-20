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
    // Dữ liệu from: add / edit
    let cvbCategoryInit={
      cvbId:0,
      cvbCateryName:"",
      cvbCategoryStatus:true,
    }
    const [cvbCategoryEdit, setCvbCategoryEdit]= useState(cvbCategoryInit);
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

    //Hàm sử lý sự kiện một đối tượng category
    const cvbHandleDelete = (cvbId)=>{
      console.log("App-Delete-cvbId:",cvbId);
      //Xóa trên api
      //const cvbResponse =  axios.delete(`https://66705cb30900b5f8724a5e77.mockapi.io/cvbApi/cvbv1/cvbCategory/${cvbId}`);
      const cvbResponse =  axios.delete(`cvbCategory/${cvbId}`);
      console.log("cvbResponse-Delete",cvbResponse);
      let cvbDelete = cvbCategories.filter(x=>x.cvbId !== cvbId);
      setCvbCategories(cvbDelete);
      console.log("Delete:",cvbDelete);
    }

    //Sửa category
    const cvbHandeEdit = (cvbCategory)=>{
      setCvbCategoryEdit(cvbCategory)
      setCvbCategoryIsform(true);
    }

    return (
      <div className="container border my-3">
        <h1>Cao Văn Bình - CAll Api</h1>
        <CvbCategoryLish renderCvbCategories={cvbCategories}
                        onAddNew={cvbHandleAddNew}
                        onCvbDelete={cvbHandleDelete}
                        onCvbEdit={cvbHandeEdit}/>
        <hr/>
        {
        cvbCategoryIsForm===true?<CvbCategoryForm 
                                  renderCvbCategory = {cvbCategoryEdit}
                                  onCloseForm={cvbHandleCategoryCloseForm}
                                  onCategorySubmit={cvbHandleCategorySubmit}/>:""
        }
      </div>
    );
  }
   
export default CvbApp

