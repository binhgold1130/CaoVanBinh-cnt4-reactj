import React, { Component } from 'react';
import cvb_Product from './component/cvb_Product.js';
class App  extends Component {
  
    constructor(props) {
        super(props);
        this.state={
            products : [
                {
                    cvb_Productld:"msv",
                    cvb_ProductName:"họ và tên sinh viên",
                    cvb_quantity:15,
                    cvb_price:1000,
                },
                {
                    cvb_Productld:"P202",
                    cvb_ProductName:"IPhone 12",
                    cvb_quantity:20,
                    cvb_price:1250,
                },
                {
                    cvb_Productld:"P003",
                    cvb_ProductName:"IPhone 13",
                    cvb_quantity:10,
                    cvb_price:1500,
                },
            ]
        }     
    }
    render() {
     return (
        <div>
         <h1>Cao Văn Bình</h1>
         <hr/>
         <cvb_Products/>   
        </div>
     ):   
    }
}

export default App;