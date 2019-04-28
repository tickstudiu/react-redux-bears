import React from 'react';
import { Table, Button, ButtonGroup, Collapse, Row, FormGroup, Label, Input } from 'reactstrap';
import * as tools from "../../../utils";
import {RenderBearTableText} from "./text/RenderBearTableText";

export default class RenderBearTable extends React.Component {
    state = {
        updateId: 0,
        name: '',
        weight: '',
        collapse: false,
        search: ''
    };

    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    toggle = (id) => {
        this.setState({
            collapse: true,
            updateId: id
        });
    };

    handleUpdate = () => {
        this.setState({
            collapse: false,
        });
        this.props.handleUpdate(this.state.updateId, this.state.name, this.state.weight)
    };

    render() {
        const staticText = tools.checkLanguage(RenderBearTableText);
        return (
            <div>
                <section>
                    <FormGroup>
                        <Label className="mr-sm-2">{staticText.search}</Label>
                        <Input type="text" name="search" placeholder={staticText.placeholderSearch} onChange={this.handleChange}/>
                    </FormGroup>
                </section>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>{staticText.name}</th>
                        <th>{staticText.weight}</th>
                        <th>{staticText.option}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.bears ?
                            this.state.search ?
                                this.props.bears.map((bear, index) => {
                                    if(bear.name.match(this.state.search)){
                                        return(
                                            <tr key={index}>
                                                <th scope="row">{bear.id}</th>
                                                <td>{bear.name}</td>
                                                <td>{bear.weight}</td>
                                                <td>
                                                    <ButtonGroup>
                                                        <Button color="danger" size="sm" onClick={() => this.props.handleDelete(bear.id)}>{staticText.delete}</Button>
                                                        <Button color="success" size="sm" onClick={() => this.toggle(bear.id)}>{staticText.update}</Button>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                                :
                                this.props.bears.map((bear, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{bear.id}</th>
                                            <td>{bear.name}</td>
                                            <td>{bear.weight}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Button color="danger" size="sm" onClick={() => this.props.handleDelete(bear.id)}>{staticText.delete}</Button>
                                                    <Button color="success" size="sm" onClick={() => this.toggle(bear.id)}>{staticText.update}</Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                            <tr className="text-muted">
                                <th scope="row">#</th>
                                <td>{staticText.noData}</td>
                                <td>{staticText.noData}</td>
                                <td>{staticText.noData}</td>
                            </tr>
                    }
                    </tbody>
                </Table>
                <Collapse isOpen={this.state.collapse}>
                    <h1>{staticText.UpdateAt + this.state.updateId}</h1>
                    <Row>
                        <FormGroup className="col-6">
                            <Label className="mr-sm-2">{staticText.name}</Label>
                            <Input type="name" name="name" placeholder={staticText.placeholderName} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup className="col-6">
                            <Label className="mr-sm-2">{staticText.name}</Label>
                            <Input type="number" name="weight" placeholder={staticText.placeholderWeight} onChange={this.handleChange}/>
                        </FormGroup>
                    </Row>
                    <Button color="primary" onClick={() => this.handleUpdate()}>Update</Button> {this.props.msg}
                </Collapse>
            </div>
        );
    }
}