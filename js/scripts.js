$(document).ready(function() {

  $("form#selections").submit(function(event) {

    const firstAnswer = $("select#firstQuestion").val();
    const secondAnswer = $("select#secondOuestion").val();
    const thirdAnswer = $("select#thirdQuestion").val();
    const fourthAnswer = $("select#fourthQuestion").val();
    const fifthAnswer = $("select#fifthQuestion").val();

    if (firstAnswer === 'select' || secondAnswer === 'select' || thirdAnswer === 'select' || fourthAnswer === 'select' || fifthAnswer === 'select') {
      $("#invalidEntry").show();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();


    } else if (firstAnswer === 'numbers' && secondAnswer === 'style' && thirdAnswer === 'old') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
  
    } else if (firstAnswer === 'numbers' && secondAnswer === 'style' && fourthAnswer === 'run') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
 
    } else if (firstAnswer === 'numbers' && secondAnswer === 'style' && fifthAnswer === 'morning') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
     
    } else if (firstAnswer === 'numbers' && thirdAnswer === 'old' && fourthAnswer === 'run') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
     
    } else if (firstAnswer === 'numbers' && thirdAnswer === 'style' && fifthAnswer === 'morning') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (firstAnswer === 'numbers' && fourthAnswer === 'run' && fifthAnswer === 'morning') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (secondAnswer === 'style' && thirdAnswer === 'old' && fourthAnswer === 'run') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (secondAnswer === 'style' && thirdAnswer === 'old' && fifthAnswer === 'morning') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
     
    } else if (secondAnswer === 'style' && fourthAnswer === 'run' && fifthAnswer === 'morning') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
     
    } else if (thirdAnswer === 'old' && fourthAnswer === 'run' && fifthAnswer === 'morning') {
      $("#invalidEntry").hide();
      $(".resultsOne").show();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (firstAnswer === 'letters' && secondAnswer === 'function' && thirdAnswer === 'new') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
   
    } else if (firstAnswer === 'letters' && secondAnswer === 'function' && fourthAnswer === 'walk') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (firstAnswer === 'letters' && secondAnswer === 'functions' && fifthAnswer === 'evening') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
   
    } else if (firstAnswer === 'letters' && thirdAnswer === 'new' && fourthAnswer === 'walk') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
   
    } else if (firstAnswer === 'letters' && thirdAnswer === 'function' && fifthAnswer === 'evening') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (firstAnswer === 'letters' && fourthAnswer === 'walk' && fifthAnswer === 'evening') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();

    } else if (secondAnswer === 'function' && thirdAnswer === 'new' && fourthAnswer === 'walk') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (secondAnswer === 'function' && thirdAnswer === 'new' && fifthAnswer === 'evening') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
    
    } else if (secondAnswer === 'function' && fourthAnswer === 'walk' && fifthAnswer === 'evening') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
   
    } else if (thirdAnswer === 'new' && fourthAnswer === 'walk' && fifthAnswer === 'evening') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").show();
      $(".resultsThree").hide();
      $(".resultsFour").hide();
      $("#selections").hide();
 
    } else if (firstAnswer === 'symbols' && secondAnswer === 'complex' && thirdAnswer === 'tv') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();
  
    } else if (firstAnswer === 'symbols' && secondAnswer === 'complex' && fourthAnswer === 'sit') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();
  
    } else if (firstAnswer === 'symbols' && secondAnswer === 'complex' && fifthAnswer === 'twilight') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();

    } else if (firstAnswer === 'symbols' && thirdAnswer === 'tv' && fourthAnswer === 'sit') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();

    } else if (firstAnswer === 'symbols' && thirdAnswer === 'tv' && fifthAnswer === 'twilight') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();
     
    } else if (firstAnswer === 'symbols' && fourthAnswer === 'sit' && fifthAnswer === 'twilight') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();
 
    } else if (secondAnswer === 'complex' && thirdAnswer === 'tv' && fourthAnswer === 'sit') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();
      
    } else if (secondAnswer === 'complex' && thirdAnswer === 'tv' && fifthAnswer === 'twilight') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();
   
    } else if (secondAnswer === 'complex' && fourthAnswer === 'sit' && fifthAnswer === 'twilight') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();

    } else if (thirdAnswer === 'tv' && fourthAnswer === 'sit' && fifthAnswer === 'twilight') {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").show();
      $(".resultsFour").hide();
      $("#selections").hide();

    } else {
      $("#invalidEntry").hide();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      $(".resultsFour").show();
      $("#selections").hide();
   
    }

      event.preventDefault();

  });

    $(".reset").click(function() {
      $("#selections").toggle().show();
      $(".resultsOne").toggle().hide();
      $(".resultsTwo").toggle().hide();
      $(".resultsThree").toggle().hide();
      $(".resultsFour").toggle().hide();
      document.getElementById('selections').reset();

    });

});
