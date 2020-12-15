<template>
    <v-btn id="clearButton" class="button" x-large min-width="150" color="secondary" outlined>
        <v-icon> {{ svgEraser }} </v-icon>
        <v-spacer/>
        Clear
        <v-spacer/>
    </v-btn>
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
