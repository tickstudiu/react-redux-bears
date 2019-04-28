import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';
import {AppText} from './app.text';
import {Loader, RenderBearTable, CreateForm} from '../../components'
import {Container} from 'reactstrap';

class App extends Component {

    state = {
        loading : true
    };

    handleCreate = (name, weight) => {
        let data = {
            name: name,
            weight: weight,
        };
        this.props.postBear(async () => {

            this.props.getBears(async () => {
            });
        }, data);
    };

    handleDelete = (id) => {
        this.props.delBear(async () => {

            this.props.getBears(async () => {
            });
        }, id);
    };

    handleUpdate = (id, name, weight) => {
        let data = {
            name: name,
            weight: weight,
        };
        this.props.putBear(async () => {

            this.props.getBears(async () => {
            });
        }, id, data);
    };



    componentWillMount() {
        this.props.getBears(async () => {
            this.setState({
                loading: false
            })
        });
    }

    render() {
        const staticText = tools.checkLanguage(AppText);

        if(this.state.loading){
            return <Loader/>
        }

        return (
            <Container>
                <h1>{staticText.bearsDatabase}</h1>
                <RenderBearTable bears={this.props.bearStore.all} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
                <CreateForm handleCreate={this.handleCreate} msg={this.props.bearStore.msg}/>
            </Container>
        );
    }
}

const mapStateToProps = ({lang, bearStore}) => {
    return {
        lang, bearStore
    }
};

export default connect(mapStateToProps, action)(App);
