$(function () {
    var $content = $('#jsonContent');
    var data = {
        rss_url: 'https://blog.gojekengineering.com/feed'
    };
    jQuery.get('https://api.rss2json.com/v1/api.json', data, function (response) {
        if (response.status == 'ok') {
            console.log(response)
            var output = '';
            $.each(response.items, function (k, item) {
                if (k < 6) {

                    output += '<div class="col-md-6 col-lg-4">';
                    output += '<div class=" card border-0">';
                    output += '<div class="card-body px-0">';

                    // output += '<p class="card-text text-success blog-card-data">'+ $.format.date(item.pubDate, "dd/MMM") +'</p>';

                    output += '</div>';
                    var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
                    var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
                    var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
                    var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
                    var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
                    output += '<img class="card-img-top rounded-0" src="' + src + '"alt="Card image cap"';
                    output += '<div class="card-body px-0">';
                    output += '<h5 class="card-title blog-card-data"><a class="card-link text-black" target = "_blank" href="' + item.link + '">' + item.title + '</a></h5>';

                    output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';

                    var yourString = item.description.replace(/<img[^>]*>/g, ""); //replace with your string.
                    var maxLength = 120 // maximum number of characters to extract
                    //trim the string to the maximum length
                    var trimmedString = yourString.substr(0, maxLength);
                    //re-trim if we are in the middle of a word
                    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                    output += '<p>' + trimmedString + '...</p>';
                    output += '</div></div></div>';
                    return k < 6;

                    // akash end
                }
            });
            $content.html(output);
        }
    });
});


