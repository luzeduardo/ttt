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
      positionsColor
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
      // console.log("A", this.state.positionsMarkedA);
      // console.log("B", this.state.positionsMarkedB);
    }

    if(this.state.positionsMarkedA.length >= 2){
      this._checkWinner(this.state.positionsMarkedA);
    }

    if(this.state.positionsMarkedB.length === 3){
      //empate
    }
    console.log(positionsColor);
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
    winPositions.map(mark => {
      console.log(mark.toString().includes(positions));
    });
  }

  render(){
    return (
      <div>
        <Board cols={3.3} itemLength={9} onClick={this._registerChoice}
        style={styles.gridList}
        styleRoot={styles.root}
        itemGridStyle={this.state.positionsColor} />
      </div>
    )
  }
}

export default TicTacToeBoard;
