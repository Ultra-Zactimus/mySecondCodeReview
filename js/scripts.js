$(document).ready(function() {

  $("form#selections").submit(function(event){

    const firstAnswer = $("select#firstQuestion").val(); 
    const secondAnswer = $("select#secondOuestion").val();
    const thirdAnswer = $("select#thirdQuestion").val();
    const fourthAnswer = $("select#fourthQuestion").val();
    const fifthAnswer = $("select#fifthQuestion").val();

    $("userLangType").removeAttr("class");
    // if (firstAnswer === 'select' || secondAnswer === 'select' || thirdAnswer === 'select' || fourthAnswer === 'select' || fifthAnswer === 'select') { 
    //   $("#invalidEntry").show();
    //   $(".progLanguage").hide();
     if (firstAnswer === 'numbers' || secondAnswer === 'style' || thirdAnswer === 'old' || fourthAnswer === 'run' || fifthAnswer === 'mornings'){
      $(".progLanguage").show();
      $(".c-sharp").show()
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
    // } else if (firstAnswer === "select" || secondAnswer === "select" || thirdAnswer === "select" || fourthAnswer === "select" || fifthAnswer === "select") {
    //     $(".progLanguage").show();
    //     $("#userLangType").addClass("python");
    //     $("#userLangType").append("<p>You got C#!</p>");
      
    }

    event.preventDefault();

  });

});