window.addEventListener('load', () =>{
        let h; // 윈도우의 높이
        let n; // 메뉴의 인덱스
        let pageList = []; // 페이지를 배열로 선언
        let moving = false;

        const container = document.getElementsByClassName("container")[0];
        let menu // 메뉴
        let menuList // 버튼들의 집합

        for(let i =0; i<container[i].children.length; i++ ){
            if(container.children[i].tagName === 'DIV'){
                pageList.push(container.children[i]);
            }else{
                menu = container.children[i]
                menuList = menu.children
            }
        }

        //console.log(menuList);

        function init(){//화면의 높이 설정, 첫화면에서 애미메이션 동작

            h = window.innerHeight; // 창 높이 설정
            for(let i = 0; i<pageList.length; i++){
            pageList[i].style.heigtht = h + 'px';
            if(i !=0){
                pageList[i].style.top = h + 'px'
            }else{
                pageList[i].style.top = 0 + 'px'
                setTimeout(layoutInit, 400);//메인타이틀 애니메이션 호출
            }
        }   
    }


    init(); // 처음에 시작하는 함수 호출
    window.addEventListener('resize', init)//화면 크기에 따른 높이 변화

    function layoutInit(){
        moving = false;
        if(let i = 0; i<pageList.length; i++){
            if(i==n){
            pageList[i].classList.add('active');
            menuList[i].classList.add('active');
            }else{
            pageList[i].classList.remove('active');
            menuList[i].classList.add('on');
            }
        }
    } 

//스크롤 메뉴

for(i = 0; i<menuList.length; i++){
    menuList[i].index = i;

    menuList[i].addEventListener('click', (e) => {
        e.preventDefault();
        if(moving) return; // 상태값이 false이므로 다음줄로 이동
        moving = true; // 다시 클릭시 위에 조건문에 의해 실행되지 않도록 함

        if(n==e.currentTarget.index) return;
        n = e.currentTarget.index //현제 클릭한 버튼의 인덱스
        h = window.innerHeight; //해당 되는 sub들을 화면 높이의 아래쪽으로 이동 위치 

        for(let j =0; j<pageList.length; j++ ){//0 1 2 3 4 5
            if(j ==n){ // n =2 => pageList[2]
                setTimeout(layoutInit, 400);//sub 움직임은 스타일 이용 움직임
            }else{
                pageList[j].style.top = h + "px";
            }
        }
    })


}

//마우스 휠 이벤트
let total = pageList.length-1;//전체 리스트 개수 변수
document.addEventListener('mousewheel', (e) => {
    if(moving) return;
    moving= true;

    if(e.deltaY < 0){
        if(n >0){
            n = n -1
            for(let j =0; j <pageList.length; j++){//0 1 2 3 4 5
                pageList[j].style.top = 0 + "px";//sub 스타일 이용하여 움직임
                if(j ==n){
                    setTimeout(layoutInit, 400)//메뉴의 스타일 
                }
            }
        }

})




});

