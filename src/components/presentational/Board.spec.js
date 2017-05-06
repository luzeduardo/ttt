import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Board from './Board';
import ItemBoard from './ItemBoard';

describe('Render Board', () => {
    const positionsColor = Array.from([].fill.call({ length: 9 }, {'background':'black'} ));

    it('to have Board', () => {
        const wrapper = shallow(<Board cols={3.3} itemLength={9} itemGridStyle={positionsColor} />);
        expect(wrapper).to.have.length(1);
    });

    it('to have Board', () => {
        const wrapper = shallow(<Board cols={3.3} itemLength={9} itemGridStyle={positionsColor} />);
        expect(wrapper.find(ItemBoard)).to.have.length(9);
    });
});
