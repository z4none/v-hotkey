# v-hotkey

Vue 2.x directive for binding hotkeys to components.

Forked from https://github.com/Dafrok/v-hotkey

Add input filter support.

## Demo

[https://z4none.github.io/v-hotkey](https://z4none.github.io/v-hotkey)


## Usage

```javascript
import Vue from 'vue'
import VueHotkey from 'v-hotkey'

Vue.use(VueHotkey)
```

```vue
<template>
  <span v-hotkey="keymap" v-show="show"> Press `ctrl + esc` to toggle me! Hold `enter` to hide me! </span>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    show () {
      this.show = true
    },
    hide () {
      this.show = false
    }
  },
  computed: {
    keymap () {
      return {
        // 'esc+ctrl' is OK.
        'ctrl+esc': this.toggle,
        'enter': {
          keydown: this.hide,
          keyup: this.show,
          filter: true
        }
      }
    }
  }
}
</script>
```

## Event Handler

- keydown (as default) 
- keyup
- filter (true or function)

If filter is true, events will be filted while input control (INPUT, SELECT, TEXTAERA) is focused;

If filter is a function, events will be filted if the function returns true, the arguments of the function is the event object;

Otherwise events won't be filted(as default);

## Key Combination

Use one or more of following keys to fire your hotkeys.

- ctrl
- alt
- shift
- meta (windows / command)
