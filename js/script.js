window.onload=function(){
    waterfall("main","box");
}

function waterfall(parent,box){
    var oParent=document.getElementById(parent);
    var oBoxes = document.getElementsByClassName(box);
    var oBoxW = oBoxes[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth/oBoxW);
    oParent.style.cssText='width:'+cols*oBoxW+'px;margin:0;';
    var hArr = [];  //用于保存图片的高度
    window.hArr = hArr;
    for (i=0;i<oBoxes.length;i++){
        if(i<cols){
            hArr.push(oBoxes[i].offsetHeight);
        }else{
            var minH = Math.min.apply(null,hArr);
            minIndex = hArr.indexOf(minH);
            oBoxes[i].style.position='absolute';
            oBoxes[i].style.top= minH;
            oBoxes[i].style.left = oBoxW * minIndex;
            hArr.splice(minIndex,1,minH+oBoxes[i].offsetHeight);
        }
    }
};