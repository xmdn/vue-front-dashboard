<template>
    <div class="page-container">
      <div class="content">
        <div class="dense-unit-row">
          <div class="dense-unit-column">
              <!-- Dense Units -->
            <div v-for="(unit, index) in denseUnits" :key="index" class="dense-unit">
              <label>Dense layers:</label>
              <input type="number" class="input-layers" v-model="unit.layers" />
              <button v-if="index > 0" class="btn-del" @click="removeDenseUnit(index)">x</button>
            </div>
            <button class="btn-add" @click="addDenseUnit" :disabled="denseUnits.length >= 5">ADD</button>

      
            <!-- Other controls... -->
            
            <!-- Exit Layers -->
            <div class="exit-unit">
              <label>Exit layers:</label>
              <select v-model="exitLayers">
                <option v-for="number in 10" :key="number" :value="number">{{ number }}</option>
              </select>
            </div>
          </div>
          <div class="dense-unit-column">
              <!-- Dense Units -->
              <div class="dense-unit">
              <label>Activator:</label>
              <select v-model="activator">
                <option>Tanh</option>
                <option>Relu</option>
                <option>Sigmoid</option>
                <!-- add other options -->
              </select>
            </div>
            
            <!-- Activator and Optimizer Selection -->
            <div class="dense-unit">
              <label>Optimizer:</label>
              <select v-model="optimizer">
                <option>SGD</option>
                <option>Adam</option>
                <option>Momentum</option>
                <option>Nesterov</option>
                <option>Adagrad</option>
                
                <!-- add other options -->
              </select>
            </div>
      
            <!-- Other controls... -->
            
            <!-- Exit Layers -->
            <div v-for="(unit, index) in batchUnits" :key="index" class="dense-unit">
              <label>Batch size:</label>
              <input type="number" class="input-layers" v-model="unit.layers" />
            </div>
            <div v-for="(unit, index) in epochsUnits" :key="index" class="dense-unit">
              <label>Epochs:</label>
              <input type="number" class="input-layers" v-model="unit.layers" />
            </div>
          </div>
        </div>
        
        
  
        <!-- Action Buttons -->
        <div class="group-btns">
          <button class="btn-start" @click="startTest">START TEST</button>
          <button class="btn-remove" @click="removeModal">REMOVE</button>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        denseUnits: [{ layers: 3 }],
        batchUnits: [{ layers: 200 }],
        epochsUnits: [{ layers: 50 }],
        activator: 'Tanh',
        optimizer: 'Adam',
        exitLayers: 1,
        // Other necessary data properties...
      };
    },
    methods: {
      addDenseUnit() {
        if (this.denseUnits.length < 5) {
          this.denseUnits.push({ layers: 3 });
        }
      },
      removeDenseUnit(index) {
        this.denseUnits.splice(index, 1);
      },
      startTest() {
        // Implement test start logic
        this.$router.push('/strategy');
      },
      removeModal() {
        this.$router.go(-1); // Go back to previous page
      }
    }
  };
  </script>
  
  <style scoped>
  
  .dense-unit-row {
      display: flex;
      justify-content: space-between;
    }

    .dense-unit-column {
      flex: 1; /* Each column takes up equal space */
      padding: 10px; /* Optional padding for spacing */
    }
    .page-container {
      width: 900px; /* Adjust as needed */
      margin: 0 auto;
      padding: 20px;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      background-color: #f9f9f9;
      border: 1px solid #ddd;
      padding: 15px;
      position: relative;
      margin-bottom: 10px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      height: 460px;
      width: 670px;
    }
    .btn-start {
      display:block;
      width: 165px;
      height: 35px;
      border-radius: 9px;
      background-color: #4324FF;
    }
    .btn-remove {
      display:block;
      width: 165px;
      height: 35px;
      border-radius: 9px;
      background-color: #FF2424;
    }
    .btn-del {
      width: 25px;
      height: 25px;
      background-color: #FF2424;
      border-radius: 15px;
      vertical-align: middle;
    }
    .group-btns {
      display:flex;
      justify-content: space-between;
      
      padding: 10px;
    }
    .dense-unit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      height: 61px;
      border-radius: 12px;
      border: 1px solid;
      border-color: #000000a6;
      padding: 8px;
    }
    .exit-unit {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 170px;
      height: 61px;
      border-radius: 12px;
      border: 1px solid;
      border-color: #000000a6;
      padding: 8px;
    }
    .input-layers {
      margin-left: 17px;
      width: 70px;
    }
    .btn-add {
      background-color: #4324FF;
      border-radius: 12px;
      margin-top: 3px;
      position: relative;
      left: 20%;
      /* right: 50%; */
      height: 32px;
      width: 70px;
    }
  </style>
  