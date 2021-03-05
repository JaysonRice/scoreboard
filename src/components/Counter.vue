<template>
  <div>
    <h2>{{ score }}</h2>
    <div class="buttons">
      <button @click="addOne">+</button>
      <button @click="subtractOne">-</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["score"],
  methods: {
    addOne() {
      this.$emit("add");
    },
    subtractOne() {
      this.$emit("subtract");
    },
  },
};
</script>

<style></style>
