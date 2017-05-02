import React from 'react';
import Board from '../presentational/Board';
import array from 'lodash/array';
import ModalInfo from '../presentational/ModalInfo';
import RegisterWinner from './RegisterWinner';

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

const styleA =  {'background':'green'};
const styleB =  {'background':'blue'};

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

  componentWillUpdate(newProps, newState){
    let winnerA;
    let winnerB;
    if(newState.positionsMarkedA.length >= 2 && this.state.status === "playing"){
      winnerA = this._checkWinner(newState.positionsMarkedA);
      this._validateWinner(winnerA, "A", newState.status);
      winnerB = this._checkWinner(newState.positionsMarkedB);
      this._validateWinner(winnerB, "B", newState.status);
    }

    if(this.state.status === "playing" && newState.positionsMarkedA.length === 5){
      this.setState({status:"stalemate"});
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
      this._checkPlayer() ? positionsColor[position] = styleA : positionsColor[position] = styleB;
      this.setState({ccounter, positionsMarked, positionsMarkedA, positionsMarkedB, positionsColor});
    }
  }

  _checkWinner = (positions) => {
    if(this.state.status !== "playing"){
      return false;
    }
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
    let oPositions = positions.sort().toString().split(",");
    let intersect;
    winPositions.map((mark, idxWinner) => {
      let oMark = mark.toString().split(",");
      intersect = array.intersection(oPositions, oMark);
      if(!result && positions.length >= 3 && intersect.length === 3){
        result = true;
      }
      return result;
    });
    return result;
  }

  _validateWinner = (statusPlayer, player, status) => {
    if(statusPlayer && status === "playing"){
      this.setState({status:"finish", "winner":player});
      // this.setState({
      //   ccounter: 0,
      //   positionsMarked: [],
      //   positionsMarkedA: [],
      //   positionsMarkedB: [],
      //   positionsColor,
      //   status: "playing",
      //   winner: undefined
      // });
    }
  }

  render(){
    //ao finalizar listar em modal e limpar jogo
    return (
      <div>
        <ModalInfo status={this.state.status === "stalemate"} text={this.state.status}/>
        {/* <ModalWinners status={this.state.status === "finish"} text={this.state.results}/> */}
        <RegisterWinner status={this.state.status === "finish" ? true : false} />
        <Board cols={3.3} itemLength={9} onClick={this.state.status === "playing" ? this._registerChoice: null}
        style={styles.gridList}
        styleRoot={styles.root}
        itemGridStyle={this.state.positionsColor} />
      </div>
    )
  }
}

export default TicTacToeBoard;
