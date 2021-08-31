Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue ({
    el: "#app",
    data: {
        data,
        index: 0,
        msg:"",
        searchItem: ""
    },
    methods: {  
        setIndex(index){
            this.index = index;
        },

        sendMsg(){
            if(this.msg === "") return;
            this.newMsg(this.msg, "sent");
            this.msg = "";
            setTimeout(() => {this.newMsg("ok", "received")}, 1000);
        }, 

        newMsg(message, status){
            const newMsg = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                message,
                status
            };
            this.data.contacts[this.index].messages.push(newMsg);
        },

        selectContact(contact){
            const searchUp = this.searchItem.trim().toUpperCase();
            const contactName = contact.name.toUpperCase();
            return contactName.includes(searchUp);
        },

        removeText(index){
            this.data.contacts[this.index].messages.splice(index, 1);
        },

        lastSeen(contact){
            if(!contact.messages.length) return;
            return contact.messages[contact.messages.length - 1].date;
        }, 

        lastText(contact){
            if(!contact.messages.length) return;
            return contact.messages[contact.messages.length - 1].message;
        }
    } 
});

