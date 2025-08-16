import React, { Component } from "react";

class Home extends React.Component{

    constructor(){
        super()
        this.state=({

        })
    }
    render()
    {
        return(
            <>
<div className="container-fluid p-0 m-0 ">
    
    <h1 className="bg-primary text-danger  text-center p-3 mt-1">Home page</h1>
    <div className="row">
        
                <div className="col-md-12 text-center">
                    <img src="p2.png" className="img-fluid" alt="" style={{height:'500px'}} />
                    </div>

        

    </div>

</div>

            </>
        )
    }

}
export default Home