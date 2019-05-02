import React from 'react';
import ShowBlock from './index';
import App from '../../App'
import { shallow, mount } from 'enzyme';

describe("App component", () => {
  it("renders a show block with accurate info", () => {
    const component = shallow( <ShowBlock />);
    const wrapper = component.find(".showInfoLink")
    expect(wrapper.length).toBe(1);
  })

  it("should switch to showInfo upon selection", () => {
    const app = mount( <App/> )
    const showBlock = app.find(".showInfoLink")
    showBlock.first().simulate("click")
    const showInfo = app.find(".showInfo")
    expect(showInfo.length).toBe(1)
    app.unmount()
})
})