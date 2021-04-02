import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: [
                {
                    name: '',
                    email: '',
                    message: '',
                    disabled: false,
                    emailSent: null,
                }
            ]
        }
    }

    render() {
        return (
        <div>
            <div className="contactForm">
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name}></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        
            <style jsx>{`
        
            `}</style>
        </div>
        );
    }
}
export default Form;