import React from 'react';
import '../styles/common_component_styles.css';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component" id="personal-info">
        <h2>Personal Info</h2>
        
        <div className="component-data halved-display">
          <div>
            <label>First Name:</label>
            <input 
              type="text" 
              placeholder="Name" 
              id="first-name" 
              value={this.props.firstName} 
              onChange={this.props.onFnameInputChange} 
              required
            />
            
            <label>Phone:</label>
            <input 
              type="number" 
              placeholder="Ex: 0464385562" 
              id="phone" 
              value={this.props.phone} 
              onChange={this.props.onPhoneInputChange} 
              required
            />
          </div>
            
          <div>
            <label>Last Name:</label>
            <input 
              type="text" 
              placeholder="Last name" 
              id="last-name" 
              value={this.props.lastName} 
              onChange={this.props.onLnameInputChange}
              required/>
            
            <label>Email:</label>
            <input 
              type="email" 
              placeholder="Ex: myemail@gmail.com" 
              id="email" 
              value={this.props.email} 
              onChange={this.props.onEmailInputChange}
              required
            />
          </div>
        </div>
      </div>
    );    
  }  
}

export default PersonalInfo;