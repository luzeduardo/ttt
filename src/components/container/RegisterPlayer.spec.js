import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {RegisterPlayer} from './RegisterPlayer';
import TextField from 'material-ui/TextField';

describe('Shallow Rendering', () => {

    it('to have Two Inputs for players', () => {
        let props = {
          status:true
        }
        const wrapper = shallow(<RegisterPlayer status={false} />);
        wrapper.setProps(props);
        expect(wrapper).to.have.length(1);
        expect(wrapper.find(TextField)).to.have.length(2);
    });
});
