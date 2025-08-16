import React from "react";

const Service=(props)=>{


    
        return(
            <>
            <div className="col-md-8 mt-5" style={{marginLeft:'20%'}}>
                <div className="card">
                    <div className="card-header bg bg-info">
                        <h1 className="text-center">Service card</h1>
                    </div>
                    <div className="card-body text-center">
                        <img src="p4.png" className="img-fluid" style={{width:'300px'}}></img>
                        <p><strong>Service1 :</strong> {props.service1}</p>
                         <p><strong>Service2 :</strong> {props.service2}</p>
                          <p><strong>Service3 :</strong> {props.service3}</p>
                    </div>
                    {/* <div className="card-footer"></div> */}

                </div>

            </div>
            
            
            </>
        )
    
}
export default Service