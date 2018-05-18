function getGithubRepo(count , sliderBool) {
    var gojeckAPI = "https://api.github.com/orgs/gojek-engineering/repos";
    $.getJSON(gojeckAPI,
        {
            format: "json"
        })
        .done(function (data) {
            var i,src;
            count === 10 ? src = '../img/sample-img-2.png' : src = 'img/sample-img-2.png';
            // if(count === 10){
            //     src = '../img/sample-img-2.png' ;
            // }
            // else{
            //     src = 'img/sample-img-2.png' ;
            // }
            
            for (i = 0; i < count; i++) {
                $("#opensourceCards").append(
                    '<div class="col-md-5 rounded">' +
                    '<div class="card border-0 mb-4 flex-row opensource-card">' +
                    '<img class="align-self-center p-3 " src="'+ src +'" alt="Sample repository">' +
                    '<div class="card-body">' +
                    '<h3 class="mb-0 opensource-card-title">' +
                    '<a class="text-dark" title = "' + data[i].name + '" href="https://github.com/gojek-engineering/go-ratelimit" target="_blank">' + data[i].name + '</a>' +
                    '</h3>' +
                    '<p class="opensource-card-description mb-auto">' + (data[i].description !== null ? data[i].description : "") + '</p>' +
                    ' </div>' +
                    ' </div>' +
                    '</div>'
                );
            }
          
            if(sliderBool){
                $('#opensourceCards').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 767,
                            settings: 'unslick'
                        }
                    ]
                });
            }

        });
}