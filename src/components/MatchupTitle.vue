<template>
  <div>
    <div class="teamNames">
      <h1>{{ team1.name }}</h1>
      <h1 class="vs">vs</h1>
      <h1>{{ team2.name }}</h1>
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
}
</style>
