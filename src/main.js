let html = document.querySelector("#html");
let style = document.querySelector("#style")

let string = `
/*你好，我是小唐
*接下来，我要展示我的前端功底了
*展示一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*把div变成圆形的
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦图是阴阳
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加个灵珠和魔丸
*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 99%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`
let string2 = ``

let n = 0

let step = () =>{
    
    setTimeout(() =>{
        //如果是回车，就不照搬
        //如果不是回车，就照搬
        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === " "){
            string2 += "&nbsp"
        }else{
            string2 += string[n]

        }
        html.innerHTML = string2
       style.innerHTML = string.substring(0,n)
       window.scrollTo(0,9999)
       html.scrollTo(0,9999)
        if(n>=string.length-1){
            return
        }        
        n +=1
        step()
    },50)
}
step()






