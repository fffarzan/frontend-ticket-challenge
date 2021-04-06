import ErrDialog from '@/components/err-dialog'
import { mount } from '@vue/test-utils'

describe('ErrDialog', () => {
  test('If error dialog is not called, do not show the dialog', () => {
    const wrapper = mount(ErrDialog)
    expect(wrapper.find('.dialog').isVisible).toBe(false)
  })

  test('If error dialog is called, show the dialog', () => {
    const wrapper = mount(ErrDialog)
    // wrapper.setData({ isErrDialogShowning: true })
    expect(wrapper.find('.dialog').isVisible).toBe(true)
  })
})
