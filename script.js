const code = "7654";
let answer = "";
count =0;
const door = document.getElementById('dr');
let buttons= document.getElementsByClassName('butt');


function takecode(input){
    const num = input.textContent;
    if(count<4){
        answer+= num;
        count++;
    }
    if(answer=== code & count==4){
        door.src = "open.jpg";
        for(let x =0; x<buttons.length;x++){
            buttons[x].style.backgroundColor="lightgreen";
        }
        setTimeout(closedoor,10000);
        
    }
    if(answer!= code & count==4){
        count=0;
        answer="";        
    }
    console.log(answer)
    
}
function closedoor(){
    count=0;
    answer="";
    door.src = "closed.jpg";
    for(let x =0; x<buttons.length;x++){
            buttons[x].style.backgroundColor="";
        }
}

function deletecode(){
    if(answer.length>0){
        answer= answer.slice(0, -1)
        count--;
    }
    if(count==4){
        alert("door is open")
    }
    console.log(answer);
}