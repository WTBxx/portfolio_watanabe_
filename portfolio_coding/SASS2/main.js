
//!--スライダー

    $(function () {
        // ローダー終了
        function end_loader() {
            $('.loader').fadeOut(800);
        }
        // テキスト表示
        function show_txt() {
            $('.loader .txt').fadeIn(400);
        }
        // テキスト非表示
        function hide_txt() {
            $('.loader .txt').fadeOut(400);
        }

        // タイマー処理
        $(window).on('load', function () {
            // 処理①
            setTimeout(function () {
                show_txt();
            }, 1000)
            // 処理②
            setTimeout(function () {
                hide_txt();
            }, 3500)
            // 処理③
            setTimeout(function () {
                end_loader();
            }, 4500)
        })
    })

    $(function () {
        $('.hamburger').on('click', function () {
            $('.sp-nav').fadeToggle();
            $('.hamburger').toggleClass('open');
        });
        $(function () {
            function sliderSetting() {

                var width = $(window).width();

                if (width <= 750) {
                    $('.slider').not('.slick-initialized').slick({
                        autoplay: true,
                        infinite: true,
                        speed: 500,
                        fade: true,
                        dots: true,
                        cssEase: 'linear',
                        arrows: false
                    });
                } else {
                    $('.slider.slick-initialized').slick('unslick');
                }
            }
            sliderSetting();
            $(window).resize(function () {
                sliderSetting();
            });
        });
    });
    $(function () {
        $(window).scroll(function () {
            scroll_effect();
        });
    });
    //ふわっとスクロール
    function scroll_effect() {
        var tt = $(window).scrollTop();
        var hh = $(window).height();
        $('.service-flame').each(function () {
            var yy = $(this).offset().top + 400;//効果発生開始タイミングを操作したい場合は数値を変更する
            if (tt > yy - hh) {
                $(this).addClass('done');
            }
        });
    }