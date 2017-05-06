import React from 'react';
import {GridList} from 'material-ui/GridList';
import ItemBoard from './ItemBoard';
import PropTypes from 'prop-types';

/**
  Will receive a number of itens to create a board
  divided by number of collumns and a function that will be fired
  on ItemBoard click
*/
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
    /*control the number of collumns in the game*/
    cols: PropTypes.number,
    /*set a style for each component inside the board*/
    style: PropTypes.object,
    /*defines a function that will be triggered on position item click*/
    onClick: PropTypes.func,
    /*defines a style for the item component inside the board*/
    itemGridStyle: PropTypes.array,
    /*defines the number of positions the board will display*/
    itemLength: PropTypes.number
}

export default Board;
