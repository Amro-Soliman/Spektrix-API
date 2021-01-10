$(document).ready(function(){


  // Initializes an array that is going to
  // contain the returned values from the API call.
     var resp = [];


   // Adds the Click-event-handler to the button
   // as well to prevent form submitting.
 $('#getFunds').click(function(e) {
 e.preventDefault();


   // Ajax call to the API.
$.ajax({
   type:"GET",
   // The content type as mentioned in the API documentaion [JSON, TEXT/XML].
   header: ['Content-Type: application/json text/xml'],
   // The end point that recieves the GET reqest.
   url:"https://system.spektrix.com/apitesting/api/v3/funds",

   success: function(data) {

    // Pushes and populates the earlier initializes array.
    resp.push(data);


    //Creates a div to contain the divs that are
    // going to be populated with fetched results.
     var div=document.createElement('div');
      $(div).addClass("data");
     document.getElementById('container').appendChild(div);


     // Loops through the fetched objects.
$.each(resp, function(i, val) {

           // Loops through the records within the fetched objects
           // and appends them to the earlier created div.
     for (i = 0; i < val.length; i++) {

         var res = val[i];
         // Creeats a div, embeding the fetched result
         // as well setting the html structure to the output data.
          $(".data").append('<div class="result"> <p> <span class="cl"> Id: </span>' + res.id + '</p>'
          + '<p> <span class="cl"> Name: </span>' + res.name + '</p>'
          + '<p> <span class="cl"> Description: </span>' + val[i].description + '</p> </div>' );

        // Unsets the resp array to prevent repeating of the fetched results
        // in case if user repeat the call to the API.           
       resp = undefined;
}
});
}          
});
});
});
