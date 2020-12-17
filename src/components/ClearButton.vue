<template>
  <v-hover v-slot=" { hover } ">
    <v-btn
        id="clearButton"
        class="transition-ease-in-out"
        :outlined='hover ? 0 : 1'
        x-large
        min-width="160"
        :elevation="hover ? 20 : 5"
        color="secondary">
        <v-icon> {{ svgEraser }} </v-icon>
        <v-spacer/>
        Clear
        <v-spacer/>
    </v-btn>
  </v-hover>
</template>

<script>
    import { mdiEraser } from '@mdi/js'
    export default {
        name: 'ClearButton',

        data() {
            return {
                svgEraser: mdiEraser,
                clearButton: document.getElementById('clearButton')
            }
        },
    }
</script>
