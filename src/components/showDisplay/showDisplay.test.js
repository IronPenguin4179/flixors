import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import ShowDisplay from './index';

const setUp = (props={}) => {
    const component = shallow(<ShowDisplay {...props} />);
    return component;
};

describe('Box Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors.', () => {
        const wrapper = findByTestAttr(component, 'box');
        expect(wrapper.length).toBe(15);
    });
})