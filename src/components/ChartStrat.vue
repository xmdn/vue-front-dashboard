<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from 'vue';
  import { Line } from 'chart.js';
  
  export default defineComponent({
    props: {
      chartData: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props) {
      const canvasRef = ref(null);
      let chartInstance = null;
  
      onMounted(() => {
        if (!canvasRef.value) return;
        chartInstance = new Line(canvasRef.value, {
          data: props.chartData,
          options: props.options
        });
      });
  
      return {
        canvas: canvasRef
      };
    }
  });
  </script>
  