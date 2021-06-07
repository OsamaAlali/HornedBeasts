import React from 'react'


class HornedBeast extends React.Component{
 constructor(){
     super()
     this.state={
         vote: 0
     }

 }
  incmVote=()=>{
      let newVal=this.state.vote;
      this.setState({
          vote: newVal +=1
        })
  }
    render()
    {
        return(
            <div>
                <h3>{this.props.tilte}</h3>
                <img src={this.props.imgurl} alt={this.props.altimg} onClick={this.incmVote}></img>
                <p>{this.props.descrption}</p>
                <p>Vote: {this.state.vote}</p>
            </div>
        )
    }


}
export default HornedBeast;