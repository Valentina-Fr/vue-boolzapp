Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        data,
        index: 0,
    },
    methods: {  
        setIndex(index){
            this.index = index;
        }
    }
});