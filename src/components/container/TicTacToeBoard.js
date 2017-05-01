import React from 'react';
import Board from '../presentational/Board';

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

class TicTacToeBoard extends React.Component {

  _registerChoice = (e) => {
    console.log(e.target.id);
  }

  render(){
    return (
      <div>
        <Board cols={3.3} itemLength={9} onClick={this._registerChoice}
        style={styles.gridList}
        styleRoot={styles.root}
        itemGridStyle={styles.gridTile} />
      </div>
    )
  }
}

export default TicTacToeBoard;
