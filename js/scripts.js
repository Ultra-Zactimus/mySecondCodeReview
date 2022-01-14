$(document).ready(function() {

  $("form#selections").submit(function(event){

    const firstAnswer = $("select#firstQuestion").val(); 
    const secondAnswer = $("select#secondOuestion").val();
    const thirdAnswer = $("select#thirdQuestion").val();
    const fourthAnswer = $("select#fourthQuestion").val();
    const fifthAnswer = $("select#fifthQuestion").val();

    $("userLangType").removeAttr("class");
    if (firstAnswer === 'select' || secondAnswer === 'select' || thirdAnswer === 'select' || fourthAnswer === 'select' || fifthAnswer === 'select') { 
      $("#invalidEntry").show();
      $(".resultsOne").hide();
      $(".resultsTwo").hide();
      $(".resultsThree").hide();
      } 
      event.preventDefault();

      if (firstAnswer === 'numbers' || secondAnswer === 'style' || thirdAnswer === 'old' || fourthAnswer === 'run' || fifthAnswer === 'mornings') {
        $(".resultsOne").show();
        $(".resultsTwo").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();
        
      } else if (firstAnswer === 'letters' || secondAnswer === 'function' || thirdAnswer === 'new' || fourthAnswer === 'walk' || fifthAnswer === 'evenings') {
        $(".resultsTwo").show();
        $(".resultsOne").hide();
        $(".resultsThree").hide();
        $("#invalidEntry").hide();
      } else if (firstAnswer === 'symbols' || secondAnswer === 'complex' || thirdAnswer === 'tv' || fourthAnswer === 'sit' || fifthAnswer === 'twilight') {
        $(".resultsThree").show();
        $(".resultsTwo").hide();
        $(".resultsOne").hide();
        $("#invalidEntry").hide();
      }
   

    event.preventDefault();

  });

});