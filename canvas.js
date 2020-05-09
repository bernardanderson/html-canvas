class CanvasMouseOver {

    constructor(canvasTargetId) {
        this.canvas = document.getElementById(canvasTargetId);
        this.context = this.canvas.getContext("2d");
        this.context.font = "14px Arial";
    }

    showSquares = () => {
        this.context.fillStyle = 'rgb(200, 0, 0)';
        this.context.fillRect(10,10,50,50);

        this.context.fillStyle = 'rgba(0, 0, 200, 0.5)';
        this.context.fillRect(30,30,50,50);
    }

    showMouseCoordinates = () => {
        this.canvas.addEventListener("mousemove", e => {
            let cRect = this.canvas.getBoundingClientRect();
            let canvasX = Math.round(e.clientX - cRect.left);
            let canvasY = Math.round(e.clientY - cRect.top);
            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            this.context.fillText(`X: ${canvasX}, Y: ${canvasY}`,10,20);
        });
    }
        
    downloadImg = el => {
        let imageUri = this.canvas.toDataURL("image/jpg");
        el.href = imageUri;
    }
}

let mainCanvas = new CanvasMouseOver("main-canvas");
//mainCanvas.showMouseCoordinates();
mainCanvas.showSquares();

downLoadCanvasImage = el => {
    mainCanvas.downloadImg(el);
}