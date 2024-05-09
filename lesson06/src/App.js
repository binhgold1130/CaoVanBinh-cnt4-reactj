import React, { Component } from 'react';
import CvbProductList from './component/CvbProductList.js';
import CvbProductAdd from './component/CvbProductAdd.js';
class componentName extends Component {
    constructor (props){
        super(props);
        this.state = {
          products : [
            { title: "Cao Văn Bình", id: 2210900095 , status:1 },
            { title: "Cabbage", id: 1 , status:1},
            { title: "Garlic", id: 2 , status:0},
            { title: "Apple", id: 3 , status:0},
            { title: "Mango", id: 4 , status:1},
          ]
        }
      }
      cvbHandleSubmit = (param)=> {
        console.log("App: ",param);
        // thêm vào product
        let {products} = this.state;
        products.push(param);
        this.setState({
          products:products
        })
      }
    
    

    render() {
        return (
            <div className='container border mt-5 '>
            <h1>Cao Văn Bình - Render Event Form</h1>
            <hr/>
            <CvbProductList renderProducts={this.state.products}/>
            <hr/>
            <CvbProductAdd onSubmit =  {this.cvbHandleSubmit} />

            </div> 
        );
    }
}

export default componentName;