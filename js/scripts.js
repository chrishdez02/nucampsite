
        $(function() {
            $(".carousel").carousel( { interval: 2000 } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play");
                } else {
                    $(".carousel").carousel("cycle");
                    $("#carouselButton").children("i").removeClass("fa-play");
                    $("#carouselButton").children("i").addClass("fa-pause"); 
                }
            });


        $("#reserve-campsite").click(function(){
            $("#reserveModal").modal({
                show: true
            })
        })

        $("#login-btn").click(function(){
            $("#loginModal").modal({
                show: true
            })
        })

        });
    