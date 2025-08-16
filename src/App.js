import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./contact";
import Service from "./service"

class App extends React.Component{
  constructor(){
    super()
    this.state=({

    })
  }

  render()
{

  




    return(
      <>
      <body style={{backgroundColor:'bisque'}}></body>
    <div className="container-fluid p-0 m-0">
    <div className="row">
      <div className="col-md-12">

        <Navbar/>
        <Home/>
        
        <About
        
        name="Tanuja khade"
        Email="Khadetanuja05@gmail.com"
        Role="React Devlopment"
       />
  
        <Contact/>
        <Service
        service1="WebDevlopment"
        service2 = "App Devlopment"
        service3 = "UI/UX Design"
        
        
        
        />


      </div>


    </div>

   

    


    </div>

      
      
      </>
    )
  }
}
export default App