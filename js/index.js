$(function() {$('.box21').mouseover(
       function(){ $(this).addClass('red') },
)});
$(function(){
            /* 클래스 conatiner 안에 img 에 마우스를 올려놓으면 function 실행*/
            $(".content6 img").hover(function(){

                /* this(img를 뜻함)의 경로를 바꾼다. 어떤 경로? "src"의 경로를. 그리고 경로주소는 this(img)의 src 속성안에 있는 ".png"를 "_over.png"로 바꾼다. 즉, <img src="image.png"> 에서 <img src="image_over.png" 로 바뀌는 거임.*/
                $(this).attr("src", $(this).attr("src").replace(".png", "_on.png"));
            }, function(){
                /* 마우스 오버가 아니면 다음을 실행한다. this(img)의 src 경로를 "_over" 이라는 글자를 없앤다. "" 따옴표안에는 아무것도 없으니까 _over 글자를 뺀다는 의미. 즉, <img src="image_over.png"> 에서 <img src="image.png"> 가 된다.*/
                $(this).attr("src", $(this).attr("src").replace("_on",""));
            });

        });