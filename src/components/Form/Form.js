import React, { useState } from "react";
// import Head_Shot from "./Head_Shot.jpeg"
// import "./pages.css"

function Form() {

    const [formState, setformState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
    };


    return (
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" onChange={e => setformState(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" onChange={e => setformState(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;



// function Signup() {
//     const [username, setUsername] = useState();
//     const [password, setPassword] = useState();


//     return (
//       <div>
//         <div className="mt-4">
//           <h2>Sign Up</h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <Container className="mt-3 px-5">
//             <Row className="form-group">
//               <Col size="12">
//                 <input
//                   className="form-control"
//                   type="text"
//                   placeholder="Username"
//                   name="username"
//                   onChange={e => setUsername(e.target.value)}
//                 />
//               </Col>
//             </Row>
//             <Row className="form-group">
//               <Col size="12">
//                 <input
//                   className="form-control"
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </Col>
//             </Row>
//             <button className="btn btn-success" type="submit">
//               Submit
//             </button>
//           </Container>
//           <Container className="mt-4">
//             <h3>Hello {username}!</h3>
//             <p>I probably shouldn't tell you this, but your password is {password}!</p>
//           </Container>
//         </form>
//       </div>
//     );
//   }

//   export default Signup;






// import React, { Component } from "react";
// import "./style.css";

// class Form extends Component {
//   // Setting the component's initial state
//   state = {
//     firstName: "",
//     lastName: ""
//   };

//   handleInputChange = event => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = event.target;

//     // Updating the input's state
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     event.preventDefault();

//     // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
//     alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//     this.setState({
//       firstName: "",
//       lastName: ""
//     });
//   };

//   render() {
//     // Notice how each input has a `value`, `name`, and `onChange` prop
//     return (
//       <div>
//         <p>
//           Hello {this.state.firstName} {this.state.lastName}
//         </p>
//         <form className="form">
//           <input
//             value={this.state.firstName}
//             name="firstName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="First Name"
//           />
//           <input
//             value={this.state.lastName}
//             name="lastName"
//             onChange={this.handleInputChange}
//             type="text"
//             placeholder="Last Name"
//           />
//           <button onClick={this.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;