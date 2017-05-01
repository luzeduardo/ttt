import React from 'react';
import {GridList} from 'material-ui/GridList';
import ItemBoard from './ItemBoard';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'auto',
  },
  gridTile: {
    background: '#000'
  }
};

const Board = () => (
  <div style={styles.root}>
    <GridList
      cols={3.3}
      style={styles.gridList}
    >
      {[...Array(9).keys()].map((x, i) =>
        <ItemBoard key={i} />
      )}
    </GridList>
  </div>
);

export default Board;
