
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      image: 'https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg'
    }
  }
}).mount('#app');
