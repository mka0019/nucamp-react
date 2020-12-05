import React, {Component}from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label,Button, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val &&val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component{

    constructor(props) {
        super(props);   
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        //JSON.stringify --> will make a string from a Javascript object
        alert('Current state is: ' + JSON.stringify(values));
        //event.preventDefault(); //to prevent page from refreshing on form submissionc
    }

  render(){
      return(
          <React.Fragment>
              <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" /> Submit Comment</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label sm={12}> Rating</Label>
                            <Col>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                    <option></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" sm={12}>Your Name</Label>
                                <Col sm={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
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
                            <Label htmlFor="text" sm={12}>Comments</Label>
                                <Col sm={12}>
                                    <Control.textarea model=".text" id="text" name="text"
                                            rows="6"
                                            className="form-control"
                                    />
                                </Col>
                        </Row>
                        <Row className="form-group">
                                    <Col sm={12}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
          </React.Fragment>
      );
  }
}


function RenderCampsite({campsite}){
    return(
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    if(comments){
        return(
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                 {comments.map(comment => {
                     return(
                        <div key={comment.id}>
                        <p>{comment.text}</p>
                        <p>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                     );
                 }
                )}
                <CommentForm/>
            </div>
        );
    }
    return <div/>;
}


function CampsiteInfo(props){
    if(props.campsite){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                    {/* <CommentForm/> */}
                </div>
            </div>
        );
    }
    return <div/>;
}

// the props are ::
//campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
//comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}


export default CampsiteInfo;