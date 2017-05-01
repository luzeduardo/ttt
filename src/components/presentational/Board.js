import React from 'react';
import {GridList} from 'material-ui/GridList';
import ItemBoard from './ItemBoard';

const Board = (props) => (
      <div style={props.styleRoot}>
        <GridList
          cols={props.cols}
          style={props.style}
        >
          {[...Array(props.itemLength).keys()].map((x) =>
            <ItemBoard key={x} id={x} onClick={props.onClick} itemGridStyle={props.itemGridStyle} />
          )}
        </GridList>
      </div>
);

export default Board;
