
function slide_popup(e) {
    var id = e.id;
    console.log("idall..", id)
    $(".floatingform iframe").attr("src", id);
    $(".floatingform").show();
    $(".backblack, .close-icon").css({ opacity: .7, 'visibility': 'visible', });
    $(".floatingform").animate({ 'right': '0px' }, 450, "swing");
    $("body").css({ overflow: 'hidden' });
    $(".adj-overflow, .adj-overflow-rc").css({ visibility: 'visible' });
  }
  
  function slide_popup2(e) {
    var id = e;
    console.log("id2..", id)
    $(".floatingform1 iframe2").attr("src", id);
    $(".floatingform1").show();
    $(".backblack1, .close-icon").css({ opacity: .7, 'visibility': 'visible', });
    $(".floatingform1").animate({ 'right': '0px' }, 450, "swing");
    $("body").css({ overflow: 'hidden' });
    $(".adj-overflow1, .adj-overflow-rc1").css({ visibility: 'visible' });
  }
  function slide_popup1(e) {
    var id = e;
    console.log("id1..", id)
    $(".floatingform iframe").attr("src", id);
    $(".floatingform").show();
    $(".backblack, .close-icon").css({ opacity: .7, 'visibility': 'visible', });
    $(".floatingform").animate({ 'right': '0px' }, 450, "swing");
    $("body").css({ overflow: 'hidden' });
    $(".adj-overflow, .adj-overflow-rc").css({ visibility: 'visible' });
  }
  
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('.backblack, .close-icon, .adj-overflow').css({ top: scroll });
  });
  
  // $("#close,#closeicon").click(function() {
  //   $(".floatingform").animate({'right' : '-1000px'}, 450, "swing");
  //   $(".backblack, .close-icon").css({opacity : 0,'visibility' : 'hidden',});
  //   $("body").css({overflow: 'visible'});
  //   $(".reporting-chart").fadeOut();
  //   setTimeout(function(){ $(".adj-overflow, .adj-overflow-rc").css({visibility:'hidden'})}, 500);
  // });
  function slide_close(e) {
    //  console.log("slide_close before")
    //  if($("#closeicon")){
    //   alert("hello")
    //   $("#closeicon").on("click",function () {
    //     $(".floatingform").animate({ 'right': '-1000px' }, 450, "swing");
    //     $(".backblack, .close-icon").css({ opacity: 0, 'visibility': 'hidden', });
    //     $("body").css({ overflow: 'visible' });
    //     $(".reporting-chart").fadeOut();
    //     setTimeout(function () { $(".adj-overflow, .adj-overflow-rc").css({ visibility: 'hidden' }) }, 500);
    //   });
    //  }
  
      $("#closeicon1").on("click",function () {
        $(".floatingform1").hide();
        $(".floatingform1").animate({ 'right': '-1000px' }, 450, "swing");
        $(".backblack1, .close-icon1").css({ opacity: 0, 'visibility': 'hidden', });
        $("body").css({ overflow: 'visible' });
        $(".reporting-chart1").fadeOut();
        setTimeout(function () { $(".adj-overflow1, .adj-overflow-rc1").css({ visibility: 'hidden' }) }, 500);
        console.log("slide_close after")

      });
 
  
  
 
  }
  $(window).on("scroll",function (event) {
    var scroll = $(window).scrollTop();
    $('.backblack1, .close-icon1, .adj-overflow1').css({ top: scroll });
  });

  function slide_close1() {
    console.log("slide_close1")
  
      $("#closeicon1").on("click",function () {
        $(".floatingform1").animate({ 'right': '-1000px' }, 450, "swing");
        $(".backblack1, .close-icon1").css({ opacity: 0, 'visibility': 'hidden', });
        $("body").css({ overflow: 'visible' });
        $(".reporting-chart1").fadeOut();
        setTimeout(function () { $(".adj-overflow1, .adj-overflow-rc1").css({ visibility: 'hidden' }) }, 500);
      });
    }
  
  
  
    // Remove row when delete btn is clicked
    
  
  
  function readURL(event) {
    if (event.target.files && event.target.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        // $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(event.target.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
  });
  
  function showaddpres(e) {
    var id=e;
    console.log("id11",id)
  
    $('body').on('click', '#AddMore', function () {
      if ($('.fam-detail-info').length <= 6) {
        console.log($('.fam-detail-info'));
        $('.fam-detail-info:last').clone().insertAfter('.fam-detail-info:last');
        $('.fam-detail-info:last').find('input').val('');
        $('.fam-detail-info:last').find('.remove-family-block').remove();
        $('.fam-detail-info:last').prepend(
          '<div class="remove-family-block" style="text-align:right;"><span class="remFamilyDet fa fa-times" style="color:#de2525;cursor:pointer;"></spna></div>'
        );
      } else {
        alert('Prescription information could not be added more than 7.');
      }
    });
    $('body').on('click', '.remFamilyDet', function () {
      $(this).parent().parent().remove();
    });
  
  }
  
  function addmore(e){
    var id_count = e;
    console.log("testt..id_count",id_count)
    $('.add').on('click', function() {
      var source = $('.form-holder:first'), clone = source.clone();
      clone.find(':input').attr('id', function(i, val) {
        return val + id_count;
      });
      clone.appendTo('.form-holder-append');
      id_count++;
    });
  
  // Removing Form Field
  $('body').on('click', '.remove', function() {
      var closest = $(this).closest('.form-holder').remove();
    });
  }
  
  function slide_submenu() {
    $(".m-opt").click(function () {
      $(".m-opt").removeClass("active");
      $(this).addClass("active");
  
      if ($(this).hasClass('m-item')) {
        $("#side-slider").css('display', 'block');
      }
      $('.menu-item-list').css('display', 'none');
      var item_num = $(this).attr('data-menu');
      $("#" + item_num).css('display', 'block');
    });
  
    window.addEventListener('mouseup', function (event) {
      var box = document.getElementById('side-slider');
  
      if (event.target != box && event.target.parentNode != box) {
        box.style.display = 'none';
  
      }
    });
  }
  
  
  
  
  
  
  