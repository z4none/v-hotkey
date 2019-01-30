import keyCode from './keycode'

const getKeyMap = keymap => Object.keys(keymap).map(input => {
  const result = {}
  const { keyup, keydown, filter } = keymap[input]
  input.replace('numpad +', 'numpad add').split('+').forEach(keyName => {
    switch (keyName.toLowerCase()) {
      case 'ctrl':
      case 'alt':
      case 'shift':
      case 'meta':
        result[keyName] = true
        break
      default:
        result.keyCode = keyCode(keyName)
    }
  })
  result.callback = {
    keydown: keydown || keymap[input],
    keyup,
    filter
  }
  return result
})

function bindEvent (el, binding) {
  el._keymap = getKeyMap(binding.value)
  el._keyHandler = e => {
    for (const hotkey of el._keymap) {
      const callback = hotkey.keyCode === e.keyCode &&
        !!hotkey.ctrl === e.ctrlKey &&
        !!hotkey.alt === e.altKey &&
        !!hotkey.shift === e.shiftKey &&
        !!hotkey.meta === e.metaKey &&
        hotkey.callback[e.type]
      if (callback) {
        const filter = hotkey.callback.filter

        if (filter) {
          if (filter === true) {
            let target = (e.target || e.srcElement)
            if (target.isContentEditable || target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
              return
            }
          }
          if (typeof filter === 'function' && filter(e)) {
            return
          }
        }

        callback(e)
      }
    }
  }
  document.addEventListener('keydown', el._keyHandler)
  document.addEventListener('keyup', el._keyHandler)
}

function unbindEvent (el) {
  document.removeEventListener('keydown', el._keyHandler)
  document.removeEventListener('keyup', el._keyHandler)
}

export default {
  install (Vue) {
    Vue.directive('hotkey', {
      bind: bindEvent,
      componentUpdated (el, binding) {
        if (binding.value !== binding.oldValue) {
          unbindEvent.apply(this, arguments)
          bindEvent.apply(this, arguments)
        }
      },
      unbind: unbindEvent
    })
  }
}
