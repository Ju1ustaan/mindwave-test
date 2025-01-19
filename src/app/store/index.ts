import axios from "axios";
import { defineStore } from "pinia";


interface Item {
    id: number;
    product_name: string;
    product_amount: number;
}
interface AddItem {
    product_name: string;
    product_amount: number;
}
interface UpdateItem {
  id: number;
  product_name: string;
  product_amount: number;
}

export const useItems = defineStore('useItems', {
    state: () => ({
        items: [] as Array<Item>
    }),
    actions: {
        async getItems() {
            const { data } = await axios(`http://dev.mindwave.kz/api/sandbox/crud`)
            this.items = data.content.rows

        },
        async addItem(payload: AddItem) { 
            const { data } = await axios.post(`http://dev.mindwave.kz/api/sandbox/crud`, payload)
            if(data.success){
                await this.getItems()
            }
            return data
        },
        async updateItem(payload: UpdateItem) { 
            const body = {
                product_amount: payload.product_amount,
                product_name: payload.product_name
            }
            
            const { data } = await axios.put(`http://dev.mindwave.kz/api/sandbox/crud/${payload.id}`, body)
            if(data.success){
                await this.getItems()
            }
            return data
        },
        async deleteItem(id: number) {
            const { data } = await axios.delete(`http://dev.mindwave.kz/api/sandbox/crud/${id}`)
            if(data.success){
                await this.getItems()
            }
        }
    }
})

export const usePopUp = defineStore('usePopUp', {
    state: () => ({
        showDelete: false as boolean,
        showEdit: false as boolean
    }),
    actions: {
        showPopUp(payload: boolean) {
            this.showDelete = payload
        },
        showEditPopUp(payload: boolean) {
            this.showEdit = payload
        },
    }
})