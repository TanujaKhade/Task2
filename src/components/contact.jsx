import React from "react";


class Contact extends React.Component {
  // State with phone and address
state = {
    phone: "123-456-7890",
    address: "Pune, Maharashtra"
  };

  render() {
    return (
      <>
      <div className="col-md-8 mt-5" style={{marginLeft:'20%'}}>
        <div className="card">
            <div className="card-header text-center bg bg-info" >
                <h1>Contact card</h1>

            </div>
            <div className="card-body text-center">
                <p><strong>Phone:</strong>{this.state.phone}</p>
                <p><strong>Address:</strong>{this.state.address}</p>

            </div>
            <div className="card-footer text-center bg bg-info" >
                <button className="btn btn-primary">Submit</button>
                <button className="btn btn-danger ms-5">Reset</button>

            </div>

        </div>

      </div>
            
        
      
      </>
    );
  }
}

export default Contact;
