Vue.component("LswConsoleHooker", {
  template: $template,
  props: {},
  data() {
    return {
      is_shown: true,
      instance: undefined
    }
  },
  methods: {
    show() {
      this.is_shown = true;
    },
    hide() {
      this.is_shown = false;
    }
  },
  mounted() {
    this.instance = new ConsoleHooker("lsw-console-hooker-output");
    if(process.env.NODE_ENV !== "development") {
      // !@DESCOMENTAR: para restaurar consola (OFUSCA LOGS EN desarrollo)
      this.instance.restoreConsole();
    }
    this.$vue.prototype.$consoleHooker = this;
    this.$window.LswConsoleHooker = this;
  },
  unmounted() {

  }
});