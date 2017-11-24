// Only runs after page is loaded
$(document).ready(function() {
  
	// Makes sure all the user information is hidden to begin
  $(".user-purchase").hide().fadeIn(3000).fadeOut(3000);
  //// Only runs after element is loaded
  $(".user-purchase").ready(function() {
		//function to capitalize first letter of each word as the API sends everything lowercase 
    $.fn.capitalize = function() {

      return this.each(function() {
        var $this = $(this),
          text = $this.text(),
          tokens = text.split(" ").filter(function(t) {
            return t != "";
          }),
          res = [],
          i,
          len,
          component;
        for (i = 0, len = tokens.length; i < len; i++) {
          component = tokens[i];
          res.push(component.substring(0, 1).toUpperCase());
          res.push(component.substring(1));
          res.push(" "); // put space back in
        }
        $this.text(res.join(""));
      });
    };
		// Calls the API and data
    $.ajax({
    	// You can customize nationality, gender and do much more
      // Check out the documentation for more info here
      // https://randomuser.me/documentation
      
      // Calling API and specifying nationalities US, AU & NZ to be generated
      url: 'https://randomuser.me/api/?nat=us,au,nz,gb&gender=female',
      dataType: 'json',
      success: function(data) {
				
        //just to shorten code when calling each variable
        var api = data.results["0"];
				
        // You can call mutiple variables like first name, last name, city, state and post code
        // For more info check out the Results section https://randomuser.me/
        // Below are are few examples of what has been added in so far
        
        //Requests first name and adds it to the ID fName
        $('#fName').html(api.name.first);
        //Requests city and adds it to the ID city
        $('#city').html(api.location.city);
         //Requests state and adds it to the ID state
        $('#state').html(api.location.state);
         //Requests user image and adds it to the link to the img tag with the class user-pic 
        $('#user-pic').attr("src", api.picture.medium);

				// Capitalizes variables first name, city and state
        $('#fName,#city,#state').capitalize();
      }

    });
		// Function to generate a date between 2 dates
    function randomDate(start, end) {
      var genDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	  //var formattedDate = dateFormat(genDate, "dddd, mmmm dS yyyy 'at' h:MMTT");
      $('#user-date').append(genDate);

    }
		
    // creating old date
    var daysAgo = new Date();
    // Amount of days ago - you can change this to however many days you would like 
    var days = 3;
    daysAgo.setDate(daysAgo.getDate() - days);
		
    //calls the randomDate function to call a date between the daysAgo you set and today
    randomDate(daysAgo, new Date());
		
    // fades in all the information 3 seconds (3000 miliseconds) after the page and element has loaded
    $(".user-purchase").hide().fadeIn(3000); //animating
  });
});

// countdown-timer.js
 function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  var total_items = 50;
  var d = new Date();
  var min_items_left = 12;
  var max_items_left = 20;
  var remaining_items = randomIntFromInterval(min_items_left, max_items_left);
  var min_of_remaining_items = 1;
  var decrease_after = 1.7;
  var decrease_after_first_item = 0.17;
  (function($) {
      $.fn.progressbar = function() {
          var a = "<p>Hurry! Only <span class='count'>" + remaining_items + "</span> left in stock.</p>" + "<div class='progressbar '><div style='width:100%'></div></div>";
          this.addClass('items-count');
          this.html(a + this.html());
          updateMeter(this);
          var b = this;
          setTimeout(function() {
              remaining_items--;
              if (remaining_items < min_of_remaining_items) {
                  remaining_items = randomIntFromInterval(min_items_left, max_items_left);
              }
              $('.count').css('background-color', '#CE0201');
              $('.count').css('color', '#fff');
              setTimeout(function() {
                  $('.count').css('background-color', '#fff');
                  $('.count').css('color', '#CE0201');
              }, 1000 * 60 * 0.03);
              b.find(".count").text(remaining_items);
              updateMeter(b);
          }, 1000 * 60 * decrease_after_first_item);
          setInterval(function() {
              remaining_items--;
              if (remaining_items < min_of_remaining_items) {
                  remaining_items = randomIntFromInterval(min_items_left, max_items_left);
              }
              $('.count').css('background-color', '#CE0201');
              $('.count').css('color', '#fff');
              setTimeout(function() {
                  $('.count').css('background-color', '#fff');
                  $('.count').css('color', '#CE0201');
              }, 1000 * 60 * 0.03);
              b.find(".count").text(remaining_items);
              updateMeter(b);
          }, 1000 * 60 * decrease_after);
      };
      function updateMeter(a) {
          var b = 100 * remaining_items / total_items;
          if (remaining_items < 10) {
              a.find('.progressbar div:first').addClass('less-than-ten');
          }
          a.find('.progressbar').addClass('active progress-striped');
          setTimeout(function() {
              myanimate(a.find('.progressbar div:first'), b);
               //This has been commented out so that the stripes would show and animate continuously
               //a.find('.progressbar').removeClass('active progress-striped');
          }, 1000);
      }
  }(jQuery));
  function myanimate(a, b) {
      var c = 0;
      var d = parseInt(a.closest('.progressbar').css('width'));
      var e = Math.floor(100 * parseInt(a.css('width')) / d);
      if (e > b) {
          c = e;
      }
      function frame() {
          if (e > b) {
              c--;
          } else {
              c++;
          }
          a.css('width', c + '%');
          if (c == b || c <= 0 || c >= 100) clearInterval(f);
      }
      var f = setInterval(frame, 40);
  }
  jQuery.noConflict()(function($) {
      $(document).ready(function() {
          $("#progress_bar").progressbar();
          var tag = "ctdn-12-12".match(/\d+/g);
          var hour = 14;
          var theDaysBox = $("#numdays");
          var theHoursBox = $("#numhours");
          var theMinsBox = $("#nummins");
          var theSecsBox = $("#numsecs");
          var d = new Date();
          var n = d.getDay();
          var date = 1;
          var gg = 0;
          var hh = 0;
          var ii = 0;
          var nsec = 0 - d.getSeconds();
          if (nsec < 0) {
              nsec = 60 - d.getSeconds();
              gg = 1;
          }
          var nmin = 0 - d.getMinutes() - gg;
          if (nmin < 0) {
              nmin = 60 - d.getMinutes() - gg;
              hh = 1;
          }
          var nhrs = 14 - d.getHours() - hh;
          if (nhrs < 0) {
              nhrs = 38 - d.getHours() - hh;
              ii = 1;
          }
          var ndat = date - 1;
          if (ndat < 0) {
              var mmon = d.getMonth();
              ndat = 30 + date - d.getDate() - ii;
          }
          theSecsBox.html(nsec);
          theMinsBox.html(nmin);
          theHoursBox.html(nhrs);
          theDaysBox.html(ndat);
          var refreshId = setInterval(function() {
              var e = theSecsBox.text();
              var a = theMinsBox.text();
              var c = theHoursBox.text();
              var b = theDaysBox.text();
              if (e == 0 && a == 0 && c == 0 && b == 0) {} else {
                  if (e == 0 && a == 0 && c == 0) {
                      theDaysBox.html(b - 1);
                      theHoursBox.html("23");
                      theMinsBox.html("59");
                      theSecsBox.html("59");
                  } else {
                      if (e == 0 && a == 0) {
                          theHoursBox.html(c - 1);
                          theMinsBox.html("59");
                          theSecsBox.html("59");
                      } else {
                          if (e == 0) {
                              theMinsBox.html(a - 1);
                              theSecsBox.html("59");
                          } else {
                              theSecsBox.html(e - 1);
                          }
                      }
                  }
              }
          }, 1000);
      });
  });