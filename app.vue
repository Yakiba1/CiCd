<script setup lang="ts">
const d = 4
function count(f: number) {
  return d + f
}
console.log(count(8))

const todoList = ["a", "b", "c", "d", "e", "f", "g", "h"]

</script>


<template>
  <div class="container">
    <div> ХУЕЦ</div>
    <test-es-lint/>
    <testEsLint :listitems="todoList"/>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

