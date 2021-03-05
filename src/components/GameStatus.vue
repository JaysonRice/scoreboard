<template>
  <div class="gameStatus">
    <p v-if="gameTied">
      The game is all tied up
    </p>
    <p v-else>
      {{ gameLeaderDisplay }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["team1", "team2"],
  computed: {
    gameTied() {
      return this.team1.score === this.team2.score;
    },

    gameLeaderDisplay() {
      const difference = Math.abs(this.team1.score - this.team2.score);
      const winningTeam =
        this.team1.score > this.team2.score ? this.team1.name : this.team2.name;
      const pointOrPoints = difference > 1 ? "points" : "point";

      return `${winningTeam} are winning by ${difference} ${pointOrPoints}.`;
    },
  },
};
</script>

<style></style>
