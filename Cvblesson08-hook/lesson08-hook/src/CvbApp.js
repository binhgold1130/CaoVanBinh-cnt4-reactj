import './App.css';
import { React, useState } from 'react'
import NvhProductAddOrEdit from './components/CvbProductAddOrEdit';
import NvhListProduct from './components/cvbListProduct';





function CvbApp() {
   // mock data
  const Cvb_Products = [
    {
      Cvb_productId: "Cao Văn Bình"
      , Cvb_productName: "2210900091"
      , Cvb_quantity: 15
      , Cvb_price: 1000
    },
    {
      Cvb_productId: "P004"
      , Cvb_productName: "IPhone 12"
      , Cvb_quantity: 20
      , Cvb_price: 1250
    },
    {
      Cvb_productId: "P003"
      , Cvb_productName: "IPhone 13"
      , Cvb_quantity_quantity: 10
      , Cvb_price: 1500
    },
  ]

  // sử dụng hàm useState của hook
  const [CvbListProduct, SetCvbListProduct ] = useState(Cvb_Products)

  const cvbHandleSubmit= (CvbProduct)=>{
    console.log("AddOrEdit:",CvbProduct)
    /// thêm vào cvblistproduct
    setCCvbListProduct((CvbPrev) =>{
      return [
        ...CvbPrev,
        CvbProduct
      ]
    })
  }

  return (
    <div className="container border">
        <h1 className="text-center">Xử lý chức năng CRUD - Hook</h1>
        <hr/>
        <CvbListProduct renderCvbProducts ={cvbListProduct}/>
        <CvbProductAddOrEdit CvbOnSubmit={cvbHandleSubmit}/>
    </div>
  );
}

export default CvbApp;
