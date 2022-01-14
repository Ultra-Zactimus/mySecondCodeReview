$(document).ready(function() {

  $("form#selections").submit(function(){

    const firstAnswer = $("select#numLet").val(); 
    const secondAnswer = $("select#stylFunc").val();
    const thirdAnswer = $("select#oldNew").val();
    const fourthAnswer = $("select#runWalk").val();
    const fifthAnswer = $("select#mornEven").val();

    if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning"){
      $(".progLanguage").show();
      $(".userLangType").append("<p>You got C#!</p>")
    } else if (){
      $(".progLanguage").show();
    } else if (){
      $(".progLanguage").show();
    } else if () {
      $(".progLanguage").show();
    } else if () {
      $(".progLanguage").show();
    } else if () {
      $(".progLanguage").show();
    } else {
      $("#invalidEntry").show();
      $(".progLanguage").hide();
    }

  });

});