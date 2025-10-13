<template>
  <label class="switch">
    <input type="checkbox" :checked="modelValue" @change="handleChange">
    <span class="slider"></span>
  </label>
</template>

<script setup>
// Define as propriedades que o componente aceita
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

// Define os eventos que o componente pode emitir
const emit = defineEmits(['update:modelValue']);

// Função chamada quando o valor do checkbox muda
const handleChange = (event) => {
  emit('update:modelValue', event.target.checked);
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--cor-glass-bg);
  border: 1px solid var(--cor-glass-border);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: var(--cor-texto-secundario);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--cor-laranja-destaque);
  border-color: var(--cor-laranja-destaque);
}

input:checked + .slider:before {
  background-color: var(--cor-fundo);
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}
</style>