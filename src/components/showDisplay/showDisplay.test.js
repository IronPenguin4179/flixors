import React from 'react';
import { mount } from 'enzyme';
import App from '../../App'
import ShowDisplay from './index';

describe('Box Component', () => {
    it('Should renders multiple blocks without errors.', () => {
        const app = mount( <App/> )
        const wrapper = app.find('.block');

        expect(wrapper.length).toBe(3);
        app.unmount()
    });
})