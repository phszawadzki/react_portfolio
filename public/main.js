//call arrange function after the modal is clicked and loads
$(document).ready(function(){
    Array.prototype.forEach.call(document.getElementsByClassName("modal__button"), function(el) {
        el.addEventListener("click", function() {
            setTimeout(arrange, 200);
        });
    }); 
});

//call arrange function on window's size change
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
addEvent(window, "resize", arrange);

//arranges sizes and positions of iframes and keeps the background image inside the screen
function arrange(){
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    //mac
    //keep background image always inside the window
    Array.prototype.forEach.call(document.getElementsByClassName("img__under"), function(el) {
        el.style["max-height"] = windowHeight  + "px";
        el.style["max-width"] = windowWidth  + "px";
    }); 

    let initImgWidth = 1700;
    let initScale = 0.779;    
    let imgProportion = 1.77;
    let imgWidth = windowHeight*imgProportion;
    if(imgWidth>windowWidth){
        imgWidth = windowWidth;
    }
    let scaleProportion = imgWidth/initImgWidth;
    let scale = initScale*scaleProportion;


    let backgroundImageHeight;
    Array.prototype.forEach.call(document.getElementsByClassName("img__under"), function(el) {
       if (el.clientHeight > 0){
        backgroundImageHeight = el.clientHeight;
       }
    }); 
    //mac iframe
    let topProperty = (windowHeight - backgroundImageHeight)/2 +  backgroundImageHeight*0.41;
    topProperty = Math.round(topProperty);
    Array.prototype.forEach.call(document.getElementsByClassName("mac"), function(el) {
        el.style["position"] = "absolute";
        el.style["transform"] = "translate(-50%, -50%) scale(" + scale + ")";
        el.style["top"] = topProperty + "px";
        el.style["left"] = "64.8%";
        el.style["width"] = "1190px";
        el.style["height"] = "629px";
        el.style["border"] = "none";
    }); 
    
    //iphone iframe
    let initMScale = 1;
    let mScale = initMScale*scaleProportion;
    
    Array.prototype.forEach.call(document.getElementsByClassName("iphone"), function(el) {
        el.setAttribute("style", "position: absolute; transform:translate(-50%, -50%) scale(" + mScale + "); top: 50.6%; left: 17.67%; width: 363.5px; height: 616px; border:none"); 
    }); 

    


    //address bars


    let initIphoneFontSize = 0.9981883668807687;
    let IphoneFontSize = initIphoneFontSize*scaleProportion;
    
    Array.prototype.forEach.call(document.getElementsByClassName("iphone-address"), function(el) {
        el.setAttribute("style", "position: absolute; transform:translate(-50%, -50%); top: 15.5%; left: 17.67%;  font-size: " + IphoneFontSize + "em;"); 
    }); 

    
    
    let initMacFontSize = 5.477862988979829;
    let MacFontSize = initMacFontSize*scaleProportion;
  
    Array.prototype.forEach.call(document.getElementsByClassName("mac-address"), function(el) {
        el.setAttribute("style", "transform: translate(0%, -50%) ; position: absolute; top: 13.8%; left: 41%;  font-size: " + MacFontSize + "px;"); 
    }); 
    
 
    
    
    
  //  paski 
    

     
    // let imgInitialHeight = document.getElementById('img-under').clientHeight;
    // let imgInitialWidth = document.getElementById('img-under').clientWidth;
    
    // let pasekIphoneScale = 0.7770700636942676;   
    // let pasekIphoneHeight = imgInitialHeight*pasekIphoneScale; 
    
    // Array.prototype.forEach.call(document.getElementsByClassName("pasek1"), function(el) {
    //     el.setAttribute("style", "height:" + pasekIphoneHeight + "px"); 
    // }); 
    
    // Array.prototype.forEach.call(document.getElementsByClassName("pasek2"), function(el) {
    //     el.setAttribute("style", "height:" + pasekIphoneHeight + "px"); 
    // }); 
    
    // let pasekMacHeightScale1 = 0.59;
    // let pasekMacWidthScale1 = 66.53;
    // let pasekMacHeight1 = imgInitialHeight*pasekMacHeightScale1;
    // let pasekMacWidth1 = imgInitialWidth/pasekMacWidthScale1;
    
    // Array.prototype.forEach.call(document.getElementsByClassName("pasek3"), function(el) {
    //     el.setAttribute("style", "height:" + pasekMacHeight1 + "px; width:" + pasekMacWidth1 + "px");
    // }); 
    // Array.prototype.forEach.call(document.getElementsByClassName("pasek4"), function(el) {
    //     el.setAttribute("style", "height:" + pasekMacHeight1 + "px; width:" + pasekMacWidth1 + "px");
    // }); 
    
    // let pasekMacHeightScale2 = 78.5;
    // let pasekMacWidthScale2 = 0.572655690765927;
    // let pasekMacHeight2 = imgInitialHeight/pasekMacHeightScale2;
    // let pasekMacWidth2 = imgInitialWidth*pasekMacWidthScale2;
    
    // Array.prototype.forEach.call(document.getElementsByClassName("pasek5"), function(el) {
    //     el.setAttribute("style", "height:" + pasekMacHeight2 + "px; width:" + pasekMacWidth2 + "px");
    // }); 
    
    
}


