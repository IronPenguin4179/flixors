import React from 'react';
import ShowBlock from './index';
import { shallow } from 'enzyme';

describe("App component", () => {
  it("renders a show block with accurate info", () => {
    const component = shallow( <ShowBlock />);
    const wrapper = component.find("showIMG")
    expect(wrapper.length).toBe(1);
  })
})