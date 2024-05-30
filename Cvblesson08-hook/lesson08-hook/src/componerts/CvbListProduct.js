import React from 'react'

export default function CvbListProduct({renderCvbProducts}) {
    console.lop("List Product:",renderCvbProducts);
    let CvbTong=0;

    let CvbElementProduct  =renderCvbProducts.map((CvbProduct,index)=>{
        CvbTong += CvbProduct.Cvb_quantity*CvbProduct.Cvb_price; 
        return(
            <>
            <tr key={index}>
                <tb>{index+1}</tb>
                <tb>{CvbProduct.Cvb_productId}</tb>
                <tb>{CvbProduct.Cvb_productName}</tb>
                <tb>{CvbProduct.Cvb_quantity}</tb>
                <tb>{CvbProduct.Cvb_quantity*CvbProduct.Cvb_price}</tb>
                <tb>
                <button className= 'btn btn-success mx-1 '>
                  <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button className= 'btn btn-danger mx-1 '>
                  <i class="fa-solid fa-trash"></i>
                  </button>
                    
                </tb>

            </tr>
            </>
        )
    })
  return (
    <div>
      <h2> Danh sách sản Phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sản Phẩm</th>
                        <th> Tên sản Phẩm</th>
                        <th>số Lượng</th>
                        <th>Đơn Giá </th>
                        <th>Thành tiền</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {CvbElementProduct}
                </tbody>
                <tfoot>
                <tr>
            <th colspan={5} className= 'text-end '> Tổng cộng </th>
            <th colspan={2} className= 'text-start '>   
              {CvbTong}
              </th>
             </tr>
        </tfoot>

            </table>
    </div>
  )
}
