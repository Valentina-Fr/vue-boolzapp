Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);

const app = new Vue ({
    el: "#app",
    data: {
        data,
        index: 0,
        msg:"",
        searchItem: "",
        contactList: []
    },
    methods: {  
        setIndex(index){
            this.index = index;
            this.contactList.forEach(contact => {
                contact.visible = true;
            }); 
            this.searchItem = "";
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

        selectContact(){
            const searchUp = this.searchItem.toUpperCase();
            this.contactList.forEach(contact => {
                if(!contact.name.toUpperCase().includes(searchUp)){
                    contact.visible = false;
                }
            });  
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
    },
    created () {
        this.contactList = this.data.contacts.filter ((contact) => {return contact.visible});   
    } 
});

