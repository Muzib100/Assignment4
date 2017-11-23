$(document).ready(function() {


      var gems = [];
      var ran_num;
      var subTotal;
      var currentGem;
      var subTotal = 0;
      var win = 0;
      var loss = 0;
      startGame();

      function startGame() {
        
        console.log( "initial_subTotal: ", subTotal);
          randomNumb();
          buttonCreation();
          //Detect on click and display the crystals in separate place
          bindClick();
          //refresh the Display
          buildDisplay();
    }

    function randomNumb() {
      for(i = 0; i < 4; i++){
          gems[i] = Math.floor(Math.random() * 12) + 1;
        }
          //load random values from Computer between 19-120
        ran_num = Math.floor(Math.random() * 100) + 19;
        //initialize subTotal
        subTotal == 0;
          
      }

    function buildDisplay() {
      

      var ran_numDiv = document.getElementById ("xtal-values1");
      var gemValuesDiv = document.getElementById ("xtal-values2");
      var subTotalDiv = document.getElementById ("sub-total");
      var winsDiv = document.getElementById('wins');
      var lossesDiv = document.getElementById('losses');

      ran_numDiv.innerHTML = "   ran_num: " + ran_num;
      gemValuesDiv.innerHTML = " *******************";
      subTotalDiv.innerHTML = "subTotal: " + subTotal;

      winsDiv.innerHTML = 'wins: ' + win;
      lossesDiv.innerHTML = 'losses: ' + loss;
           
  }
  

     
    function buttonCreation() {
      for (var i = 0; i < gems.length; i++) {
        var gemBtn = $("<button>");
        
        //var gemClass = "gem" + i
        //gemBtn.addClass("gem-button gem-button-color " + gemClass);

        gemBtn.addClass("gem-button gem gem-button-color ");

        gemBtn.attr("data-gem", gems[i]);

        //Do not show value on the crystal : 
        //gemBtn.text(gems[i]);

        $("#buttons").append(gemBtn);

      }

    }

    function bindClick() {
      $(".gem-button").on("click", function() {

                var canvasMagnet = $("<div>");
                canvasMagnet.addClass("gem canvas-color");  

                var currentGem =$(this).attr("data-gem");
                canvasMagnet.text(currentGem);
                $("#display").append(canvasMagnet);
                
                subTotal = subTotal + parseInt(currentGem);
                if (subTotal > ran_num){
                  loss ++;
                  console.log(" subTotal is higher than ran_num : " + loss);
                }
                if (subTotal === ran_num) {
                  win ++;
                  console.log ("subTotal equals ran_num: " + win);
                }
  
                buildDisplay();

                addRemoveHandler(canvasMagnet);

      });
                //console.log("currentGem: " + currentGem);

              
    }

      $("#clear").on("click", function() {

        $("#display").empty();
        randomNumb();
        subTotal = 0;
        //console.log("inside clear: " + subTotal);
        buildDisplay();

      });

      // this function takes a canvas magnet and 
      // adds an event handler that allows it to 
      // be removed when it's clicked

           function addRemoveHandler(canvasMagnet) {
           canvasMagnet.on('click', function() {
               $(this).remove();
                })
           }
    
    });