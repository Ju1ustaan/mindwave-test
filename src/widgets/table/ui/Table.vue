<template>
  <div class="table">
    <div class="table-content table-header">
      <p>{{ `#${data.length}` }}</p>
      <p>id</p>
      <p>name</p>
      <p>amount</p>
      <p>actions</p>
    </div>

    <div class="table-content table-body" v-for="(item, idx) in data" :key="item.id">
      <p>{{ idx + 1 }}</p>
      <p>{{ item.id }}</p>
      <p>{{ item.product_name }}</p>
      <p>{{ item.product_amount }}</p>
      <div>
        <button @click="item.isDeleting = true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="16px" height="16px" viewBox="0 0 448 512">
            <path
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
          </svg>
        </button>

        <button @click="item.isEditing = true">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#4f46e5" width="16px" height="16px" viewBox="0 0 512 512">
            <path
              d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
          </svg>
        </button>
      </div>

      <Popup v-if="item.isDeleting" :title="'Are you sure you want to delete?'">
        <template #delete-item>
          <button class="popup_btn" @click="deleteItem(item.id)">delete</button>
          <button class="popup_btn" @click="item.isDeleting = false">Cancel</button>
        </template>
      </Popup>

      <Popup v-if="item.isEditing" :title="'Edit item'">
        <template #edit-item>
          <div class="popup_actions">
            <label>
              <span>Name</span>
              <input type="text" v-model="item.product_name" />
            </label>
            <label>
              <span>Amount</span>
              <input type="number" v-model="item.product_amount" />
            </label>
          </div>
          <button class="popup_btn" @click="saveItem(item)">Save</button>
          <button class="popup_btn" @click="item.isEditing = false">Cancel</button>
        </template>
      </Popup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useItems } from '../../../app/store';
import { Popup } from '../../../shared/ui/popup';

const action = useItems();

interface Item {
  id: number;
  product_name: string;
  product_amount: number;
  isEditing?: boolean;
  isDeleting?: boolean;
}

defineProps<{ data: Item[] }>();

const deleteItem = async (id: number) => {
  await action.deleteItem(id);
  await action.getItems(); 
};

const saveItem = (item: Item) => {
  action.updateItem({ id: item.id, product_name: item.product_name, product_amount: item.product_amount });
  item.isEditing = false;
};
</script>

<style scoped>
.table {
  border-radius: 20px;
  background: #a28ada;
  overflow: hidden;
}

.table-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr) 3fr 1fr 2fr;
  align-items: center;
  text-transform: capitalize;
  justify-items: center;
  padding: 10px 15px;
}

.table-content.table-header {
  background: #2028956c;
  font-weight: 700;
  margin-bottom: 5px;
}

.table-content.table-body div {
  display: flex;
  gap: 5px;
}

.popup_title {
  font-size: 20px;
  margin-bottom: 15px;
}

.popup_actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popup_actions label {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
}

.popup_actions input {
  padding: 10px;
  width: 100%;
}

.popup_btn {
  margin-right: 10px;
  transition: 0.1s;
}

.popup_btn:hover {
  background: rgba(10, 124, 10, 0.76);
}
.popup_btn:last-child:hover {
  background: rgba(238, 9, 9, 0.76);
}
</style>
