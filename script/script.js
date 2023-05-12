$(function(){
    // 레이어팝업
    $(".layerPopup").on("click",function(){
        $(".popUp").fadeIn(); 
    });
    $(".close").on("click",function(){
        $(".popUp").fadeOut(); 
    });

    // .on : 이벤트 등록 메서드
    // .fadeIn -> 선택한 요소를 서서히 나타냄
    // .fadeOut -> 선택한 요소를 서서히 사라짐
});