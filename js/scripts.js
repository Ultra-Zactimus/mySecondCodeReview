$(document).ready(function() {

  $("form#selections").submit(function(event){

    const firstAnswer = $("select#numLet").val(); 
    const secondAnswer = $("select#stylFunc").val();
    const thirdAnswer = $("select#oldNew").val();
    const fourthAnswer = $("select#runWalk").val();
    const fifthAnswer = $("select#mornEven").val();

    $("userLangType").removeAttr("class");
    if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning"){
      $(".progLanguage").show();
      $(".userLangType").addClass("c-sharp");
      $(".userLangType").append("<p>You got C#!</p>");
    // } else if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning"){
    //   $(".progLanguage").show();
    //   $(".userLangType").addClass("c-sharp");
    //   $(".userLangType").append("<p>You got C#!</p>");
    // } else if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning"){
    //   $(".progLanguage").show();
    //   $(".userLangType").addClass("ruby");
    //   $(".userLangType").append("<p>You got C#!</p>");
    // } else if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning") {
    //   $(".progLanguage").show();
    //   $(".userLangType").addClass("ruby");
    //   $(".userLangType").append("<p>You got C#!</p>");
    // } else if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning") {
    //   $(".progLanguage").show();
    //   $(".userLangType").addClass("python");
    //   $(".userLangType").append("<p>You got C#!</p>");
    // } else if (firstAnswer === "numbers" && secondAnswer === "style" && thirdAnswer === "old" && fourthAnswer === "run" && fifthAnswer === "morning") {
    //   $(".progLanguage").show();
    //   $(".userLangType").addClass("python");
    //   $(".userLangType").append("<p>You got C#!</p>");
    } else {
      $("#invalidEntry").show();
      $(".progLanguage").hide();
    }

    event.preventDefault();

  });

});