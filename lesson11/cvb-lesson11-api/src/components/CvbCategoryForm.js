import React,{useState,useEffect} from 'react'
import axios from '../api/cvbApi';

export default function CvbCategoryForm({onCloseForm, onCategorySubmit, renderCvbCategory}) {
   
     /// State
  const [cvbId,setCvbId ]=useState("")
  const [cvbCateryName,setCvbCateryName]= useState("");
  const [cvbCategoryStatus,setCvbCategoryStatus]= useState(true);

  useEffect(()=>{
      setCvbId(renderCvbCategory.cvbId)
      setCvbCateryName(renderCvbCategory.cvbCateryName)
      setCvbCategoryStatus(renderCvbCategory.cvbCategoryStatus)
})
  const cvbHandleClose = ()=>{
    onCloseForm(false);
  }
  const cvbHandleSubmit = async (event )=>{
    event.preventDefault();

    if(cvbId == 0){ // thêm
      let cvbCategory={
        cvbId:0,
        cvbCateryName:cvbCateryName,
        cvbCategoryStatus:cvbCategoryStatus,
      }
      console.log("cvbCategory",cvbCategory)
      await axios.post("cvbCategory",cvbCategory);
      onCategorySubmit(cvbCategory);
    }else{ // sửa
      let cvbCategory={
        cvbId:cvbId,
        cvbCateryName:cvbCateryName,
        cvbCategoryStatus:cvbCategoryStatus,
      }
      console.log("cvbCategory",cvbCategory)
      await axios.put("cvbCategory",cvbCategory);
      onCategorySubmit(cvbCategory);
    }   
    
  }
  return (
    <div>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Category Name </span>
          <input type="text" className="form-control"
            name="cvbCateryName"
            value={cvbCateryName}
            onChange={(ev)=>setCvbCateryName(ev.target.value)}
            placeholder="Category Name" aria-label="Category Name"
              aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">Category Status </span>
          <select className="form-control"
            name="cvbCategoryStatus"
            value={cvbCategoryStatus}>
            onChange={(ev)=>setCvbCategoryStatus(ev.target.value)}
            <option value={true}>Hiển thị</option>
            <option value={false}>Tạm khóa</option>
            </select>        
        </div>
        <button className='btn btn-success' onClick={cvbHandleSubmit}>Ghi lại</button>
        <button className='btn btn-danger' onClick={cvbHandleClose}>Đóng</button>
      </form>

    </div>
  )
}