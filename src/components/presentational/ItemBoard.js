import React from  'react';
import {GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';

const ItemBoard = (props) => (
  <GridTile
    id={props.id}
    style={props.itemGridStyle}
    onClick={props.onClick}
  >
  </GridTile>
);

ItemBoard.propTypes = {
    id: PropTypes.number
}

export default ItemBoard;
