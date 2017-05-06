import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import ItemBoard from './ItemBoard';

describe('Shallow Rendering', () => {

    it('to have ItemBoard', () => {
        const wrapper = shallow(<ItemBoard />);
        expect(wrapper).to.have.length(1);
    });

    it('simulates click events', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(
        <ItemBoard onClick={onButtonClick} />
      );
      wrapper.simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });

});
