<template>
  <div id="app" v-hotkey="keymap">
    <p>
      Press
      <kbd>space</kbd> to say
      <span ref="hello" class="hello">HELLO</span>.
    </p>

    <p>
      <label @click="$refs.text.focus();">
        <input type="checkbox" v-model="filter">
        filter events
      </label>
    </p>

    <p>
      <input type="text" ref="text" autofocus>
    </p>

    <p v-if="filter">Events won't trigger when input is focused</p>
    <p v-else>Events will trigger when input is focused</p>

    <p>
      Press
      <kbd>enter</kbd> to see the
      <a href="https://dafrok.github.io/v-hotkey/">demos</a>.
    </p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      filter: false
    }
  },
  methods: {
    hello() {
      const $hello = this.$refs.hello
      $hello.classList.add('active')
    },
    gotoDemo() {
      window.location.href = 'https://dafrok.github.io/v-hotkey/'
    }
  },
  computed: {
    keymap() {
      return {
        space: {
          keydown: this.hello,
          filter: this.filter
        },
        enter: this.gotoDemo
      }
    }
  },
  mounted() {
    const $hello = this.$refs.hello
    $hello.addEventListener('animationend', e => $hello.classList.remove('active'))
  }
}
</script>

<style>
html,
body {
  margin: 0;
  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

#app {
  padding: 100px 0;
  text-align: center;
}

.hello {
  font-size: 1em;
  display: inline-block;
}

.hello.active {
  animation: active-helloworld 0.2s ease-out;
}

@keyframes active-helloworld {
  0% {
    transform: scale(1);
    color: rgba(0, 0, 0, 1);
  }

  50% {
    transform: scale(2);
    color: rgba(255, 0, 0, 1);
  }

  100% {
    transform: scale(1);
    color: rgba(0, 0, 0, 1);
  }
}

kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
    monospace;
  line-height: 10px;
  color: #444d56;
  vertical-align: middle;
  background-color: #fcfcfc;
  border: 1px solid #c6cbd1;
  border-bottom-color: #959da5;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #959da5;
}
</style>