import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {ModalWinner} from './ModalWinner';

describe('Shallow Rendering', () => {

    it('to have ModalWinner', () => {
        let props = {
          status:true,
          players:{
            players:['A','B'],
            last:'A',
          }
        }
        const wrapper = shallow(<ModalWinner status={false} />);
        wrapper.setProps(props);
        expect(wrapper).to.have.length(1);
        expect(wrapper.instance().state.lastWinner).to.equal('A');
    });
});
