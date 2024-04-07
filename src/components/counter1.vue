<template>
    <div>
        <div class="counter-value">
      {{ modelValue }}
    </div>
    <button @click="changeValue">
      click me
    </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['modelValue'])

const emit=defineEmits(['update:modelValue']);

function changeValue() {
    emit('update:modelValue', props.modelValue+1);
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