import React from  'react';
import {GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  gridTile: {
    background: '#000'
  }
};

const ItemBoard = (props) => (
  <GridTile
    id={props.id}
    style={styles.gridTile}
    onClick={props.onClick}
  >
  </GridTile>
);

ItemBoard.propTypes = {
    id: PropTypes.number
}

export default ItemBoard;
