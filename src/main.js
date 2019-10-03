let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*你好，我是陈天与
*接下来，我要展示一下我的前端功底
*我想制作一个太极八卦图
*首先我们需要准备一个圆
**/
#八卦{
    background:black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
/*太极生两仪
*两仪生四象
*四象生八卦
*那我们就在圆圈上加上太极图的阴阳鱼吧
*先是一阴一阳的鱼身
**/
#八卦>div:first-child {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;

}
#八卦>div:nth-child(2) {
    width: 50%;
    height: 100%;
    position: absolute;
    right: 0;
    background: white;
}
#八卦>div:nth-child(3) {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
    background: black;
}
#八卦>div:nth-child(4) {
    position: absolute;
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    margin-left: -50px;
    border-radius: 50%;
    background: white;
}
/*然后就加上两个阴阳鱼的鱼眼吧！
**/
#八卦>div:nth-child(5) {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 50%;
    top: 37.5px;
    margin-left: -12.5px;
    border-radius: 50%;
    background: white;
}
#八卦>div:nth-child(6) {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 50%;
    bottom: 37.5px;
    margin-left: -12.5x;
    border-radius: 50%;
    background: black;
}
/*那我们现在为这个太极图加上一些阴影让它更好看吧！
**/

#八卦{

    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
}

`;


let string2 = "";
let n = 0;


let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            // 如果 n 不是最后一个,就继续
            n += 1;
            step();
        }
    }, 30);
};

step();
