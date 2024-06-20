import React from 'react'

export default function CvbCategoryLish({renderCvbCategories, onAddNew, onCvbDelete,onCvbEdit}) {
    console.log("renderNvhCategories: ", renderCvbCategories );
    let cvbCategoryElement = renderCvbCategories.map((cvbCategory,Index)=>{
        return(
            <tr key= {Index}>
                <th>{Index+1}</th>
                <td>{cvbCategory.cvbId}</td>
                <td>{cvbCategory.cvbCateryName}</td>
                <td>{cvbCategory.cvbCategoryStatus===true?'Hiển thị':'Tạm khóa'}</td>
                <td>
                    <button className='btn btn-danger' 
                        onClick={()=>cvbHandleDelete(cvbCategory.cvbTd)}>
                        Delete
                    </button>
                    <button className='btn btn-danger' 
                         onClick={()=>cvbHandleEdit(cvbCategory.cvbTd)}>
                         Edit
                    </button>
                </td>
            
            </tr>
        )
    })

    const cvbHandleAdd = ()=> {
        onAddNew(true);
    }

    //Hàm sở lý sự kiện xóa
    const cvbHandleDelete = (cvbId)=>{
        if(window.confirm('Bạn có thật sự muốn xóa Category có mã ['+cvbId+']không?')){
            console.log("Delete:",cvbId);  
            onCvbDelete(cvbId)
        }else{

        }
    }
  //Xự kiện cho nút sửa
  const cvbHandleEdit = (cvbCategory)=>{
    onCvbEdit(cvbCategory);
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

