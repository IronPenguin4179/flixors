import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const setUp = () => {
    const wrapper = shallow(<App />);
    return wrapper
}

describe("App component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it("starts with no show data", () => {
        const appState = wrapper.state();
        expect(appState.showData).toBe("No show data yet");
    })
    it("starts with no search data", () => {
        const appState = wrapper.state();
        expect(appState.searchData).toBe("No search data yet");
    })
    it("renders Header component", () => {
        const component = wrapper.find(".Header");
        expect(component.length).toBe(1);
    })
    it("renders ShowDisplay component", () => {
        const component = wrapper.find(".ShowDisplay");
        console.log(component.debug());
        expect(component.length).toBe(1);
    })
})