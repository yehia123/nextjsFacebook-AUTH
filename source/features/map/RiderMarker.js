/**
 *
 * RiderMarker
 *
 */

import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import passenger from './002-man-waving-arm.svg';
import car from './001-car-black-side-silhouette.svg';
import closeIcon from './close.svg';
import Avatar from 'material-ui/Avatar';
import firebase from 'firebase';
import {Img, Div, mapStyle, ShadowTrailer, Shadow, CardDisplay, InfoPlate, Facebook, Details, avatarStyle, Close, Error1, ContactButton, Name, Hr, Mapper, Contact, Img1} from './styles';


class RiderMarker extends React.Component {// eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      showContact: false
    };
  }

  expand = () => {
    this.setState({
      expanded: true
    });
  };

  contract = () => {
    this.setState({
      expanded: false
    });
  };

  expandContract = () => {
    this.setState({
      showContact: true
    });
  };

  getContact(){
    if (!this.state.showContact){
      return (<ContactButton label="Contact" onTouchTap={this.expandContract}/>);
    } else {
      let user = firebase.auth().currentUser;
      if (user === null){
        return (<Error1>You need to login to first</Error1>);
      } else {
        return (<Contact>{this.props.email}</Contact>);
      }

    }
  };

  getBody() {
    if (this.state.expanded){
      return (
        <Details>
          <div onTouchTap={this.contract}>
            <Avatar src={`https://graph.facebook.com/${this.props.facebookId}/picture?height=120`}
              size={80}
              style={avatarStyle}
            />
            <Close src={closeIcon}/>
            <InfoPlate>
              <Name>{this.props.name}</Name>

            </InfoPlate>
          </div>

          <a target="_blank" href={`https://facebook.com/${this.props.facebookId}`}>
            <Facebook>Facebook</Facebook>
          </a>
          <Hr/>
          {this.getContact()}
        </Details>
      );
    } else {
      return (<div onTouchTap={this.expand}> {this.type(this.props.type)} </div>);
    }
  }
  type = function (type) {
    if (type === 'Rider'){
      return (<Img src={passenger}/>);
    } else {
      return <Img src={car}/>;
    }
  };

  render() {
    return (
      <CardDisplay expanded={this.state.expanded} available={this.props.available}>
        {this.getBody()}
        <Shadow/>
        <ShadowTrailer available={this.props.available}/>
      </CardDisplay>
    );
  }
}

RiderMarker.propTypes = {

};

export default RiderMarker;
