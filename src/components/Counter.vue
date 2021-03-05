<template>
  <div class="counters">
    <h2 class="score">{{ score }}</h2>
    <div class="buttonContainer">
      <button class="button button-minus" @click="subtractOne">-</button>
      <button class="button button-add" @click="addOne">+</button>
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

<style>
.counters {
  background-color: rgb(215, 255, 250);
  border: 10px solid #2e7c72;
  flex-basis: 25%;
}

.score {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 8vw;
}

.buttonContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 30%;
}

.button {
  height: 100%;
  width: 30%;
  font-size: 3vw;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

.button-add {
  border: 5px solid rgba(0, 255, 0, 0.4);
  background-color: rgba(0, 255, 0, 0.281);
}
.button-minus {
  border: 5px solid rgba(255, 0, 0, 0.4);
  background-color: rgba(255, 0, 0, 0.253);
}
</style>
