console.log('js ok');


const app = new Vue({
    el: '#root',
    data: {
        mailList: new Array(),
    },
    mathods: {
        getEmail() {
            for (let i = 1; i <= 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        console.log(result.data.response)
                        this.getEmail = result.data.response
                        this.mailList.push(getEmail)
                    })
                   
            }
        }
    },
})



