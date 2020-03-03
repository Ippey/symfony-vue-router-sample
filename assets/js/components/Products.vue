<template>
    <form>
        <input type="text" name="name" v-model="name">
        <input type="number" name="price" v-model="price">
        <a href="#" @click="saveData">保存</a>
        <ul>
            <li v-for="product in products">
                {{ product.name }} : {{ product.price }}円
            </li>
        </ul>
    </form>
</template>
<script>
    import axios from 'axios';
    axios.defaults.headers.Accept = 'application/json';
    export default {
        name: "Products",
        data() {
            return {
                products: [],
                name: null,
                price: null,
            };
        },
        mounted() {
            console.log('mounted');
            axios
            .get('/api/products')
            .then((res) => {
                console.log(res.data);
                this.products = res.data;
            });
        },
        methods: {
            saveData: function(e) {
                axios
                .post('/api/products', {
                    name: this.name,
                    price: parseInt(this.price)
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {
                    console.log('saved');
                });
                return false;
            }
        },
    }
</script>