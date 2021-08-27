Vue.config.devtools = true;

const app = new Vue ({
    el: "#app",
    data: {
        data,
        index: 0,
        msg:""
    },
    methods: {  
        setIndex(index){
            this.index = index;
        },

        sendMsg(){
            const newMsg = {
                date: "10/01/2020 15:30:55",
                message: this.msg,
                status: "sent"
            }

            this.data.contacts[this.index].messages.push(newMsg);
            this.msg = "";
        }
    }
});