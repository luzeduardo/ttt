import React from 'react';
import {GridList} from 'material-ui/GridList';
import ItemBoard from './ItemBoard';
import PropTypes from 'prop-types';

const Board = (props) => (
        <GridList
          cols={props.cols}
          style={props.style}
        >
        {
          [...Array(props.itemLength).keys()].map((x)=>
            (<ItemBoard key={x} id={x} itemGridStyle={props.itemGridStyle[x]} onClick={props.onClick}/>)
          )
        }
        </GridList>
);

Board.propTypes = {
    cols: PropTypes.number,
    style: PropTypes.object,
    onClick: PropTypes.func,
    itemGridStyle: PropTypes.array,
    itemLength: PropTypes.number
}

export default Board;
