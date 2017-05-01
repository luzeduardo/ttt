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


class Board extends React.Component {

  _registerChoice = (e) => {
    console.log(e.target.id);
  }

  render(){
    return (
      <div style={styles.root}>
        <GridList
          cols={3.3}
          style={styles.gridList}
        >
          {[...Array(9).keys()].map((x) =>
            <ItemBoard key={x} id={x} onClick={this._registerChoice.bind(x)} />
          )}
        </GridList>
      </div>
    )
  }
}

export default Board;
