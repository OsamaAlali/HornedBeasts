
import './App.css';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import dataSelect from './Data.json'

import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component{
   constructor(){
     super()
 this.state={
   show: false,
   title:'sssssssssss',
   img:null,
   descrption: null 
 }

  }
  changeClose=() =>{
    this.setState({
         show : false
     })
  } 
 changeStatus=(title,image,desimg) =>{
   this.setState({
        show : true,
        title: title ,
        img: image,
        descrption: desimg
    
      })
 } 

  
  render(){
    return (
      <>
       <SelectedBeast 
       show={this.state.show} 
       img={this.state.img}
       title={this.state.title}
       descrption={this.state.descrption}
       close={this.changeClose}
       /> 
      <Header  />
       <Main fun={this.changeStatus}  />   
      <Footer />
      </>
    )
  }


}// end Class APP

export default App;



