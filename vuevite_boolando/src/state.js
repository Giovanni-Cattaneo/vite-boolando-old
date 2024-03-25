import { reactive } from 'vue';


export const state = reactive({
    message: "This is a test",
    products: [],
    api_product_url: 'http://localhost:3000/products',
})