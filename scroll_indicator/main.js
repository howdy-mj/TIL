(function () {

    window.onscroll = function () {

    	// 스크롤 위치
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        // 전체 컨텐츠의 높이를 의미
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        // console.log(scrollHeight);

        // 현재 눈에 보이는 브라우저의 높이값
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // console.log(clientHeight);

        // contentHeight : 눈에 보이지 않는 남은 범위
        var contentHeight =  scrollHeight - clientHeight;
        var scrollBar = (scrollTop / contentHeight) * 100;

        document.getElementById('scroll-bar').style.width = scrollBar + '%';

    };

})();