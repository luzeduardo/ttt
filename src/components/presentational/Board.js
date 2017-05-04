import React from 'react';
import {GridList} from 'material-ui/GridList';
import ItemBoard from './ItemBoard';
import PropTypes from 'prop-types';

const Board = (props) => (
      <div style={props.styleRoot}>
        <GridList
          cols={props.cols}
          style={props.style}
        >
          {[...Array(props.itemLength).keys()].map((x) =>
            <ItemBoard key={x} id={x} onClick={props.onClick}
            itemGridStyle={props.itemGridStyle[x]}
            />
          )}
        </GridList>
      </div>
);

Board.propTypes = {
    cols: PropTypes.number,
    style: PropTypes.object,
    onClick: PropTypes.func,
    itemGridStyle: PropTypes.array,
    itemLength: PropTypes.number
}

export default Board;
