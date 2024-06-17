import React from 'react'

export default function CvbCategoryLish({renderCvbCategories,onAddNew }) {
    console.log("renderNvhCategories: ", renderCvbCategories );
    let cvbCategoryElement = renderCvbCategories.map((cvbCategory,Index)=>{
        return(
            <tr key= {Index}>
                <th>{Index+1}</th>
                <td>{cvbCategory.cvbId}</td>
                <td>{cvbCategory.cvbCateryName}</td>
                <td>{cvbCategory.cvbCategoryStatus===true?'Hiển thị':'Tạm khóa'}</td>
            
            </tr>
        )
    })

    const cvbHandleAdd = ()=> {
        onAddNew(true);
    }
  return (
    <div className='container m-2'>
        <h2>Danh sách loại sản phẩm</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã Loại</th>
                    <th>Tên Loại </th>
                    <th>Trạng thái </th>
                    <th>Chức Năng</th>
                </tr>
            </thead>
            <tbody>
            {cvbCategoryElement}
            </tbody>
        </table>
      <button className='btn btn-primary' onClick={cvbHandleAdd}>Thêm mới </button>
    </div>
  )
}

