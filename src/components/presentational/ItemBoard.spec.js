import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';

import ItemBoard from './ItemBoard';

describe('Shallow Rendering', () => {

    it('to have GridTile', () => {
        const wrapper = shallow(<GridTile />);
        console.log(GridTile);
        // expect(wrapper.find('FormControl')).to.have.length(2);
    });

    // it('to have one Button', () => {
    //     const wrapper = shallow(<Simulador />);
    //     expect(wrapper.find('Button')).to.have.length(1);
    // });
    //
    // it('to have one textarea', () => {
    //     const wrapper = shallow(<Simulador />);
    //     expect(wrapper.find('FormControl').filter({componentClass: 'textarea'})).to.have.length(1);
    // });
});
