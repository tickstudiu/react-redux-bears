import React, {Component} from "react";
import styled from 'styled-components';

const ArrowRight = styled.div`
  width: 0; 
  height: 0; 
  
  border-top: 2.5rem solid transparent;
  border-bottom: 2.5rem solid transparent;
  
  border-left: 2.5rem solid #007bff;
  
  margin-left: 1rem;
  margin-right: 1rem;
`;

class MsgBox extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const { ProfileImg, ProfileAlt } = this.props;

        return (
            <div className="d-flex justify-content-start align-items-center">
                <div className="bg-primary text-white p-4 rounded">
                    {this.props.children}
                </div>
                <ArrowRight/>
                <img src={ProfileImg} alt={ProfileAlt} className="rounded-circle" style={{
                    width: '100px',
                    height: '100px',
                    border: '5px solid #007bff',
                }}/>
            </div>
        );
    }
}

export default MsgBox;
