import React from 'react';
import App from './app';
import { shallow } from 'enzyme';

describe("App component", () => {
    it("starts with no show data", () => {
        const wrapper = shallow(<App />);
        const appState = wrapper.state();
        expect(appState.showData).toBe("No show data yet");
    })
    it("starts with no search data", () => {
        const wrapper = shallow(<App />);
        const appState = wrapper.state();
        expect(appState.searchData).toBe("No search data yet");
    })
})