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

    it('call an event when clicked', () => {
        const event = () => {

        }
        const item = mount(<ItemBoard onClick={event} />);
        console.log(item);
        // const item = app.find('#item-1');
        // item.simulate('click');
        // expect(app.find('.completed').length).toBe(1);
        // item.simulate('click');
        // expect(app.find('.completed').length).toBe(0);
    });

});
