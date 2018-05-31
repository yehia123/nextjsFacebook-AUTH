/**
*
* EventMarker
*
*/

import React from 'react';
import icon from './marker.png';
import styled from 'styled-components';
import Img from 'styles';

const EventMarker = () =>
  <div>
    <Img src={icon} alt="event location" title="event location"/>
  </div>;

EventMarker.propTypes = {

};

export default EventMarker;
