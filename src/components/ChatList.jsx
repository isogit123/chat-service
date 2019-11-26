import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';
import Chat from './Chat';

class ChatList extends Component {
    state = { 
        peers: [
            {displayName: 'hi',
             peerId: 1
            },
            {displayName: 'hi2',
            peerId: 2}
        ],
        currentPeerId: null
     }
     onPeerSelection = (peerId) => {
         this.state.currentPeerId = peerId;
         location.href = "/chat";
     }
    render() { 
        return(
            <React.Fragment>
                {this.state.peers.map(peer => 
                <div className="card" onClick={() => this.onPeerSelection(peer.id)}>
                <div className="card-body">
                <p className="card-text" style={{
                    color: 'black'
                }}>{peer.displayName}</p>
                </div>
            </div>
                )}
                <Route path="/chat" render={() => <Chat peer={this.state.currentPeerId}></Chat>}></Route>
            </React.Fragment>
        );
    }
}
 
export default ChatList;