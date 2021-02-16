document.addEventListener('DOMContentLoaded',() => {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', () => save(canvas));
    let coord = {x:0,y:0};
    var tooltype = 'draw';
    var linetype = 'begin';

    document.addEventListener("mousedown", start);
    document.addEventListener("mouseup", stop);
    window.addEventListener("resize", resize);

    function resize(){
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }
    resize();

    function start(e) {
        document.addEventListener("mousemove",draw);
        reposition(e);
    }

    function reposition(e) {
        coord.x = e.clientX - canvas.offsetLeft;
        coord.y = e.clientY - canvas.offsetTop;
    }

    function stop(e) {
        document.removeEventListener("mousemove",draw);
    }

    function draw(e) {
        ctx.beginPath();
        if (linetype == 'thic'){
            ctx.lineWidth = 50;
            if(tooltype == 'erase'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "white";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'draw'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "black";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'blue'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "blue";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'red'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "red";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'yellow'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "yellow";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'green'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "green";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
        }
        if (linetype == 'thin'){
            ctx.lineWidth = 5;
            if(tooltype == 'erase'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "white";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'draw'){
                ctx.lineWidth = 5;
                ctx.lineCap = "round";
                ctx.strokeStyle = "black";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'blue'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "blue";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'red'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "red";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'yellow'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "yellow";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            if(tooltype == 'green'){
                ctx.lineCap = "round";
                ctx.strokeStyle = "green";
                ctx.moveTo(coord.x, coord.y);
                reposition(e);
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
        }

        if (linetype == 'clear'){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        if (linetype == 'begin'){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            linetype = 'thin';
        }

    }

    canvastool = function(tool) {
        tooltype = tool; //update
    }

    linetool = function(line) {
        linetype = line;
    }


    function save(canvas) {
        const data = canvas.toDataURL('image/png');
        const anchor = document.createElement('a');
        anchor.href = data;
        anchor.download = 'image.png';
        anchor.click();
      }

    
    ctx.font = "100px Comic Sans MS";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.strokeText("Drawing Pad", canvas.width/2, canvas.height/2); 

    
})