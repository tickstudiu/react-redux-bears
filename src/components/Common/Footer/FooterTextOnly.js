import React from 'react';

export default class FooterTextOnly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { footerText } = this.props;
        return (
            <footer className="position-sticky fixed-bottom text-center">
                <p className="lead py-3">&copy; {footerText}</p>
            </footer>
        );
    }
}
