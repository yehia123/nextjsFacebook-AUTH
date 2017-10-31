import React from 'react';
import { connect } from 'react-redux';

const ViewItems = ({items}) => items.map(x => <p key={x.id}>{x.name}</p>);

const mapState = state => ({ items: state.items });

export default connect(mapState)(ViewItems);
