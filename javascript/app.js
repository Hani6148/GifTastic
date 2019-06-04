var per= ["Goku","Naruto","Luffy","Sakura","Gohan","Itachi","Onizuka"];

var firebaseConfig = {
    apiKey: "AIzaSyAPxmAi2diLQeRonpMHy2aKtqddx-SlUWI",
    authDomain: "giffy-4bbd5.firebaseapp.com",
    databaseURL: "https://giffy-4bbd5.firebaseio.com",
    projectId: "giffy-4bbd5",
    storageBucket: "giffy-4bbd5.appspot.com",
    messagingSenderId: "867110631855",
    appId: "1:867110631855:web:b8dcf84009420f02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  


for(i=0;i<per.length;i++){
   var button=$("<button>");
   button.attr("class","button");
   button.attr("id",per[i]);
   button.text(per[i]);
   $(".show-button").append(button);
   

}
$(".add").on("click", function(){
    hero=$("#car-name").val();
    button=$("<button>");
    button.attr("class","button");
    button.attr("id",hero);
    button.text(hero);
    $(".show-button").append(button);
    });

$(document).on("click",".button", function(){
    hero=$(this).attr("id");
   
   getGifs(hero);
});





function getGifs(anime){
    
    $(".myclass").css("background-image","url(images/manga-.jpg)");
    $(".show-gif").empty();
    $(".myclass").css("height","fit-content");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        anime + "&api_key=uCYePs8WdVrhXcBsT6l9R6o9Z50aOXg7&limit=12";

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            
            .then(function(response) {
                console.log(response);
              var result = response.data;
            for(i=0;i<result.length;i++){
                var img=$("<img>");
                img.attr("class","image")
                // img.attr("data-still";)
                img.attr("src",result[i].images.fixed_height.url);
                
                $(".show-gif").append(img);
            }

});

}