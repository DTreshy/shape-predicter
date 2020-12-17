<template>
  <v-hover v-slot=" { hover } ">
    <v-btn
        id="predictButton"
        class="transition-ease-in-out"
        :outlined='hover ? 0 : 1'
        x-large
        min-width="160"
        color="primary"
        :elevation="hover ? 20 : 5"
        @click="predict">
        <v-icon> {{ svgSend }} </v-icon>
        <v-spacer/>
        Predict
    </v-btn>
  </v-hover>
</template>

<script>
    import { mdiSend } from '@mdi/js'
    import Canvas from "@/components/Canvas";
    export default {
        name: 'PredictButton',

        data() {
            return {
                svgSend: mdiSend,
                predictButton: document.getElementById('predictButton'),
            }
        },
        methods: {
            dataURLtoFile (dataurl, filename) {
                const arr = dataurl.split(',')
                const mime = arr[0].match(/:(.*?);/)[1]
                const bstr = atob(arr[1])
                let n = bstr.length
                const u8arr = new Uint8Array(n)
                while (n) {
                    u8arr[n - 1] = bstr.charCodeAt(n - 1)
                    n -= 1 // to make eslint happy
                }
                return new File([u8arr], filename, { type: mime })
            },
            async predict() {
                const imageUrl = Canvas.data().canvas.toDataURL()
                const image = this.dataURLtoFile(imageUrl, 'image.jpg')
                const data = new FormData()
                data.append('image', image, image.name)
                const response = await this.$axios.post('https://predicter.dsprojects.pl', data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                })
                console.log(response)
                this.$store.commit('setResponse', {
                    prediction: response['data']['prediction'],
                    probability: response['data']['propability'] + '%'
                })
                console.log(this.$store.getters.getPrediction)
                console.log(this.$store.getters.getProbability)
            }
        }
    }
</script>
