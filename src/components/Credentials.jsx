import React, { Component } from 'react';

import {initCredentialsUI} from '../firebase-module';

class Credentials extends Component{
    componentDidMount(){
      initCredentialsUI('#cred-container');
    }
    render(){
      return(
        <div id="cred-container"></div>
      );
    }
}

export default Credentials;