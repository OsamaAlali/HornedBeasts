
import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './Data.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './components/SelectedBeast';
import SelectHoner from './components/SelectHoner';

class App extends React.Component{
   constructor(props){
     super(props)
 this.state={
   show: false, 
   preprops: [],
 idHoner: null,
 selectHonerFlag: false
  }

  }
  changeClose=() =>{
    this.setState({
         show : false
     })
  } 
 changeStatus=(preprops) =>{
   this.setState({
        show : true ,
       preprops : preprops
    
      })
 } 
setIdhoner=(id)=>{
this.setState({
idHoner: id
})

}


displayImgByHoner =()=>{
 const honresArray=Data.filter((item)=>(item.horns === this.state.idHoner) );
  this.setState({
    selectHonerFlag: true,
    preprops: honresArray

  },)
}
  
  render(){
    return (
      <>
       <SelectedBeast 
       show={this.state.show} 
       pervprops={this.state.preprops}
       close={this.changeClose}
       /> 
      <Header   />
      <SelectHoner 
      setIdhoner={this.setIdhoner}
      displayImgByHoner={this.displayImgByHoner}
      />

    {  (this.state.selectHonerFlag)?  <Main fun={this.changeStatus} hornedbeast={this.state.preprops} />  :   <Main fun={this.changeStatus} hornedbeast={Data} />  }
       
         
       


      <Footer />
      </>
    )
  }


}// end Class APP

export default App;



