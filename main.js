var canvas=new fabric.Canvas('myCanvas');
block_img_width=30;
block_img_height=30;
player_X=10;
player_Y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey == true && keypress == '80'){
        console.log("p and shift pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey == true && keypress == '77'){
        console.log("m and shift pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='40'){
        down();
        console.log("down");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='39'){
        right();
        console.log("right");
    }
    if(keypress=='87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypress=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keypress=='76'){
        new_image('light_green.png');
        console.log("l");
    }
    if(keypress=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypress=='82'){
        new_image('roof.jpg');
        console.log("r");
        
    }
    if(keypress=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypress=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypress=='85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keypress=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
}
function up(){
    if(player_Y>=0){
        player_Y=player_Y- block_img_height;
        console.log("block_img_height= "+block_img_height);
        console.log("when up arrow key is pressed, X= "+player_X+" ,Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_Y<=500){
        player_Y=player_Y+ block_img_height;
        console.log("block_img_height= "+block_img_height);
        console.log("when down arrow key is pressed, X= "+player_X+" ,Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_X>=0){
        player_X=player_X- block_img_width;
        console.log("block_img_width= "+block_img_width);
        console.log("when left arrow key is pressed, X= "+player_X+" ,Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_X<=850){
        player_X=player_X+ block_img_width;
        console.log("block_img_width= "+block_img_width);
        console.log("when right arrow key is pressed, X= "+player_X+" ,Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}