// Start SVG JS
$(document).ready(function() {

  var insuranceSavings = {
    "AL": 0,
    "AK": 0,
    "AZ": 1,
    "AR": 0,
    "CA": 0,
    "CO": 0,
    "CT": 0,
    "DE": 0,
    "DC": 2,
    "FL": 0,
    "GA": 7,
    "HI": 0,
    "ID": 0,
    "IL": 0,
    "IN": 0,
    "IA": 0,
    "KS": 0,
    "KY": 0,
    "LA": 0,
    "ME": 0,
    "MD": 25,
    "MA": 0,
    "MI": 0,
    "MN": 0,
    "MS": 0,
    "MO": 0,
    "MT": 0,
    "NE": 0,
    "NV": 0,
    "NH": 0,
    "NJ": 0,
    "NM": 0,
    "NY": 0,
    "NC": 3,
    "ND": 0,
    "OH": 0,
    "OK": 0,
    "OR": 0,
    "PA": 1,
    "RI": 0,
    "SC": 1,
    "SD": 0,
    "TN": 0,
    "TX": 2,
    "UT": 0,
    "VT": 0,
    "VA": 1,
    "WA": 0,
    "WV": 0,
    "WI": 0,
    "WY": 0
  }

  $('#map').usmap({

    'stateStyles': {
      fill: "#fff",
      stroke: "#000",
      "stroke-width": 1,
      "stroke-linejoin": "round",
      scale: [1, 1]
    },

    'stateHoverStyles': {
      fill: "#9E0B0F",
      stroke: "#000",
      scale: [1, 1]
    },
    stateSpecificStyles: {
      'AZ': {
        fill: '#DD9933'
      },
      'DC': {
        fill: '#DD9933'
      },
      'GA': {
        fill: '#DD9933'
      },
      'MD': {
        fill: '#DD9933'
      },
      'NC': {
        fill: '#DD9933'
      },
      'PA': {
        fill: '#DD9933'
      },
      'SC': {
        fill: '#DD9933'
      },
      'TX': {
        fill: '#DD9933'
      },
      'VA': {
        fill: '#DD9933'
      },
    },
    'mouseover': function(event, data) {

      var state = (data.name);

      $('#state')
        .text(state)

      $('#average')
        .text("" + insuranceSavings[state])

      $('#savings')
        .text("$" + Math.round(insuranceSavings[state] * .2))

      .stop()
    },

  });

});

setTimeout(function() {
  $('.map-pop').fadeOut(2000);
}, 5000);
// End SVG JS 

// Start Type JS 
$(document).ready(function() {

  (function($) {

    $.fn.TypeByLetter = function(speed) {

      return this.each(function() {

        if (speed == undefined) {
          speed = 200
        }
        var text = $(this).text().split("");
        $(this).text("");
        var $object = $(this);

        function type(i) {
          i = i || 0;
          $object.append(text[i]);
          if (i < text.length) {
            setTimeout(function() {
              type(i)
            }, speed);
            i++;
          }
        }

        type(0);

      });

    };

  })(jQuery);

  $('span.typebyletter').TypeByLetter(50);

});
// End Type JS