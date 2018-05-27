function run() {
    $(window).scroll(function () {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test1 = 300;
        var scroll_pos_test2 = 600;
        var scroll_pos_test3 = 900;
        var scroll_pos_test4 = 1400;

        if (y_scroll_pos > scroll_pos_test1) {
            //    $("body").css("background-color","#000");
            $('.first-path').css("stroke-dashoffset", "0");
            $('.first-path').css("transition", "2s");
            // $('.first-path').css("transition-delay", "4s");


            $(function () {
                $(".transition-effect1").each(function (i, e) {
                    $(this).delay(i * 1500).fadeIn(100);

                });
                $(".fade-right1").each(function (i, e) {
                    $(this).animate({
                        left: 10,
                        opacity: "show"
                    }, 500);

                });
            });
        }

        if (y_scroll_pos > scroll_pos_test2) {
            //    $("body").css("background-color","#000");
            $('.second-path').css("stroke-dashoffset", "0");
            $('.second-path').css("transition", "1s");
            // $('.second-path').css("transition-delay", "6s");

            $('.third-path').css("stroke-dashoffset", "0");
            $('.third-path').css("transition", "1s");
            $('.third-path').css("transition-delay", "3s");

            $('.fourth-path').css("stroke-dashoffset", "0");
            $('.fourth-path').css("transition", "1s");
            $('.fourth-path').css("transition-delay", "3s");


            $(function () {
                $(".transition-effect2").each(function (i, e) {
                    $(this).delay(i * 10).fadeIn(100);
                    if (i == 1) {
                        $(this).animate({
                            left: 10,
                            opacity: "show"
                        }, 500);
                    }
                });
              
            });
        }

        if (y_scroll_pos > scroll_pos_test3) {
            $('.third-path').css("stroke-dashoffset", "0");
            $('.third-path').css("transition", "1s");
            // $('.third-path').css("transition-delay", "9s");

            $('.fourth-path').css("stroke-dashoffset", "0");
            $('.fourth-path').css("transition", "1s");
            // $('.fourth-path').css("transition-delay", "9s");


            $(function () {
                $(".transition-effect3").each(function (i, e) {
                    $(this).delay(i * 1500).fadeIn(100);
                });
            });
        }

        if (y_scroll_pos > scroll_pos_test4) {

            $('.fifth-path').css("stroke-dashoffset", "0");
            $('.fifth-path').css("transition", "1s");
            $('.fifth-path').css("transition-delay", "0.5s");

            $(function () {
                $(".transition-effect4").each(function (i, e) {
                    $(this).delay(i * 1500).fadeIn(100);

                });
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: 6666,
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now) + 'x');
                        },
                    });
                });
                $(".fade-right").each(function (i, e) {
                    $(this).animate({
                        left: 10,
                        opacity: "show"
                    }, 500);

                });
            });
        }

    });






    // $('.first-path').css("stroke-dashoffset", "0");
    // $('.first-path').css("transition", "1s");
    // $('.first-path').css("transition-delay", "3.3s");


    // $('.second-path').css("stroke-dashoffset", "0");
    // $('.second-path').css("transition", "1s");
    // $('.second-path').css("transition-delay", "6s");


    // $('.third-path').css("stroke-dashoffset", "0");
    // $('.third-path').css("transition", "1s");
    // $('.third-path').css("transition-delay", "9s");


    // $('.fourth-path').css("stroke-dashoffset", "0");
    // $('.fourth-path').css("transition", "1s");
    // $('.fourth-path').css("transition-delay", "9s");


    // $('.fifth-path').css("stroke-dashoffset", "0");
    // $('.fifth-path').css("transition", "1s");
    // $('.fifth-path').css("transition-delay", "12s");

};



// function resetAboutUs() {
//     $('.first-path').css("stroke-dashoffset", "700");
//     $('.first-path').css("transition", "0.1s");

//     $('.second-path').css("stroke-dashoffset", "500");
//     $('.second-path').css("transition", "0.1s");

//     $('.third-path').css("stroke-dashoffset", "400");
//     $('.third-path').css("transition", "0.1s");

//     $('.fourth-path').css("stroke-dashoffset", "200");
//     $('.fourth-path').css("transition", "0.1s");

//     $('.fifth-path').css("stroke-dashoffset", "200");
//     $('.fifth-path').css("transition", "0.1s");
// }