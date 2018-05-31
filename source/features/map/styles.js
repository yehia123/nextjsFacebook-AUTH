import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import FlatButton from 'material-ui/FlatButton';
/**
 * Created by Tifa3 on 4/21/2017.
 */
let mapStyle = {
  // scrollwheel: false,
  minZoom: 7,
  maxZoom: 19,
  styles: [
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    }
  ]
};
let Img = styled.img`
width: 50px;
height: 50px;
transform: translate(-25px, -50px);
position: relative;
z-index: 2;
`;

function  getWidth(){
  if (window.innerWidth >= 1000){
    return 400;
  } else if (window.innerWidth >= 520){
    return 250;
  } else {
    return window.innerWidth;
  }
}

function getHeight(){
  return window.innerHeight;
}

const Div = styled.div`
margin-left: ${getWidth() < 520 ? 0 : getWidth()}px;
width: calc(100% - ${getWidth() < 520 ? 0 : getWidth()}px);
height: ${getHeight()}px;
`;

const Mapper = styled(GoogleMapReact)`
width: 100%;
height: 600px;
position: fixed;
top: 50%;
`;


const Img1 = styled.img`
width: 40px;
height: 40px;
`;
const Close = styled.img`
width: 15px;
float: right;
`;
const Error1 = styled.p`
// font-size: 17px;
color:  #ff0033;
`;
const Contact = styled.p`
font-size: 18px;
`;
const Name = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 1.1;
padding-top: 15px;
`;
const Facebook = styled. h6`
font-size: 14px;
padding-bottom: 18px;
padding-right: 10px;
`;
const Details = styled.div`
padding: 5px;
min-width: 200px;
z-index: 30;
position: relative;
`;

const ContactButton = styled(FlatButton)`
// margin-top:11px;
`;
const InfoPlate = styled.div`
padding-right: 10px;
`;
const Hr = styled.hr`
margin-bottom: 4px;
`;

const CardDisplay = styled.div`
    display: inline-block;
    text-align: center;
    z-index: ${(props) => props.expanded ? 3 : 1};
    position: relative;
    cursor: pointer;
    background-color: ${(props) => props.available ? 'white' : '#b5b5b5'};
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    border-radius: 2px ;
    padding: 4px 5px 4px 6px ;
    transform: translate(-50%, -${(props) => props.expanded ? '170' : '50'}px);
`;

const Shadow = styled.div`
    bottom: -4px ;
    left: 50% ;
    margin-left: -4px ;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.15) ;
    width: 8px ;
    height: 8px ;
    -webkit-transform: rotate(45deg) ;
    -ms-transform: rotate(45deg) ;
    transform: rotate(45deg) ;
    position: absolute ;
`;

const ShadowTrailer = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.2) ;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2) ;
    bottom: -4px ;
    left: 50% ;
    margin-left: -4px ;
    background-color: ${(props) => props.available ? 'white' : '#b5b5b5'} ;
    width: 8px;
    height: 8px;
    -webkit-transform: rotate(45deg) ;
    -ms-transform: rotate(45deg) ;
    transform: rotate(45deg) ;
    position: absolute ;
`;
const avatarStyle = {
  objectFit: 'cover',
  float: 'left',
  marginRight: 7
};



module.exports = mapStyle, Img, ShadowTrailer, Shadow, CardDisplay, InfoPlate, Facebook, Details, avatarStyle, Close, Error1, ContactButton, Name, Hr, Mapper, Contact, Img1;

