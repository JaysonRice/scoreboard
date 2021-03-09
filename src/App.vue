<template>
  <v-app>
    <v-main class="pa-6 teal lighten-2">
      <matchup-title :team1="team1" :team2="team2" />
      <game-status :team1="team1" :team2="team2" />
      <div class="counterContainer">
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
    </v-main>
  </v-app>
</template>

<script>
import Counter from "./components/Counter.vue";
import GameStatus from "./components/GameStatus.vue";
import MatchupTitle from "./components/MatchupTitle.vue";

export default {
  components: { MatchupTitle, Counter, GameStatus },
  data() {
    return {
      team1: {
        name: "Team 1",
        score: 0,
      },
      team2: {
        name: "Team 2",
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
}
.counterContainer {
  display: flex;
  justify-content: space-evenly;
}
</style>
