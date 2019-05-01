import * as React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { any } from "prop-types";
import { Message } from "../interfaces/message";

interface PublishFieldProps {
    fetchMessages: () => void;
}
interface PublishFieldState {
    textContent: string
}

class PublishField extends React.Component<PublishFieldProps, PublishFieldState> {
    state: Readonly<PublishFieldState> = {
        textContent: ""
    }
    textField: any;

    constructor(props) {
        super(props);
        this.textField = React.createRef();
    }

    sendMessage = () => {
        const text = this.textField.current.value;

        const message: Message = {
            id: 0,
            content: text,
            date: new Date(),
            likeAmount: 0,
            platform: 1,
            sender: {
                dateOfBirth: null,
                email: null,
                name: null,
                id: 3
            }
        };

        fetch("https://localhost:44346/api/Messages", {method: "POST", body: JSON.stringify(message), headers: {"Content-Type": "application/json"}}).then(() => this.props.fetchMessages())
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm>

                    </Col>
                    <Col sm={5} >
                        <Form className="publishField">
                            <Form.Group controlId="textContent">
                                <Form.Control ref={this.textField}  as="textarea" rows="4" placeholder="What's happening?" />
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
                        <button onClick={() => this.sendMessage()} className="sendButton">Send</button>
                    </Col>
                    <Col sm >
                        
                    </Col>
                </Row>
            </div>
        )
    }

}

export default PublishField;