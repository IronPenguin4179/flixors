import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../App'
import SearchBar from './index';

describe("Search Bar component", () => {
  it("renders the component", () => {
    const component = shallow(<SearchBar allProps={ {search: ""} } />);
    const wrapper = component.find(".searchBar");
    expect(wrapper.length).toBe(1);
  })

  it("changes when typed into", () => {
    const app = mount( <App/> )
    expect(app.state().search).toBe("");  
    const wrapper = app.find(".searchBar");
    wrapper.simulate('change', { target: { value: 'Life'}});
    expect(app.state().search).toBe("Life");
  })
})