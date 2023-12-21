<template>
    <div class="todos-container">
      <h1>List of Models</h1>
      <div>

      </div>
      <ul>
        <div class="todo" v-for="(todo) in todos" :key="todo._id">
          <h2>{{ todo.title }}</h2>
          <button class="add-btn" @click="addCoinPair">
            <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
          </button>
          <!-- Pass todo.graphData as chart-data prop to each ChartStrat component -->
          <!-- <chart-strat :chart-data="todo.graphData" :options="chartOptions" v-if="todo.graphData"></chart-strat> -->
          <ChartStrat v-if="showChart" :chart-data="todo.graphData" :options="chartOptions" ></ChartStrat>

        </div>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ChartStrat from '../components/ChartStrat.vue';
  
  export default {
    data() {
      return {
        todos: [],
        chartOptions: {
          // Define your chart options here
        },
        showChart: false
      };
    },
    components: {
      ChartStrat
    },
    async mounted() {
      try {
        const todoResponse = await axios.get('http://localhost:8000/todos');
        this.todos = todoResponse.data;
  
        for (let todo of this.todos) {
          const graphResponse = await axios.get('http://127.0.0.1:8000/predictions');
          console.log(graphResponse.data);
          todo.graphData = {
            labels: graphResponse.data.dates,
            datasets: [{
              data: graphResponse.data.predictions,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
              // Add other dataset options here
            }]
          };
        }
        this.showChart = true;
      } catch (error) {
        console.error("There was an error:", error);
      }
    },
    methods: {
      // Define your methods here
      addCoinPair() {
        // Logic for addCoinPair
      }
    }
  };
  </script>
  
<style>
    .todo canvas {
    min-height: 400px; /* Adjust as needed */
    }
    .todos-container {
    width:900px;
    margin: 0 auto;
    padding: 20px;
    }
    .todo {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    min-height: 350px;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .todo h2 {
    margin: 0;
    color: #333;
    }
</style>