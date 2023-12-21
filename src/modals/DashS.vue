<template>
    <div class="back-f">
            
    <img
        class="fit-picture"
        src="../assets/photo_2023-12-20_08-29-58.jpg"/>
                  
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
        // Other necessary data properties...
      };
    },
    methods: {
      saveModel() {
        this.$router.push('/strategy');
      },
      goBack() {
        // Logic to go back, probably just router.go(-1)
        this.$router.go(-1);
      },
      simulateLoading() {
        const intervalId = setInterval(() => {
          if (this.progressValue < 100) {
            this.progressValue += 100; // Increment the progress
            this.progressStatus = 'Running...';
          } else {
            clearInterval(intervalId); // Stop the interval
            this.progressStatus = 'Done!'; // Update the status
            this.loadingComplete = true; // Reveal the data
            this.totalEpochs = this.calculateTotalEpochs(); // Calculate epochs if needed
            this.testDataMAE = '267.8345';
            this.trainingDataMAE = '211.3447';
            this.speedOfEpochs = '137ms/step',
            this.lossOfEpochs = '4.5743e-07',
            this.val_mae = '0.0167',
            this.val_loss = '6.5115e-04'
          }
        }, 1000); // Adjust interval as needed
      },
      calculateTotalEpochs() {
        // Implement logic to calculate the sum of epochs
        return 30; // Example static value
      }
    },
    mounted() {
      this.simulateLoading(); // Start the loading simulation when the component is mounted
    }
  };
  </script>
  
  <style>
  .back-f {
    margin-left: -25px;
    height: 900px;
    width: 1690px;
    background-color: #E5E4E4;
  }
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
    height: 894px;
    width: 1062px;
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
  