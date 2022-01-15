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
        $("#invalidEntry").hide()

      } else if (firstAnswer === 'numbers' && secondAnswer === 'function') {
        $(".resultsTwo").hide();
        $(".resultsOne").show();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'numbers' && thirdAnswer === 'new') {
        $(".resultsTwo").hide();
        $(".resultsTwo").hide();
        $(".resultsOne").show();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'numbers' && fourthAnswer === 'walk'){
        $(".resultsTwo").show();
        $(".resultsTwo").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'numbers' && fifthAnswer === 'evenings'){
        $(".resultsTwo").hide();
        $(".resultsTwo").show();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fifthAnswer === 'style'){
        $(".resultsTwo").hide();
        $(".resultsTwo").hide();
        $(".resultsOne").show();
        $("#invalidEntry").hide();
      
      }else if (firstAnswer === 'letters' && fifthAnswer === 'old'){
        $(".resultsTwo").show();
        $(".resultsTwo").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fifthAnswer === 'run'){
        $(".resultsTwo").hide();
        $(".resultsTwo").show();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fifthAnswer === 'mornings'){
        $(".resultsTwo").hide();
        $(".resultsTwo").hide();
        $(".resultsOne").show();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fifthAnswer === 'function'){
        $(".resultsTwo").show();
        $(".resultsTwo").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();
     
      } else if (firstAnswer === 'letters' && fifthAnswer === 'new'){
        $(".resultsTwo").hide();
        $(".resultsTwo").show();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();

      } else if (firstAnswer === 'letters' && fifthAnswer === 'walk'){
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