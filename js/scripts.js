$(document).ready(function() {

  $("form#selections").submit(function(event){

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
      } 

      event.preventDefault();

      if (firstAnswer === 'numbers' && secondAnswer === 'style') {
        $(".resultsOne").show();
        $(".resultsTwo").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();
        
      } else if (firstAnswer === 'numbers' && thirdAnswer === 'old') {
        $(".resultsOne").show();
        $(".resultsTwo").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'numbers' && fourthAnswer === 'sit') {
        $(".resultsOne").show();
        $(".resultsTwo").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();
        
      } else if (firstAnswer === 'numbers' && fifthAnswer === 'mornings'){
        $(".resultsOne").show();
        $(".resultsTwo").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();
      }

      event.preventDefault();
      
      if (firstAnswer === 'letters' && secondAnswer === 'function') {
        $(".resultsTwo").show();
        $(".resultsOne").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && thirdAnswer === 'new') {
        $(".resultsTwo").show();
        $(".resultsThree").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fourthAnswer === 'walk'){
        $(".resultsTwo").show();
        $(".resultsThree").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fifthAnswer === 'evenings'){
        $(".resultsTwo").show();
        $(".resultsThree").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      }
   
    event.preventDefault();

  });

});