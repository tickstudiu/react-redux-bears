import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../../utils';
import * as action from '../../redux/actions';

import { Text404 } from './404.text';
import ContainerMiddlePage from '../../components/Layouts/ContainerMiddlePage';
import { Button } from 'reactstrap';

class App extends Component {

    handleGoBack = () => {
        this.props.history.goBack();
    };

    render() {
        const { handleGoBack } = this;
        const staticText = tools.checkLanguage(Text404);

        return (
            <ContainerMiddlePage>
                <div className="text-center">
                    <h1 className="display-1">404</h1>
                    <h5>{staticText.oops}</h5>
                    <p className="text-muted">{staticText.description}</p>
                    <Button outline color="primary" onClick={handleGoBack}>BACK</Button>
                </div>
            </ContainerMiddlePage>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang
    }
};

export default connect(mapStateToProps, action)(App);