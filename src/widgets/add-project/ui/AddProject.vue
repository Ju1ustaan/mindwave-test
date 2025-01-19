<template>
    <form class="add">
        <label>
            Name
            <input :class="error? 'error': ''" type="text" v-model="content.product_name">
        </label>
        <label>
            Amount
            <input type="number" v-model="content.product_amount">
        </label>
        <button 
        type="button" 
        @click="addItem">
            Add
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useItems } from '../../../app/store';

interface AddItem {
    product_name: string;
    product_amount: number;
}
let store = useItems()
const error = ref<boolean>(false)
let content = ref<AddItem>({
    product_name: '',
    product_amount: 1
})

const addItem = () => {
    if(!content.value.product_name){
        error.value = true
    }else{
        error.value = false
        store.addItem(content.value)
        content.value.product_name = ''
        content.value.product_amount = 1
    }
}
</script>

<style scoped>
.add {
    position: sticky;
    top: 50px;
    background-color: #242424;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
    padding: 2em 0;
}

.add label {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.add input {
    width: 80%;
    padding: 10px 10px;
}

.error {
    border: 1px solid red;
    animation: shake .5s ease-in;
}

@keyframes shake {
    0% {
        transform: rotate(0);
    }
    10% {
        transform: rotate(1deg);
    }
    20% {
        transform: rotate(-1deg);
    }
    30% {
        transform: rotate(1deg);
    }
    40% {
        transform: rotate(1deg);
    }
    50% {
        transform: rotate(-1deg);
    }
    60% {
        transform: rotate(1deg);
    }
    70% {
        transform: rotate(-1deg);
    }
    85% {
        transform: rotate(1deg);
    }
    100% {
        transform: rotate(0);
    }
}
</style>