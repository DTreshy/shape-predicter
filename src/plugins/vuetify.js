import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#283593',
                secondary: '#263238',
                light: '#5f5fc4',
                dark: '#001064'
            },
        },
    },
});
