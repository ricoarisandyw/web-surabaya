const { createApp } = Vue

createApp({
    data() {
        return {
            isShow: false,
            firstName: "Rico",
            lastName: "Wijaya",
            listMenu: [
                {
                    image: 'https://cdn.pixabay.com/photo/2023/01/23/23/20/altar-7739897_640.jpg',
                    label: "Event"
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2022/12/16/15/37/flower-7659988_1280.jpg',
                    label: "Peta"
                },
                {
                    image: 'https://cdn.pixabay.com/photo/2022/11/21/19/11/facade-7607939_640.jpg',
                    label: "Kuliner"
                },
            ]
        }
    },
    methods: {
        filter() {
            this.listMenu = this.listMenu.filter((m) => m.includes('a'))
        }
    }
}).mount('#app')