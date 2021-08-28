Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue ({
    el: "#app",
    data: {
        data,
        index: 0,
        msg:"",
    },
    methods: {  
        setIndex(index){
            this.index = index;
        },

        sendMsg(){
            const newMsg = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                message: this.msg,
                status: "sent"
            };

            this.data.contacts[this.index].messages.push(newMsg);
            this.msg = "";

            setTimeout(this.sayOk, 1000);
        }, 

        sayOk(){
            const answer = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                message: "ok",
                status: "received"
            };

            this.data.contacts[this.index].messages.push(answer);
        }
    }
});

