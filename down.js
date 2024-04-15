function startCapture(displayMediaOptions){
    const imgbase = document.getElementById("imgbase");
    domtoimage.toBlob(imgbase).then(function(blob){
        window.navigator.msSaveBlob(blob, "img.png");
    }).catch(function(error){
        console.error('errr:',error)
    })
}