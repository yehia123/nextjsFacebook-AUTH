import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import mapStyles from './styles';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import firebase from 'firebase';
import {Div, mapStyle, ShadowTrailer, Shadow, CardDisplay, InfoPlate, Facebook, Details, avatarStyle, Close, Error1, ContactButton, Name, Hr, Mapper, Contact, Img1} from './styles';
import RiderMarker from 'RiderMarker';
import EventMarker from 'EventMarker';


let size = {width: 1200, height: 1200};

/*
For loop not sure why used, was not able to pass getPosts**/
let getPosts = (eventId) => {
  let database = firebase.database();
  let posts = [];
  let postsRef = database.ref('/' + eventId.event + '/posts').orderByKey();
  postsRef.on('value', snap => {
    for (let key in snap.val()){
      posts.push(snap.val()[key]);
    }
  });
  return posts;
};

class Map extends React.Component {// eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      // center: props.mapCenter,
      zoom: this.props.zoom === undefined ? 9 : this.props.zoom,
      dialogueOpen: false
    };
  }

    componentDidMount = () => {
      let posts = getPosts(this.props.eventId);
      firebase.auth().onAuthStateChanged((user) => {
        if (user){

        } else {
          if (posts.length === 0){
            {
              this.setState({
                dialogueOpen: true
              });
            }
          }
        }
      });

    };

    _onChange = ({center, zoom}) => {
      this.setState({
        center: center,
        zoom: zoom
      });
    };

    handleDialogueOpen = () => {
      this.setState({dialogueOpen: true});
    };

    handleDialogueClose = () => {
      this.setState({dialogueOpen: false});
    };

    fetchPosts = () => {
      console.log('zoom is', this.props.zoom);
      let posts = getPosts(this.props.eventId);
      return (posts.map(post =>
        <RiderMarker key={post.userId}
          type={post.userType}
          name={post.name}
          photoURL={post.photoURL}
          facebookId={post.facebookId}
          email={post.email}
          available={post.available}
          lat={post.lat}
          lng={post.lng}
        />
      ));
    };

    copyToClipboard = () => {
      this.handleDialogueClose();
      setTimeout(() => {
        this.props.copyToClipboard();
      }, 500);
      // this.handleDialogueClose();
    };

    render() {
    const actions = [
      <FlatButton
        label="Copy link to share"
        style={{float: 'left', marginLeft: 10}}
        onTouchTap={this.copyToClipboard}
        //icon={<img src={copyToClipboard} style={{width: 20}}/>}
      />,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleDialogueClose}
      />
    ];
    return (
      <Div>
        <Mapper
          onChange={this._onChange}
          center={this.props.mapCenter}
          zoom={this.state.zoom}
          size={size}
        >
          <EventMarker
            lat={this.props.eventLocation.lat}
            lng={this.props.eventLocation.lng}
          />
          {this.fetchPosts()}
        </Mapper>
        <Dialog
          title="Share the link with other people"
          actions={actions}
          modal={false}
          open={this.state.dialogueOpen}
          onRequestClose={this.handleDialogueClose}
          contentStyle={{maxWidth: 600, minWidth: 280}}
          bodyStyle={{paddingBottom: 10}}
        >
          <TextField
            defaultValue={window.location.href}
            fullWidth={true}
          />
        </Dialog>
      </Div>
    );
  }
}
