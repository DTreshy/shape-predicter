<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <h1> Shape Predicter </h1>
      </div>
    </v-app-bar>
    <v-main>
      <v-col>
        <Canvas/>
      </v-col>
      <v-col>
        <v-row>
          <h2> {{ prediction }} </h2>
        </v-row>
        <v-row>
          <h2> {{ probability }} </h2>
        </v-row>
      </v-col>
      <v-container id="buttonContainer">
        <PredictButton/>
        <ClearButton/>
      </v-container>
    </v-main>
    <v-footer color="white">
      <h2> Used Technologies </h2>
      <v-icon color="dark" :size='iconSize'> {{ svgVue }} </v-icon>
      <v-icon color="dark" :size='iconSize'> {{ svgPython }} </v-icon>
      <v-icon color="dark" :size='iconSize'> {{ svgVuetify }} </v-icon>
      <v-icon color="dark" :size='iconSize'> {{ svgDocker }} </v-icon>
    </v-footer>
  </v-app>
</template>

<script>
import Canvas from './components/Canvas';
import { mdiLanguagePython, mdiVuejs, mdiVuetify, mdiDocker} from '@mdi/js'
import ClearButton from "@/components/ClearButton";
import PredictButton from "@/components/PredictButton";

export default {
  name: 'App',

  components: {
    ClearButton,
    Canvas,
    PredictButton
  },

  data: () => ({
    svgVue: mdiVuejs,
    svgPython: mdiLanguagePython,
    svgVuetify: mdiVuetify,
    svgDocker: mdiDocker,
    iconSize: 70
  }),
  computed: {
    probability () {
      return this.$store.getters.getProbability
    },
    prediction () {
      return this.$store.getters.getPrediction
    },
  }
};
</script>

<style>
  #buttonContainer{
    text-align: center;
  }
  h1{
    color: white;
    font-size: 40px;
    margin-right: 10px;
  }
  .button{
    margin: 60px 30px 60px 30px
  }
</style>
