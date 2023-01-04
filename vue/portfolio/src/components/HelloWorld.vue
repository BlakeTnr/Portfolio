<template>
  <div ref="terminal" id="terminal"></div>
</template>

<script>
import Terminal from "xterm";

export default {
  name: "HelloWorld",
  mounted() {
    console.log(this.$refs.terminal);
    var term = new Terminal();
    console.log("test1");
    term.open(this.$refs.terminal);
    console.log("test2");
    term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
    console.log("test3");
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#terminal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: black;
}
</style>
