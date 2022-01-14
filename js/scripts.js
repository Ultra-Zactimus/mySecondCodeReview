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
      $(".progLanguage").hide();
      } 
      event.preventDefault();

      if (firstAnswer === 'numbers' || secondAnswer === 'style' || thirdAnswer === 'old' || fourthAnswer === 'run' || fifthAnswer === 'mornings') {
        $(".progLanguage").show();
        let progOne = "You should learn C#!!!";
        return progOne;
      }
   

    event.preventDefault();

  });

});