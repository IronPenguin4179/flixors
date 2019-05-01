import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../utils';
import Header from './index';
import App from '../../App'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
};

describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors.', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    })

    it('Should render a searchBar', () => {
        const search = findByTestAttr(component, 'search')
        expect(search.length).toBe(1);
    })

    it('Should not change page if clicked while in table.', () => {
        const logo = findByTestAttr(component, 'logoIMG');
        logo.simulate('click');
        const app = shallow(<App />);
        const state = app.state().page;
        expect(state).toBe(false)
    })

    it('Should change page if clicked while in info page.', () => {
        //const Show
        const logo = findByTestAttr(component, 'logoIMG');
        logo.simulate('click');
        const app = shallow(<App />);
        const state = app.state().page;
        expect(state).toBe(false)
    })
})