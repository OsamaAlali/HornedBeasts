
import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Data from './Data.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component{
   constructor(props){
     super(props)
 this.state={
   show: false, 
   preprops:''
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

  
  render(){
    return (
      <>
       <SelectedBeast 
       show={this.state.show} 
       pervprops={this.state.preprops}
       close={this.changeClose}
       /> 
      <Header  />
       <Main fun={this.changeStatus} hornedbeast={Data} />   
      <Footer />
      </>
    )
  }


}// end Class APP

export default App;



