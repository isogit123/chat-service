import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { addMsg } from '../dal';
import { Link } from 'react-router-dom';

class Chat extends Component {
    state = {  }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        addMsg({
            peer: this.props.peerId,
            msg: newMessage,
            time: new Date()
        });
      }
      componentDidMount(){
          
      }
    render() { 
        return (
            <React.Fragment>
                <Link to="/chatList">Back to Peers List</Link>
                <Widget>
                        handleNewUserMessage={this.handleNewUserMessage} 
                </Widget>  
        </React.Fragment>);
    }
}
 
export default Chat;