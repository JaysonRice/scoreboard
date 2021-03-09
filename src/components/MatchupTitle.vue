<template>
  <div>
    <v-row class="nameRow">
      <v-col lg="5" md="4" sm="3">
        <v-text-field
          class="centered-input"
          v-model="team1.name"
          color="blue-grey"
          outlined
          :background-color="teamOneisWinning"
        ></v-text-field>
      </v-col>
      <h2 sm="1">vs</h2>
      <v-col lg="5" md="4" sm="3">
        <v-text-field
          class="centered-input"
          v-model="team2.name"
          color="blue-grey"
          outlined
          :background-color="teamTwoisWinning"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ["team1", "team2"],
  computed: {
    teamOneisWinning() {
      if (this.team1.score > this.team2.score) {
        return "yellow lighten-1";
      } else return "teal accent-2";
    },
    teamTwoisWinning() {
      if (this.team1.score < this.team2.score) {
        return "yellow lighten-1";
      } else return "teal accent-2";
    },
  },
};
</script>

<style>
.nameRow {
  display: flex;
  justify-content: space-evenly;
  font-size: 2vw;
  margin: 0;
}

h1 {
  margin: 0;
}

.centeredInput > input {
  text-align: center;
}
</style>
