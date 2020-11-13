import React from 'react';
import '../styles/common_component_styles.css';

class DisplayPersonalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <h2>Personal Info</h2>
        
        <div className="component-data halved-display">
          <div>
            <label>First Name:</label>
            <p>{this.props.firstName}</p>
            
            <label>Phone:</label>
            <p>{this.props.phone}</p>
          </div>
            
          <div>
            <label>Last Name:</label>
            <p>{this.props.lastName}</p>
            
            <label>Email:</label>
            <p>{this.props.email}</p>
          </div>
        </div>
      </div>
    );    
  }  
}

export default DisplayPersonalInfo;