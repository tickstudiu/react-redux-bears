import React, {Component} from "react";
import { Container, Row, Col } from "reactstrap";

class ContainerMiddlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { background } = this.props;

        return (
            <Container style={{
                background: background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} fluid>
              <Row>
                <Col lg={{size: 6, offset: 3}}>
                  <div className="d-flex justify-content-center align-items-center" style={{
                    height: '100vh',
                  }}>
                    {this.props.children}
                  </div>
                </Col>
              </Row>
            </Container>
        );
    }
}

export default ContainerMiddlePage;
