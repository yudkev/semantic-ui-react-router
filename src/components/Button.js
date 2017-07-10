import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class InfoButton extends Component {
  render() {
    return (
    	<Button>
    		{this.props.message}
    	</Button>
    );
  }
}

export default InfoButton; 