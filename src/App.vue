<template>
  <div id="app">
    <matchup-title :team1="team1" :team2="team2" />
    <counter
      :score="team1.score"
      @add="addOne(team1)"
      @subtract="subtractOne(team1)"
    />
    <counter
      :score="team2.score"
      @add="addOne(team2)"
      @subtract="subtractOne(team2)"
    />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import MatchupTitle from "./components/MatchupTitle.vue";

export default {
  components: { MatchupTitle, Counter },
  data() {
    return {
      team1: {
        name: "The Bald Bretheren",
        score: 0,
      },
      team2: {
        name: "The Sincere Sisters",
        score: 0,
      },
    };
  },
  methods: {
    addOne(team) {
      team.score += 1;
    },
    subtractOne(team) {
      if (team.score === 0) {
        return;
      }
      team.score -= 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
