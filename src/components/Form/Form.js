import React, { Component, useState } from "react";
import "./form.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        email: "",
        message: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;


        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        const templateId = 'template_ATj7KFDu';

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.name} ${this.state.email} ${this.state.message}`)
        this.setState({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        });
        this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
    };
    // handleSubmit(event) {
    //     const templateId = 'template_ATj7KFDu';

    //     this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
    // }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                {/* <p>
                    Hello {this.state.name} {this.state.email} {this.state.message} 
                </p> */}
                <form className="form">
                    <input
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name"
                        id="name_i"
                    />
                    <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                        id="email_i"
                    />
                    <textarea
                        value={this.state.message}
                        name="message"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Message"
                        id="message_t">
                    </textarea>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;

// render() {
//     return (
//         <form className="test-mailing">
//             <h1>Let's see if it works</h1>
//             <div>
//                 <textarea
//                     id="test-mailing"
//                     name="test-mailing"
//                     onChange={this.handleChange}
//                     placeholder="Post some lorem ipsum here"
//                     required
//                     value={this.state.feedback}
//                     style={{ width: '100%', height: '150px' }}
//                 />
//             </div>
//             <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//         </form>
//     )
// }



// export default Form;


// import React from 'react';

// export default class extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     render() {
//         return (
//             <form className="test-mailing">
//                 <h1>Let's see if it works</h1>
//                 <div>
//                     <textarea
//                         id="test-mailing"
//                         name="test-mailing"
//                         onChange={this.handleChange}
//                         placeholder="Post some lorem ipsum here"
//                         required
//                         value={this.state.feedback}
//                         style={{ width: '100%', height: '150px' }}
//                     />
//                 </div>
//                 <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
//             </form>
//         )
//     }

//     handleSubmit(event) {
//         const templateId = 'template_id';

//         this.sendFeedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email })
//     }

//     sendFeedback(templateId, variables) {
//         window.emailjs.send(
//             'gmail', templateId,
//             variables
//         ).then(res => {
//             console.log('Email successfully sent!')
//         })
//             // Handle errors here however you like, or use a React error boundary
//             .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//     }

// }

// import React, { Component, useState } from "react";
// // import "./style.css";

// class Form extends Component {
//     // Setting the component's initial state
//     state = {
//         name: "",
//         email: "",
//         message: ""
//     };

//     handleInputChange = event => {
//         // Getting the value and name of the input which triggered the change
//         const { name, value } = event.target;



//         // Updating the input's state
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         event.preventDefault();

//         // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
//         alert(`Hello ${this.state.name} ${this.state.email} ${this.state.message}`)
//         this.setState({
//             name: this.state.name,
//             email: this.state.email,
//             message: this.state.message
//         });
//     };

//     render() {
//         // Notice how each input has a `value`, `name`, and `onChange` prop
//         return (
//             <div>
//                 <p>
//                     Hello {this.state.name} {this.state.email} {this.state.message} 
//                 </p>
//                 <form className="form">
//                     <input
//                         value={this.state.name}
//                         name="name"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Name"
//                     />
//                     <input
//                         value={this.state.email}
//                         name="email"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Email"
//                     />
//                     <textarea
//                         value={this.state.message}
//                         name="message"
//                         onChange={this.handleInputChange}
//                         type="text"
//                         placeholder="Message">

//                     </textarea>
//                     <button onClick={this.handleFormSubmit}>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Form
