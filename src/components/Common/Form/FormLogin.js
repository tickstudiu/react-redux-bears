import React from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import styled from 'styled-components';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faLock, faTimesCircle);

const IconInput = styled.span`
    position: absolute;
    margin-left: 23px;
    height: 52px;
    display: flex;
    align-items: center;
`;


export default class FormLogin extends React.Component {
    render() {
        const {submit, create, email ,password} = this.props.staticText;
        const {handleChange, handleSubmit, handleRouteToRegister} = this.props;

        return (
            <div className="position-relative"
                 style={{
                     width: '500px'
                 }}>
                <Form className="shadow p-5 rounded bg-white">
                    <img src="https://www.mypum.com/wp-content/uploads/2017/01/IMG_7521-min.jpg"
                         alt="profile img"
                         className="rounded-circle position-absolute"
                         style={{
                             width: '168px',
                             height: '168px',
                             border: '5px solid #007bff',
                             top: '-84px',
                             right: '166px',
                         }}
                    />
                    <FormGroup style={{
                        marginTop: '6rem',
                        marginBottom: '3rem'
                    }}>
                        <IconInput>
                            <FontAwesomeIcon icon="envelope"/>
                        </IconInput>
                        <Input type="email"
                               name="email"
                               placeholder={email}
                               className="py-4  pl-5 pr-4 mb-3"
                               onChange={handleChange}
                               style={{
                                   borderRadius: '30px',
                                   background: '#eaeaea'
                               }}/>
                        <IconInput>
                            <FontAwesomeIcon icon="lock"/>
                        </IconInput>
                        <Input type="password"
                               name="password"
                               placeholder={password}
                               className="py-4  pl-5 pr-4 mb-3"
                               onChange={handleChange}
                               style={{
                                   borderRadius: '30px',
                                   background: '#eaeaea'
                               }}/>
                    </FormGroup>
                    <Button outline
                            size="lg"
                            color="primary"
                            className="mb-2"
                            onClick={handleSubmit}
                            block
                            style={{
                                borderRadius: '30px',
                            }}>
                        {submit}
                    </Button>
                </Form>

                <footer className="mt-4">
                    <p className="text-center"><a href="" onClick={handleRouteToRegister}>{create}</a></p>
                </footer>
            </div>
        );
    }
}