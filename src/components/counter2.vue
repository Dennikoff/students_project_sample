<template>
    <div>
        <div class="counter-value">
      {{ counter }}
    </div>
    <button @click="changeValue">
      click me
    </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    counter: Number
})

const emit=defineEmits(['counterChange']);

function changeValue() {
    emit('counterChange', 2);
}

</script>

<style scoped lang="scss">
.counter-value {
  font-size: 2rem;
  font-weight: 700;
}


button {
  margin-top: 3rem;
}
</style>