import React from 'react';
import App from '../../App';
import ShowInfo from './index'
import { shallow, mount } from 'enzyme';

describe("Show Info component", () => {
    it("should render component", () => {
        const app = mount( <App/> )
        const showBlock = app.find(".showInfoLink")
        showBlock.first().simulate("click")
        const showInfo = app.find(".showInfo")
        expect(showInfo.length).toBe(1)
        app.unmount()
    })
    it("renders", () => {
      const component = shallow( <ShowInfo data={{poster_path: ""}} />)
      const wrapper = component.find(".showInfo")
      expect(wrapper.length).toBe(1)
    })
})