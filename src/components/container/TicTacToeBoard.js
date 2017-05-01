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

  constructor(props){
    super(props);
    let winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    this.state = {
      winPositions,
      ccounter: 0,
      positionsMarked: []
    }
  }

  //se elemento ja foi clicado nao permite clique
  _registerChoice = (e) => {
    let position = e.target.id;
    let positionsMarked = this.state.positionsMarked;
    if(!positionsMarked.includes(position)){
      let ccounter = this.state.ccounter + 1;
      positionsMarked = this.state.positionsMarked;
      positionsMarked.push(position);
      this.setState({ccounter, positionsMarked});
      console.log(this.state);
    }
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
