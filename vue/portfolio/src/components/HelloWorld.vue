<template>
  <div ref="terminal" id="terminal"></div>
</template>

<script>
import {
  CustomTerminal,
  encodedName,
  textInMiddleOfLine,
  loadProjects,
} from "../assets/Terminal.js";

export default {
  name: "HelloWorld",
  mounted() {
    console.log("Test1");
    const terminal = new CustomTerminal();
    console.log(this.$refs.terminal);
    terminal.loadTerminal(this.$refs.terminal);
    // Remember to add terminal parameter to loadProjects()!
    terminal.terminal.write("\x1b[1;92m" + encodedName);
    terminal.terminal.writeln(
      "\x1b[1;92m" +
        textInMiddleOfLine(
          " Software Developer, Cyber-Security Enthusiast & High School Senior ",
          128
        )
    );
    terminal.terminal.writeln(
      "\x1b[1;92m" + "\nMy GitHub: https://github.com/BlakeTnr"
    );
    terminal.terminal.writeln("\x1b[1;92m" + "\nProjects:\n");
    loadProjects(terminal);
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
