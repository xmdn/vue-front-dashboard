<template>
    <div class="page-container">
        <div class="content">
            <div class="progress-container">
                <progress class="progress-bar" :value="progressValue" max="100"></progress>
                <p>Testing status: {{ progressStatus }}</p>
            </div>
            <div class="result-container">
                <div class="mae-container">
                    <div style="display: flex; flex-direction: row;">
                        <div>Training Data MAE: </div> <div v-if="loadingComplete">{{ trainingDataMAE }}</div>
                    </div>
                    <div style="display: flex; flex-direction: row;">
                        <div>Test Data MAE: </div><div v-if="loadingComplete">{{ testDataMAE }}</div>
                    </div>
                </div>
                <div class="epoch-container">
                    <div style="display: flex; flex-direction: row;">
                        <div>Epochs: </div> <div>{{ totalEpochs }}</div>
                    </div>
                    
                </div>
                <div class="val-container">
                    <div style="display: flex; flex-direction: row;">
                        <div style="margin-right: 8px;">
                            <div style="display: flex; flex-direction: row;">
                                <div>Speed of epochs: </div><div v-if="loadingComplete">{{ speedOfEpochs }}</div>
                            </div>
                            <div style="display: flex; flex-direction: row;">
                                <div>Loss per epochs: </div><div v-if="loadingComplete">{{ lossOfEpochs }}</div>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; flex-direction: row;">
                                <div>val_mae: </div><div v-if="loadingComplete">{{ val_mae }}</div>
                            </div>
                            <div style="display: flex; flex-direction: row;">
                                <div>val_loss: </div><div v-if="loadingComplete">{{ val_loss }}</div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <div class="img-container">
                    <div v-if="loadingComplete">
                        <img
                            class="fit-picture"
                            src="../assets/photo_2023-12-20_08-06-35.jpg"/>
                    </div>
                    Training data graph
                </div>
                <div class="img-container">
                    <div v-if="loadingComplete">
                        <img
                            class="fit-picture"
                            src="../assets/photo_2023-12-20_08-06-56.jpg"/>
                    </div>
                    Test data graph
                </div>
            <!-- Data and Graphs hidden until loading is complete -->
            <div class="group-btns" v-if="loadingComplete">
                <div>
                    <label>NAME:</label>
                    <input type="number" class="input-layers" />
                </div>
                <button class="save-btn" @click="saveModel">SAVE MODEL</button>
                <button class="back-btn" @click="goBack">BACK</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        progressValue: 0,
        progressStatus: 'Running...',
        loadingComplete: false,
        trainingDataMAE: null,
        testDataMAE: null,
        totalEpochs: null,
        speedOfEpochs: null,
        lossOfEpochs: null,
        val_mae: null,
        val_loss: null
      };
    },
    methods: {
      saveModel() {
        this.$router.push('/dash');
      },
      goBack() {
        this.$router.go(-1);
      },
      simulateLoading() {
        const intervalId = setInterval(() => {
          if (this.progressValue < 100) {
            this.progressValue += 10; 
            this.progressStatus = 'Running...';
          } else {
            clearInterval(intervalId); 
            this.progressStatus = 'Done!'; 
            this.loadingComplete = true; 
            this.totalEpochs = this.calculateTotalEpochs(); 
            this.testDataMAE = '267.8345';
            this.trainingDataMAE = '211.3447';
            this.speedOfEpochs = '137ms/step',
            this.lossOfEpochs = '4.5743e-07',
            this.val_mae = '0.0167',
            this.val_loss = '6.5115e-04'
          }
        }, 1000); 
      },
      calculateTotalEpochs() {
        return 30; 
      }
    },
    mounted() {
      this.simulateLoading(); 
    }
  };
  </script>
  
  <style>
  .input-layers {
      margin-left: 17px;
      width: 70px;
    }
  .group-btns {
      display:flex;
      justify-content: space-between;
      
      padding: 10px;
    }
  .save-btn {
    background-color: #10ff3a;
    border-radius: 9px;
  }
  .back-btn {
    background-color: #ff1024;
    border-radius: 9px;
  }
  .fit-picture {
    height: 200px;
    width: 800px;
  }
  .img-container {
    height: 236px;
    border: 1px solid;
    border-radius: 9px;
    border-color: #000000a6;
  }
  .result-container {
    align-items: center;
    justify-content: space-between;
    display: flex;
    height: 80px;
    border: 1px solid;
    border-radius: 9px;
    border-color: #000000a6;
  }
  .mae-container {
    margin-left: 5px;
    height: 63px;
    width: 248px;
    border: 1px solid;
    border-radius: 9px;
    border-color: #000000a6;
  }
  .epoch-container {
    height: 63px;
    width: 165px;
    border: 1px solid;
    border-radius: 9px;
    border-color: #000000a6;
  }
  .val-container {
    margin-right: 5px;
    height: 63px;
    width: 376px;
    border: 1px solid;
    border-radius: 9px;
    border-color: #000000a6;
  }
  .progress-container {
    border: 1px solid;
    border-radius: 9px;
    /* Style your progress bar and status text */
  }
  .progress-bar {
    margin-top: 7px;
    height: 7px;
    width: 100%;
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
      height: 950px;
      width: 850px;
    }
  </style>
  