//#wrap을 변수에 담습니다
let wrap = document.querySelector("#wrap");

wrap.addEventListener("click", () => {
    // wrap.querySelector("div").style.backgroundColor = "pink";
    //js에서 style.sheet를 접근하는것은 지양해야 합니다
    //따라서 활성화 클래스를 지정해서, 클래스를 js에서 제ㅓ어하고
    //style.sheet에서는 클래스가 있고, 없고의 스타일을 지정함으로
    //js에서 최소한으로 접근하는것이 바람직합니다

    // let isOn = wrap.classList.contains("on");
    // console.log(isOn);

    // if(isOn){
    //     wrap.classList.remove("on");
    // } else {
    //     wrap.classList.add("on");
    // }

    // 삼항연산자로 변경~
    // (isOn) ? wrap.classList.remove("on") : wrap.classList.add("on");
    // console.log(go);
});

wrap.addEventListener("click", () => {
    wrap.classList.toggle("on");
});

let btns = document.querySelectorAll(".btns li");
let boxes = document.querySelectorAll("section article");
//기본for문으로 btns를 반복을 돌면서 클릭이벤트를 부여해보세요
for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click",()=>{
        //클릭하는 순간 일시적으로 모든 btns의 on클래스를 지워서
        //비활성화 한뒤
        for (let el of btns){
            el.classList.remove("on");
        }
        //클릭한 대상만 on을 붙여 활성화
        btns[i].classList.add("on");

        for(let box of boxes) {
            box.classList.remove("on");
        }
        boxes[i].classList.add("on");
    })
}

//forEach로 변경 대신 내부 remove 반복문은 for of로 하세요

// btns.forEach((el,index) => {
//     el.addEventListener("click",()=>{
//         for(let btn of btns){
//             btn.classList.remove("on");
//         }
//         el.classList.add("on");
//     })
// });