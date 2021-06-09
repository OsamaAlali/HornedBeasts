import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export class SelectHoner extends Component {
    
    
    
    getHonrsNum=(e)=>{
e.preventDefault();
let id= parseInt(e.target.value)
console.log(e.target.value);  
console.log("getHonrsNum");  
 this.props.setIdhoner(id)
 
    }
    
    displayImag=(e)=>{
      console.log("displauIMag");
        e.preventDefault();
       this.props.displayImgByHoner()
    }
     
    
    render() {
        return (
            <>
                
   <Form onSubmit={(e)=>this.displayImag(e)}>

  <Form.Group  controlId="select">
    
  <select  onChange={(e)=>{this.getHonrsNum(e)}} aria-label="Floating label select example">
    <option> select Horns</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="100">one hander</option>
  </select>


  </Form.Group>

  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

            </>
        )
    }
}

export default SelectHoner
