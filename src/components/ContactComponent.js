import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


const required = val => val &&val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {
//  constructor(props){
//     super(props);
//     this.state = {
//        firstName: '',
//        lastName: '',
//        phoneNum: '',
//        email: '',
//        agree: false,
//        contactType: 'By Phone',
//        feedback: '',
//        touched:{
//            firstName: false,
//            lastName: false,
//            phoneNum: false,
//            email: false
//        }
//     };
  

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        //JSON.stringify --> will make a string from a Javascript object
        alert('Current state is: ' + JSON.stringify(values));
        //event.preventDefault(); //to prevent page from refreshing on form submissionc
    }


    render(){
        // all inputs will become Control.type(type is -> textarea, text, checkbox)
        // model attrubte :: it tells redux  that the value for this field will be stored
        //in the state under the property name of , whatever the property name will be 
        //EXAMPLE: model=".firstName" id="firstName"
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1 Nucamp Way<br />
                            Seattle, WA 98001<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>
                <div className="row row-content">
                        <div className="col-12">
                            <h2>Send us your Feedback</h2>
                            <hr />
                        </div>
                        <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                    <Control.text model=".firstName" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 4, offset: 2}}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox
                                                    model=".agree"
                                                    name="agree"
                                                    className="form-check-input"
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <Control.select model=".contactType" name="contactType"
                                            className="form-control">
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".feedback" id="feedback" name="feedback"
                                            rows="12"
                                            className="form-control"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Contact;

/* Notes

Required Function:
required recieves the value as an arguement and 
this will be a string value that is receives (since all input values are converted to strings)
function checks to make sure that there was a value that was recieved - it wasn't undefined or null
we will just check val, because if its evalutes as faulsey then we val is null or undefined
we also need to check if the length of the string is greater than zero */


/* 
Max Length Function:
double arrows means a function within a function
first function takes the maximum length 
second fucntion takes the value - the input string, then from inside of the inner function 
we want to return true if the max length has not be exceeded 
!val (no value) --> true because if there is no value inputed then clearly the max length has not been exceeded
val.length <= len) <--- we will also return true if the value's length is less than or equal  to  the maximum
if both conditons return false, then the function will return false, and that will create an error
*/

/* 
Min Length Function:
the inner function will return true, if there is a value and the value is greater than or equal
to the minimum
*/

/*
isNumber function:
we want to check if the value is a number : first we use the uninary operator 
to turn the value into a number, if it can, otherwise the value will be turned into the NaN
isNaN('hello') -> true, isNaN(123) --> false: hence we put the ! operater infront of +val 
so if this value is not a valid number then this will ultimately return false and if it is vaild # then it will return true
*/

/*
validEmail function:
will use a regualr expression to check for a valid email:
this regular expression checks to see of the email address :
begins with a to z, then only contain characters(0-9._%+-) that are valid in an email address,
then check if there is an @ sign, then following the @ sign, where the domain name would be, we'll
permit the characters that are a-z/0-9 any number of times
then a dot is required then the domain extension, which can be 2 to 4 letters,
then we'll use the built-in test() to check if the value passed in matched the regex pattern
*/
