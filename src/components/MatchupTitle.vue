<template>
  <div>
    <div class="teamNames">
      <h1 :class="{ winning: team1.score > team2.score }">{{ team1.name }}</h1>
      <h1>vs</h1>
      <h1 :class="{ winning: team1.score < team2.score }">{{ team2.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["team1", "team2"],
};
</script>

<style>
.teamNames {
  display: flex;
  justify-content: space-evenly;
  font-size: 2vw;
  margin: 0;
}

h1 {
  margin: 0;
}

.winning {
  color: #fbffbe;
}
</style>
