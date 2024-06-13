import React from 'react'

export default function CvbStudentList({renderCvbStudentList}) {
    console.log("Data:",renderCvbStudentList);
    let cvbElement =  renderCvbStudentList.map((cvbStudent, index)=>{
        return(
            <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{cvbStudent.cvbid}</td>
                    <td>{cvbStudent.cvbName}</td>
                    <td>{cvbStudent.cvbPhone}</td>
                    <td>{cvbStudent.cvbAge}</td>
                    <td>{cvbStudent.cvbGmail}</td>
                    <td>{cvbStudent.cvbStatus}</td>
                    <td>
                        Edit / Delete
                    </td>
                        
            </tr>
        )

    });
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                        <th scope="col">Mã Sinh Viên</th>
                        <th scope="col">Họ Tên </th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện Thoại</th>
                        <th scope="col">Gmail</th>
                        <th scope="col">Trạng Thái</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                {cvbElement}
                </tbody>
            </table>

        </div>
    )
}
