import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class BtnLang extends React.Component {
  render() {
    const { handleChagneLang } = this.props;

    return (
      <ButtonGroup>
        <Button onClick={ () => handleChagneLang('th') }>TH</Button>
        <Button onClick={ () => handleChagneLang('en') }>EN</Button>
      </ButtonGroup>
    );
  }
}
