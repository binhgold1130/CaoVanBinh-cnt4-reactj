import React from 'react'

export default function CvbListUsers({ renderCvbListUsers }) {
    console.log("CvbListUsers:", renderCvbListUsers);
    //  hiển thị dữ liệu
    let cvbElementUser = renderCvbListUsers.map((cvbUser, index) => {
        return (
            <>
                <tr>
                    <th>{cvbUser.id}</th>
                    <th>{cvbUser.UserName}</th>
                    <th>{cvbUser.Password}</th>
                    <th>{cvbUser.Email}</th>
                    <th>{cvbUser.Phone}</th>
                    <th>...</th>
                </tr>
            </>
        )
    })
 
    return (
        < div className='row' >
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cvbElementUser}
                    </tbody>
                </table>
            </div>
        </div >
    )
}