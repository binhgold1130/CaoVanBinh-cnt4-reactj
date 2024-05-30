import React from 'react'

export default function CvbProductAddOfEdit({CvbOnSubmit}) {
    const [Cvb_productId, setCvb_productId] = useState('')
    const [Cvb_productName, setCvb_productName] = useState('')
    const [Cvb_quantity, setCvb_quantity] = useState('')
    const [Cvb_price, setCvb_price] = useState('')

    const CvbHandleSummit = (CvbEvent )=>{
        CvbEvent.preventDefault();
        let CvbProduct = {
            Cvb_productId:Cvb_productId,
            Cvb_productName:Cvb_productName,
            Cvb_quantity:Cvb_quantity,
            Cvb_price:Cvb_price,

        }
        CvbOnSubmit(CvbProduct)
    }

  return (
    <div className='col-md-6'>
         <h2>Thêm mới sản phẩm / Sửa đổi</h2>
        <hr/>
        <form>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
                <input type="text" className="form-control" placeholder="Mã sản phẩm"
                name= 'Cvb_productId' value= {Cvb_productId}
                onChange={(ev) => setCvb_productId(ev.target.value)}
                aria-describedby="basic-addon1" />     
    </div>
    <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Tên sản phẩm</span>
                <input type="text" className="form-control" placeholder="Tên sản phẩm"
                name= 'Cvb_productName' value= {Cvb_productName}
                onChange={(ev) => setCvb_productName(ev.target.value)}
                    aria-describedby="basic-addon2" />
            </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Số lượng sản phẩm </span> 
                <input type="number" className="form-control" placeholder="Số lượng sản phẩm"
                name= 'Cvb_quantity' value= {Cvb_quantity}
                onChange={(ev) => setCvb_quantity(ev.target.value)}
                aria-describedby="basic-addon3" />
        </div>
            <div class="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">Số lượng sản phẩm </span> 
                <input type="number" className="form-control" placeholder="Đơn giá "
                name= 'Cvb_price' value= {Cvb_price}
                onChange={(ev) => setCvb_price(ev.target.value)}
                aria-describedby="basic-addon4" />
        </div>
        <button className ='btn btn-primary'name='CvbBtnAction'
        onClick={CvbHandleSummit}
        > 
            Thêm mới
        </button>
        </form>
        </div>
  )
}
