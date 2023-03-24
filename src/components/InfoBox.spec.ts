import InfoBox from './InfoBox.vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'


describe('InfoBox', () => {
  it('renders', () => {
    const wrapper = mount(InfoBox);
    expect(wrapper.text()).toContain("information")
  });
});
