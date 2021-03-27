(function($) {
    var $nav   = $('#navArea');
    var $btn   = $('.toggle_btn');
    var $mask  = $('#mask');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
      } else {
        $nav.removeClass( open );
      }
    });
    // mask close
    $mask.on('click', function() {
      $nav.removeClass( open );
    });
  } )(jQuery);
  jQuery(function ($) {
    $('.js_accordion_title').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next().slideToggle(200);
      /*矢印の向きを変更*/
      $(this).toggleClass('open', 200);
    });
    
    });

    $(function(){
      $('.grid:not(.grid:first-of-type)').css('display','none');//一番上の要素以外を非表示
      $('.more').nextAll('.more').css('display','none');//ボタンを非表示
      $('.more').on('click', function() {
        $(this).css('display','none');//押したボタンを非表示
        $(this).next('.grid').slideDown('fast');
        $(this).nextAll('.more:first').css('display','block'); //次のボタンを表示
      });
    });
  
  
