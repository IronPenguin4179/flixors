import React from 'react';
import App from '../../App';
import ShowInfo from './index'
import { shallow, mount } from 'enzyme';

describe("Show Info component", () => {
    it("should render component", () => {
        const component = mount( <App/> )
        const showBlock = component.find(".showInfoLink")
        showBlock.first().simulate("click")
        const showInfo = component.find(".showInfo")
        expect(showInfo.length).toBe(1)
    })
    it("renders", () => {
      const component = shallow( <ShowInfo data={{poster_path: ""}} />)
      const wrapper = component.find(".showInfo")
      expect(wrapper.length).toBe(1)
    })
})