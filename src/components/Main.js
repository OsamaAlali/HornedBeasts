import React from 'react'
import HornedBeast from './HornedBeast'
// import dataarr from '../Data.json'

class Main extends React.Component{

  constructor(props){
  
    super(props);
  }
    render(){
     
    
        return(
        <main>

         {
         this.props.hornedbeast.map((item)=>{
          return(<HornedBeast 
            funMain={this.props.fun}
            updateData={this.props.updateData}
            title={item.title}
            descrption={item.description}
            img_url={item.image_url}
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