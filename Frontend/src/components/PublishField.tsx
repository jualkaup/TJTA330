import * as React from "react";
import { Form, Row, Col } from "react-bootstrap";

interface PublishFieldProps { }
interface PublishFieldState { }

class PublishField extends React.Component<PublishFieldProps, PublishFieldState> {
    render() {
        return (
            <div>
                <Row>
                    <Col sm>

                    </Col>
                    <Col sm={5} >
                        <Form className="publishField">
                            <Form.Group controlId="textContent">
                                <Form.Control as="textarea" rows="4" placeholder="What's happening?" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm >
                    
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    
                    </Col>
                    <Col sm={5} >
                        <button className="sendButton">Send</button>
                    </Col>
                    <Col sm >
                        
                    </Col>
                </Row>
            </div>
        )
    }

}

export default PublishField;