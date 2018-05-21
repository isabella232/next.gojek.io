function run() {
    // $('.transition-one').css("opacity", "1");
    // $('.transition-one').css("transition-delay", "1s");
    // $('.transition-two').css("opacity", "1");
    // $('.transition-two').css("transition-delay", "5s");
    // console.log("about-us")
    // $('.transition-three').css("opacity", "1");
    // $('.transition-three').css("transition-delay", "4s");
    // $('.transition-four').css("opacity", "1");
    // $('.transition-four').css("transition-delay", "6s");
    $('.first-path').css("stroke-dashoffset", "0");
    $('.first-path').css("transition", "2s");
    $('.first-path').css("transition-delay", "3s");


    $('.second-path').css("stroke-dashoffset", "0");
    $('.second-path').css("transition", "2s");
    $('.second-path').css("transition-delay", "7s");


    $('.third-path').css("stroke-dashoffset", "0");
    $('.third-path').css("transition", "2s");
    $('.third-path').css("transition-delay", "12s");


    $('.fourth-path').css("stroke-dashoffset", "0");
    $('.fourth-path').css("transition", "2s");
    $('.fourth-path').css("transition-delay", "14s");


    $('.fifth-path').css("stroke-dashoffset", "0");
    $('.fifth-path').css("transition", "2s");
    $('.fifth-path').css("transition-delay", "15s");

};

function resetAboutUs(){
    $('.first-path').css("stroke-dashoffset", "700");
    $('.first-path').css("transition", "0.1s");

    $('.second-path').css("stroke-dashoffset", "500");
    $('.second-path').css("transition", "0.1s");

    $('.third-path').css("stroke-dashoffset", "400");
    $('.third-path').css("transition", "0.1s");

    $('.fourth-path').css("stroke-dashoffset", "200");
    $('.fourth-path').css("transition", "0.1s");

    $('.fifth-path').css("stroke-dashoffset", "200");
    $('.fifth-path').css("transition", "0.1s");
}