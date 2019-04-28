import React from 'react';
import { Button, Row, FormGroup, Label, Input } from 'reactstrap';
import {CreateFormText} from './text/CreateForm.text';
import * as tools from "../../../utils";

export default class CreateForm extends React.Component {
    state = {
        name: '',
        weight: ''
    };

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };


    render() {
        const staticText = tools.checkLanguage(CreateFormText);
        return (
            <div>
                <h1>{staticText.create}</h1>
                <hr/>
                <Row>
                    <FormGroup className="col-6">
                        <Label for="exampleEmail" className="mr-sm-2">{staticText.name}</Label>
                        <Input type="name" name="name" id="exampleEmail" placeholder={staticText.placeholderName} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="col-6">
                        <Label for="examplePassword" className="mr-sm-2">{staticText.weight}</Label>
                        <Input type="number" name="weight" id="examplePassword" placeholder={staticText.placeholderWeight} onChange={this.handleChange}/>
                    </FormGroup>
                </Row>
                <Button color="primary" onClick={() => {this.props.handleCreate(this.state.name, this.state.weight)}}>{staticText.btn}</Button> {this.props.msg}
            </div>
        );
    }
}