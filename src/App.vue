<template>
  <v-app>
    <v-app-bar color="white" class="v-app-bar--hide-shadow">
      <div class="ma-auto text-h1">
        <h1 class="primarycolor"> Shape Predicter </h1>
      </div>
    </v-app-bar>
    <v-main class="margin">
        <v-row>
            <v-col>
              <Canvas/>
            </v-col>
            <v-col class="flex-column d-flex text-h3">
              <v-row class="primarycolor">
                <h2 class="ma-auto "> {{ prediction }} </h2>
              </v-row>
              <v-divider class="secondary"> vertical </v-divider>
              <v-row class="primarycolor ">
                <h2 class="ma-auto"> {{ probability }} </h2>
              </v-row>
            </v-col>
        </v-row>
      <v-container id="buttonContainer">
        <PredictButton/>
        <ClearButton/>
      </v-container>
    </v-main>
    <v-footer color="white">
      <v-spacer/>
      <v-icon color="secondary" size=60> {{ svgVue }} </v-icon>
      <v-spacer/>
      <v-icon color="secondary" size=60> {{ svgPython }} </v-icon>
      <v-spacer/>
      <v-icon color="secondary" size=60> {{ svgVuetify }} </v-icon>
      <v-spacer/>
      <v-icon color="secondary" size=60> {{ svgDocker }} </v-icon>
      <v-spacer/>
      <img src="@/assets/p5js.svg" height='40' alt="p5.js logo">
      <v-spacer/>
      <img src="@/assets/tensorflow.svg" height='70' alt="Tensorflow logo">
      <v-spacer/>
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
    svgDocker: mdiDocker
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
.margin{
  margin: auto 5%
}
  #buttonContainer{
    text-align: center;
  }
  h1{
    font-size: 42px;
  }
  .primarycolor{
    color: #283593;
  }
</style>
