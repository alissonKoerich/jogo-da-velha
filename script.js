const CurrentPlayer=document.querySelector('.currentPlayer')

let selected;
let player='X';

let positions=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],

];

function init(){
    selected=[];

    CurrentPlayer.innerHTML= `JOGADOR DA VEZ: ${player}`;

    document.querySelectorAll('.game button').forEach((item) => {
        item.innerHTML='';      //buttons começam vazio
        item.addEventListener('click',newMove)
    });
            
    }
    
    init();

function newMove(e){
    const index=e.target.getAttribute('data-i'); 
    e.target.innerHTML=player;
    e.target.removeEventListener('click',newMove);
    selected[index]= player;  //passa a info do player(jogador da vez)

    //executa por ultimo
    setTimeout(()=>{
    check()

    },[100])

         //troca o player(x ou O)
    player = player === 'X' ? 'O' : 'X';
    CurrentPlayer.innerHTML= 'JOGADOR DA VEZ:'+ (player);

    }

function check(){
    let PlayerLastMove= player === 'X' ? 'O' : 'X';

    //mapeia os items selecionados 
    const items=selected  
    .map((item,i)=>[item,i])
    .filter((item,i)=> item[0] === PlayerLastMove)//verefica o ultimo selecionado 
    .map((item,i)=> item[1])  //mapeia o index 

    //verefica possivel vitoria
    for(pos of positions){
        if(pos.every((item)=> items.includes(item))){
            alert(`O JOGADOR '${PlayerLastMove}' GANHOU!!`);
            init();
            return;
        }
    }
    if(selected.filter((item)=> item).length === 9){
        alert('DEU EMPATE!!');
        init();
        return;
    }
}








