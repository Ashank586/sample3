var last_position_of_x, last_position_of_y;
var mouse_event="";
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    width=screen.width;
    new_width=width-70;
    new_height=screen.height-300;
    if(width <992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e){
        console.log("mytouchstart");
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        color=document.getElementById("color_input").value;
        width_of_line=document.getElementById("line_width_input").value;
}
    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e){
        console.log("my_touchmove");
        current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + " y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + " y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

    canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mouseDown";
    color=document.getElementById("color_input").value;
    width_of_line=document.getElementById("line_width_input").value;
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_x_position=e.clientX-canvas.offsetLeft;
    var current_y_position=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouseDown"){
        console.log("Last Position of x and y is: ");
        console.log("x="+last_position_of_x+"   ");
        console.log("y="+last_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Current Position of x and y is: ");
        console.log("x="+current_x_position+"   ");
        console.log("y="+current_y_position);
        ctx.lineTo(current_x_position,current_y_position);
        ctx.stroke();
    }
    last_position_of_x=current_x_position;
    last_position_of_y=current_y_position;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
   mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
   mouse_event="mouseleave";
}

    function clearArea() { 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    }