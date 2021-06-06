import React from 'react'


class HornedBeast extends React.Component{
 
    render()
    {
        return(
            <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.imgurl} alt={this.props.altimg}></img>
                <p>{this.props.descrption}</p>
            </div>
        )
    }


}
export default HornedBeast;