import React from "react";

const About=(props)=>{
    return(
        <>
        <div className="col-md-8 mt-5 " style={{marginLeft:'20%'}}>
    <div className="card">
        <div className="card-header bg bg-info">
           <h2 className="text-center" >About Card</h2>

        </div>
         <div className="card-body text-center ">
            <img src="p3.png" className="img-fluid" style={{width:'200px'}}></img>
                <p><strong>Name:</strong> {props.name}</p>
                <p><strong>Email id:</strong> {props.Email}</p>
                <p><strong>Role:</strong> {props.Role}</p>


            </div>
            <div className="card-footer bg bg-info text-center">
                <button className="btn btn-primary">Submit</button>
                <button className="ms-5 btn btn-danger">Reset</button>
            </div>

    </div>

 </div></>
    )
    
}
export default About