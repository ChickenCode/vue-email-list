const app = new Vue ({
    el: '#root',
    data: {
        emailList: [],
        cicleTimes: 10
    },

    mounted() {

        for (i = 0; i < this.cicleTimes; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(resp => {
                this.emailList.push(resp.data.response)
            })
        } 
    }
})