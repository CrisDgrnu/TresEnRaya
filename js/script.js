var cell1 = document.getElementById("cell1")
var cell2 = document.getElementById("cell2")
var cell3 = document.getElementById("cell3")
var cell4 = document.getElementById("cell4")
var cell5 = document.getElementById("cell5")
var cell6 = document.getElementById("cell6")
var cell7 = document.getElementById("cell7")
var cell8 = document.getElementById("cell8")
var cell9 = document.getElementById("cell9")

var points = [0,0]

var cells = [cell1,cell2,cell3,cell4,cell5,cell6,cell7,cell8,cell9]
var positions = [0,0,0,0,0,0,0,0,0]
var freePositions = 9

cell1.addEventListener("click",function(){
    var pos = 0
    var pInCell = document.querySelector("#cell1 p")
    play(pos,pInCell)
})

cell2.addEventListener("click",function(){
    var pos = 1
    var pInCell = document.querySelector("#cell2 p")
    play(pos,pInCell)
})

cell3.addEventListener("click",function(){
    var pos = 2
    var pInCell = document.querySelector("#cell3 p")
    play(pos,pInCell)
})

cell4.addEventListener("click",function(){
    var pos = 3
    var pInCell = document.querySelector("#cell4 p")
    play(pos,pInCell)
})

cell5.addEventListener("click",function(){
    var pos = 4
    var pInCell = document.querySelector("#cell5 p")
    play(pos,pInCell)
})

cell6.addEventListener("click",function(){
    var pos = 5
    var pInCell = document.querySelector("#cell6 p")
    play(pos,pInCell)
})

cell7.addEventListener("click",function(){
    var pos = 6
    var pInCell = document.querySelector("#cell7 p")
    play(pos,pInCell)
})

cell8.addEventListener("click",function(){
    var pos = 7
    var pInCell = document.querySelector("#cell8 p")
    play(pos,pInCell)
})

cell9.addEventListener("click",function(){
    var pos = 8
    var pInCell = document.querySelector("#cell9 p")
    play(pos,pInCell)
})

function itsWinned(player){
    //Check rows
    if(positions[0] == player && positions[1]== player && positions[2] == player){
        return true
    }

    if(positions[3] == player && positions[4]== player && positions[5] == player){
        return true
    }

    if(positions[6] == player && positions[7]== player && positions[8] == player){
        return true
    }

    //Check colums
    if(positions[0] == player && positions[3]== player && positions[6] == player){
        return true
    }

    if(positions[1] == player && positions[4]== player && positions[7] == player){
        
        return true
    }

    if(positions[2] == player && positions[5]== player && positions[8] == player){
        return true
    }

    //Check diagonals
    if(positions[0] == player && positions[4]== player && positions[8] == player){
        return true
    }

    if(positions[2] == player && positions[4]== player && positions[6] == player){
        return true
    }

    

    return false
}

function tie(){
    //Tie
    if(positions.indexOf(0) ==-1){
        return true
    }
    
    return false
}

function machineMove(){
    var id = "#cell"
    var done = false
    while(!done && freePositions!=0){
        console.log("sads")
        console.log(freePositions)
        let cellPos = Math.floor(Math.random() * (9 - 0)) + 0;
   
        if (positions[cellPos] != 1 && positions[cellPos] !=2){
            positions[cellPos] = 2
            id += cellPos+1+" p"
            done = true
            
            let machineMove = document.querySelector(id)
            machineMove.innerHTML = "O"
            machineMove.classList.add("red")

        }
    }
}

function toggle(message){
    var blur = document.getElementById("blur")
    blur.classList.toggle("active")
    var oldMessage = document.querySelector("#popup h2")
    oldMessage.innerHTML = message

    var popup = document.getElementById("popup")
    popup.classList.toggle("active")
}

function resetGame(){
    positions = [0,0,0,0,0,0,0,0,0]
    freePositions = 9
    for (let i = 1; i < 10; i++) {
        const element = document.querySelector("#cell"+i+" p")
        element.classList.remove("red")
        element.classList.remove("blue")
        element.innerHTML = "X"
    }
}

function play(pos,pInCell){
    if (positions[pos] != 1 && positions[pos] !=2){
        pInCell.innerHTML = "X"
        positions[pos] = 1
        freePositions -=1
        pInCell.classList.add("blue")
        setTimeout(function(){
            if (itsWinned(1)){
                toggle("Has ganado!")
                resetGame()
                updateScore(0)
            } 
            else{
                machineMove()
                freePositions -=1
                setTimeout(function(){
                    if (itsWinned(2)){
                        toggle("Has perdido :(")  
                        resetGame()
                        updateScore(1)
                    }

                    if (tie()){
                        toggle("Empate!")
                        resetGame()
                    }
                },200)   
            }

            
        },200)
    }   
}

function updateScore(player){
    points[player] += 1
    let score = document.querySelector("#score h3")
    score.innerHTML = points[0]+"-"+points[1]
}