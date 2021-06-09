import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import Modal from 'react-bootstrap/Modal'
class HornedBeast extends React.Component{
 constructor(){
     super()
     this.state={
         vote: 0,
         
     }

 }
  incmVote=()=>{
      let newVal=this.state.vote;
     
      this.setState({
          vote: newVal +=1,
          
        })
       this.props.funMain(this.props)
       
    }
     

      
       
     

    render()
    {
        return(
           
       <div>

    

    {/* the Below Code is to render card */}
                  <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img_url} />
               <Card.Body>
                 <Card.Title>{this.props.title}</Card.Title>
                   <Card.Text>
                 {this.props.descrption}
                </Card.Text>
                <Card.Text>
                 Vote:{this.state.vote}
                </Card.Text>
                    <Button variant="primary" onClick={this.incmVote}>Show me</Button>
  </Card.Body>
</Card>



</div>
        )
    }


}
export default HornedBeast;