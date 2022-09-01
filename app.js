console.log('js ok');


const app = new Vue({
    el: '#root',
    data: {
        mailList: new Array(),
    },
    methods: {
        getEmail() {
            for (let i = 1; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
    
                        console.log(res)
                        this.mailList.push(res.data.response)
                    })
                   
            }
        }
    },
    mounted(){
        this.getEmail();
    }
})



