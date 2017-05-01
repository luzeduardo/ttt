import React from 'react';
import Board from '../presentational/Board';
import array from 'lodash/array';

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
  }
};

class TicTacToeBoard extends React.Component {

  constructor(props){
    super(props);
    let positionsColor = Array.from([].fill.call({ length: 9 }, {'background':'black'} ));
    this.state = {
      ccounter: 0,
      positionsMarked: [],
      positionsMarkedA: [],
      positionsMarkedB: [],
      positionsColor,
      status: "playing",
      winner: undefined
    }
  }

  _checkPlayer = () => this.state.ccounter % 2 === 0

  _registerChoice = (e) => {
    let position = e.target.id;
    let positionsMarked = this.state.positionsMarked;
    let positionsMarkedA = this.state.positionsMarkedA;
    let positionsMarkedB = this.state.positionsMarkedB;
    let positionsColor = this.state.positionsColor;

    if(!positionsMarked.includes(position)){
      let ccounter = this.state.ccounter + 1;
      positionsMarked = this.state.positionsMarked;
      positionsMarked.push(position);
      this._checkPlayer() ? positionsMarkedA.push(position) : positionsMarkedB.push(position);
      this._checkPlayer() ?
        positionsColor[position] = {'background':'green'}
       :positionsColor[position] = {'background':'red'};

      this.setState({ccounter, positionsMarked, positionsMarkedA, positionsMarkedB, positionsColor});
    }
  }

  componentWillUpdate(newProps, newState){
    let winnerA;
    let winnerB;
    if(newState.positionsMarkedA.length >= 2){
      winnerA = this._checkWinner(newState.positionsMarkedA);
      this._validateWinner(winnerA, "A", newState.status);
      console.log(winnerA, winnerB);
      winnerB = this._checkWinner(newState.positionsMarkedB);
      this._validateWinner(winnerB, "B", newState.status);
      // console.log(winnerA, winnerB);
    }

    // if(!winnerA && !winnerB && newState.positionsMarkedA.length === 5){
    //   this.setState({status:"stalemate"})
    //   console.log("empate");
    // }
  }
  _validateWinner = (statusPlayer, player, status) => {
    if(statusPlayer && status === "playing"){
      this.setState({status:"finish", "winner":player});
    }
  }

  _checkWinner = (positions) => {
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
    let result = undefined;
    let oPositions = positions.sort().toString();
    winPositions.map((mark, idxWinner) => {
      let oMark = mark.toString();
      if(!result && positions.length >= 3 && array.intersection([oPositions], [oMark])){
        result = idxWinner;
      }
      return result;
    });
    return result;
  }

  render(){
    return (
      <div>
        <Board cols={3.3} itemLength={9} onClick={this.state.status === "playing" ? this._registerChoice: null}
        style={styles.gridList}
        styleRoot={styles.root}
        itemGridStyle={this.state.positionsColor} />
      </div>
    )
  }
}

export default TicTacToeBoard;
