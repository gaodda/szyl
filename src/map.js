export function MP() {  
    return new Promise(function (resolve, reject) {  
      window.onload = function () {  
        resolve(BMap)  
      }  
      var script = document.createElement("script");  
      script.type = "text/javascript";  
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=zETP4QTUUBd2tzqXN3DrgqYLUZLf6bF7&callback=init";  
      script.onerror = reject;  
      document.head.appendChild(script);  
    })  
  }  

  //调用外部库