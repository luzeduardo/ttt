import React from  'react';
import {GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';

/**
  Defines the item that will eb rendered inside the board
*/
const ItemBoard = (props) => (
  <GridTile
    id={props.id}
    style={props.itemGridStyle}
    onClick={props.onClick}
  >
  </GridTile>
);

ItemBoard.propTypes = {
    /*used to control the positions in that players will
    register and compare later to win positions*/
    id: PropTypes.number,
    /*set a style for the item*/
    style: PropTypes.object,
    /*defines a function that will be triggered on click*/
    onClick: PropTypes.func
}

export default ItemBoard;
