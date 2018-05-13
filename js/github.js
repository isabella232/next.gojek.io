(function() {
  var gojeckAPI = "https://api.github.com/orgs/gojek-engineering/repos";
  $.getJSON(gojeckAPI, {
    format: "json"
  }).done(function(data) {
    var x = 5;
    $.each(data, function(i, item) {
      $("#list").append(
        '<div  href="#" class="list-group-item list-group-item-action d-flex flex-row align-items-center list-3 flex-wrap">' +
          '<div class="col-2 col-sm-2 col-xs-2 d-none d-sm-block">' +
          '<img class ="img-fluid" src="../img/sample-img-2.png" alt="Sample repository">' +
          "</div>" +
          '<div class="col-10 col-sm-7 col-xs-7 mt-3">' +
          '<a class ="text-success neosans-bold font-lg" href = ' +
          item.html_url +
          " target = _blank>" +
          item.name +
          "</a>" +
          '<p class="list-description font-xs">' +
          (item.description !== null ? item.description : "") +
          "</p>" +
          "</div>" +
          '<div class=" col-sm-3 col-xs-3">' +
          "<p>" +
          (item.language !== null
            ? '<i class ="fa fa-circle mr-2 blue-bullet"></i>' + item.language
            : "") +
          "</p>" +
          "</div>" +
          (i <= x - 1 ? '<hr class="list-item-divider">' : "") +
          "</div>"
      );

      if (i === x) {
        return false;
      }
    });
  });
})();
