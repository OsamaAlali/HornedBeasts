import React from 'react'
import HornedBeast from './HornedBeast'
import dataarr from '../Data.json'

class Main extends React.Component{

  constructor(props){
  
    super(props);
  }
    render(){
     
    
        return(
        <main>

         {
         dataarr.map((item)=>{
          return(<HornedBeast 
            funMain={this.props.fun}
            updateData={this.props.updateData}
            title={item.title}
            descrption={item.description}
            imgurl={item.image_url}
           altimg={item.altimg}
            />

          )
          })
         
    }

          
        </main>

        )

    }

}
export default Main;