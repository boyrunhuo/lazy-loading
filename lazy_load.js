var num = document.getElementsByTagName("img").length;
var img = document.getElementsByTagName("img");
console.log(num);
console.log(img);
var n=0;//储存图片加载到的位置，避免每一次都从第一张图片开始遍历
lazyload();//页面载入完毕加载可视区域内的图片

window.onscroll = lazyload;

function lazyload() {
    var seeHeight = document.documentElement.clientHeight;//可见区域高度
    // console.log("可见区域高度"+seeHeight);
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

    // console.log("滚动条距离顶部高度"+scrollTop);//滚动条距离顶部高度
    for (var i = n; i < num; i++){
        if (img[i].offsetTop < seeHeight + scrollTop) {
            if (img[i].getAttribute("src") == "") {
                img[i].src = img[i].getAttribute("data-src");
            }
            n = i + 1;
        }
    }
}

