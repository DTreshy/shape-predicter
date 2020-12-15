<template>
  <div id="p5Canvas"></div>
</template>

<script>
  import P5 from 'p5'
  import ClearButton from "@/components/ClearButton";
  export default {
    name: 'Canvas',

    data: () => ({
      canvas: document.getElementById('defaultCanvas0')
    }),
    mounted(){
      const sketch = (s) => {
        s.setup = () => {
          this.image = s.createCanvas(550, 550)
          s.background(255)
        }
        s.draw = () => {
          s.stroke('#283593')
          s.strokeWeight(40)
          if (s.mouseIsPressed === true) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY)
          }
          ClearButton.data().clearButton.onclick = () => {
            s.clear()
            this.$store.commit('clearResponse')
          }
        }
      }
      // eslint-disable-next-line no-unused-vars
      const canvas = new P5(sketch, 'p5Canvas')
    },
  }
</script>

<style>
  #defaultCanvas0{
    border: #424242 solid 2px;
  }
</style>
