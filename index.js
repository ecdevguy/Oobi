import myJson from '/vocabList.json' assert {type: 'json'};

console.log(myJson.hskCharacters);

let errors = 0;

$(document).ready(() => {
  $('.pinyin-textbox').on('submit', () => {
    
      // prevents default behaviour
      // Prevents event propagation
      return false;
  });
});
$('.pinyin-textbox').keypress((e) => {

  // Enter key corresponds to number 13
  
  if (e.which === 13 && ($("#chinese-character").attr("pinyin") == $("#pinyin").val())) {
      //$('.pinyin-textbox').submit();
      let x = Math.floor((Math.random() * 13));
      $("#chinese-character").text(myJson.hskCharacters[x].chinese);
      $("#chinese-character").attr("pinyin", myJson.hskCharacters[x].pinyin)
      $("#pinyin").val("");
      $("#pinyin").attr("placeholder", "");
      $("#body").attr("class", "correct");
      let errors = 0;
  }
  else if (e.which === 13 && ($("#chinese-character").attr("pinyin") != $("#pinyin").val()) && errors < 5) {
    $("#pinyin").val("");
    $("#body").attr("class", "incorrect");
    errors++;
  }
  else if (errors == 5){
    $("#pinyin").val("");
    $("#pinyin").attr("placeholder", $("#chinese-character").attr("pinyin"));
    errors = 2;
  }

  

  
  
    /* if ($("#chinese-character").attr("pinyin") == $("#pinyin").val()){
      let x = Math.floor((Math.random() * 13));
      $("#chinese-character").text(myJson.hskCharacters[x].chinese);
      $("#chinese-character").attr("pinyin", myJson.hskCharacters[x].pinyin)
      $("#pinyin").val("");
      $("#pinyin").attr("placeholder", "");
    } */
})