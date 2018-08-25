$(document).ready(function () {
  $("#target_score").text(0);
  $("#wins").text(0);
  $("#loss").text(0);
  $("#user_score").text(0);

  var compChoice;
  var C1, C2, C3, C4;
  var userScore = 0;
  var win = 0;
  var loss = 0;

  $("#newGame").click(startGame);

  $("#img1").on({
      click: function () {
          userScore = userScore + C1;
          $("#user_score").text(userScore);

          if (userScore === compChoice) {
              win++;
              $("#wins").text(win);

              startGame();
          }

          if (userScore > compChoice) {
              loss++;
              $("#loss").text(loss);

              startGame();
          }
      }
  });

  $("#img2").on({
      click: function () {
          userScore = userScore + C2;
          $("#user_score").text(userScore);

          if (userScore === compChoice) {
              win++;
              console.log(win);
              $("#wins").text(win);

              startGame();
          }

          if (userScore > compChoice) {
              loss++;
              $("#loss").text(loss);

              startGame();
          }
      }
  });

  $("#img3").on({
      click: function () {
          userScore = userScore + C3;
          $("#user_score").text(userScore);

          if (userScore === compChoice) {
              win++;
              console.log(win);
              $("#wins").text(win);

              startGame();
          }

          if (userScore > compChoice) {
              loss++;
              $("#loss").text(loss);

              startGame();
          }
      }
  });

  $("#img4").on({
      click: function () {
          userScore = userScore + C4;
          $("#user_score").text(userScore);

          if (userScore === compChoice) {
              win++;
              console.log(win);
              $("#wins").text(win);

              startGame();
          }

          if (userScore > compChoice) {
              loss++;
              $("#loss").text(loss);

              startGame();
          }
      }
  });

  function startGame() {
      compChoice = 0;
      userScore = 0;
      compChoice = Math.floor(Math.random() * 121) + 19;
      C1 = Math.floor(Math.random() * 13) + 1;
      C2 = Math.floor(Math.random() * 13) + 1;
      C3 = Math.floor(Math.random() * 13) + 1;
      C4 = Math.floor(Math.random() * 13) + 1;

      if (C1 == C2 || C1 == C3 || C1 == C4) {
          C1 = Math.floor(Math.random() * 13) + 1;
      }
      if (C2 == C3 || C2 == C4) {
          C2 = Math.floor(Math.random() * 13) + 1;
      }
      if (C3 == C4) {
          C3 = Math.floor(Math.random() * 13) + 1;
      }
      console.log(C1);
      console.log(C2);
      console.log(C3);
      console.log(C4);

      $("#target_score").text(compChoice);
      $("#user_score").text(userScore);
  }
});