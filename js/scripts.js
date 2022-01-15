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
        $(".resultsOne").hide();
        $(".resultsTwo").show();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'numbers' && fourthAnswer === 'run') {
        $(".resultsOne").hide();
        $(".resultsTwo").hide();
        $(".resultsThree").show();
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

        } else if (firstAnswer === 'letters' && thirdAnswer === 'tv') {
          $(".resultsTwo").hide();
          $(".resultsTwo").show();
          $(".resultsOne").hide();
          $("#invalidEntry").hide();

        } else if (firstAnswer === 'letters' && fourthAnswer === 'walk'){
          $(".resultsTwo").hide();
          $(".resultsTwo").hide();
          $(".resultsOne").show();
          $("#invalidEntry").hide();

        } else if (firstAnswer === 'letters' && fifthAnswer === 'evenings'){
          $(".resultsTwo").show();
          $(".resultsTwo").hide();
          $(".resultsOne").hide();
          $("#invalidEntry").hide();

        }
        
    event.preventDefault();

  });

});