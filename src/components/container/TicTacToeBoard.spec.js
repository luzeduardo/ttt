import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {TicTacToeBoard} from './TicTacToeBoard';
import RegisterPlayer from './RegisterPlayer';
import Board from '../presentational/Board';

// beforeEach(() => {
//     props = {
//       "uiControl" : {
//         "modalRegisterPlayer":false
//       }
//     };
// });

describe('Render Game', () => {
    it('to have Game', () => {
        let props = {
          "uiControl" : {
            "modalRegisterPlayer":false
          }
        }
        const wrapper = shallow(<TicTacToeBoard {...props}/>);
        expect(wrapper).to.have.length(1);
    });

    // it('to show Register Player Modal', () => {
    //     let props = {
    //       "uiControl" : {
    //         "modalRegisterPlayer":true
    //       }
    //     }
    //     const wrapper = shallow(<TicTacToeBoard uiControl={props}/>);
    //     expect(wrapper).to.have.length(1);
    // });

    it('to check position without winner with playing state',()=>{
        let props = {
          "status":"playing",
          "uiControl" : {
            "modalRegisterPlayer":true
          }
        }
        const wrapper = shallow(<TicTacToeBoard {...props} />);
        wrapper.instance().setState({"status":"playing"});
        expect(wrapper.instance()._checkWinner([1,2,3])).equals(undefined);
    });

    it('to check position without winner without playing state',()=>{
        let props = {
          "uiControl" : {
            "modalRegisterPlayer":true
          }
        }
        const wrapper = shallow(<TicTacToeBoard {...props} />);
        expect(wrapper.instance()._checkWinner([1,2,3])).equals(false);
    });

    it('to check winner position',()=>{
        let props = {
          "uiControl" : {
            "modalRegisterPlayer":false
          }
        }
        const wrapper = shallow(<TicTacToeBoard {...props} />);
        wrapper.instance().setState({"status":"playing"});
        expect(wrapper.instance()._checkWinner([0,1,2])).equals(true);
    });

    it('to show Register Player Modal', () => {
        let props = {
          "uiControl" : {
            "modalRegisterPlayer":true
          }
        }
        const wrapper = shallow(<TicTacToeBoard {...props}/>);
        expect(wrapper.find(RegisterPlayer)).to.have.length(1);
    });

    it('to check positions marked correctly',()=>{
        let props = {
          "uiControl" : {
            "modalRegisterPlayer":false
          }
        }
        const wrapper = shallow(<TicTacToeBoard {...props} />);
        wrapper.instance().setState({
          status:"playing",
          positionsMarked:[],
          positionsMarkedA:[],
          positionsMarkedB:[]
        });
        wrapper.instance()._registerChoice({target:{id:2}});
        expect(wrapper.instance().state.ccounter).to.equal(1);
        expect(wrapper.instance().state.positionsMarkedA.length).to.equal(1);
        wrapper.instance()._registerChoice({target:{id:3}});
        expect(wrapper.instance().state.positionsMarkedB[0]).to.equal(3);
    });

    it('to check positions marked correctly',()=>{
        const mockDispatch = () => true;
        let props = {
          players:{
            players:['A','B']
          },
          uiControl : {
            "modalRegisterPlayer":false
          },
          dispatch: mockDispatch
        }
        const wrapper = shallow(<TicTacToeBoard {...props} />);
        const positionsColor = Array.from([].fill.call({ length: 9 }, {'background':'black'} ));
        wrapper.instance().setState({
          status:"playing",
          positionsMarked:[],
          positionsMarkedA:[],
          positionsMarkedB:[],
          positionsColor
        });
        wrapper.instance()._registerChoice({target:{id:0}});
        wrapper.instance()._registerChoice({target:{id:3}});
        wrapper.instance()._registerChoice({target:{id:1}});
        wrapper.instance()._registerChoice({target:{id:4}});
        wrapper.instance()._registerChoice({target:{id:2}});
        //game was reseted after player 1 win
        expect(wrapper.instance().state.status).to.equal("start");
    });
});
