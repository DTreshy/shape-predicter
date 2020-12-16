<template>
  <v-app>
    <v-app-bar color="white" class="v-app-bar--hide-shadow">
      <div class="ma-auto">
        <h1 class="primarycolor"> Shape Predicter </h1>
      </div>
    </v-app-bar>
    <v-main class="margin">
        <v-row>
            <v-col>
              <Canvas/>
            </v-col>
            <v-col class="flex-column align">
              <v-row class="primarycolor ma-auto">
                <h2 class="automargin"> {{ prediction }} </h2>
              </v-row>
              <v-row class="primarycolor ma-auto">
                <h2 class="automargin"> {{ probability }} </h2>
              </v-row>
            </v-col>
        </v-row>
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
  .button{
    margin: 60px 30px 60px 30px
  }
</style>
