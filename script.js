var app = new Vue (
    {
        el:'#app',
        data: {
            mailArr : []
        },
        created () {
            this.randomdate();
        },
        methods: {
            randomdate: function(){
                for (let index = 0; index < 10; index++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.mailArr.push(response.data.response);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }
            }
        },
    })