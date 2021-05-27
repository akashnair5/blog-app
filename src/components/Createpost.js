import React from 'react'
class Createpost extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'Create your own post'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your post was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className = 'post'> <b> UserPost :</b> 
            <br></br>
            <br></br>
            <textarea rows = '10' cols = '100' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br></br>
          <input className = 'submit'  type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Createpost