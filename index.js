const Colors=['yellow','red','green','blue'];

const GameObj={}
GameObj.User={}
GameObj.User.winRounds=0;
GameObj.User.loseRound=0;
GameObj.User.level=0;
GameObj.User.iq=0;
GameObj.CurrentRandomArr=[];
GameObj.CurrentRandomArrClassic=[1,2];
//GameObj.CurrentUserArr=[];
GameObj.User.score=0;
GameObj.Clicks=0;
GameObj.CompRound=3;
GameObj.ClassicMode;
GameObj.list=[];
GameObj.Top3=[];

var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;

//return random arr value between 0-3 (0,1,2,3) example [0,0,3,1,2,2,3,1,0]
function GetSeq(many) {
    /////////////////////////////Get Random array
    let indexarr=[];
    for (let i = 0; i < many; i++) {
        let rand=Math.floor(Math.random()*4);
        indexarr.push(rand);
        
    }
    GameObj.CurrentRandomArr=indexarr;
    return indexarr;
    /////////////////////////////
}

function GetSeqClassic() {
    /////////////////////////////Get Random array
    let rand=Math.floor(Math.random()*4); //0-3
    GameObj.CurrentRandomArrClassic.push(rand);
    GameObj.CurrentRandomArr=GameObj.CurrentRandomArrClassic;
    return GameObj.CurrentRandomArr;
    /////////////////////////////
}

function TurnOn(index) {
    let id= Colors[index];
    TurnOnColor(id)
}

function TurnOnColor(id) {
    if (id=='red') {
        // document.getElementById('0S').play();
        sound1.play();
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #c42b33 0%, #eb2626 50%, #f83243 75%)");
        $(`#${id}`).css("box-shadow", "rgba(250, 50, 50, 0.56) 0px 22px 70px 4px");
        
        
    }
    if (id=='yellow') {
        // document.getElementById('1S').play();
        sound2.play();
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #c4b92b 0%, #ebdd26 50%, #f8e432 75%)");
        $(`#${id}`).css("box-shadow", "rgba(250, 250, 50, 0.56) 0px 22px 70px 4px");
        
        
    }
    if (id=='green') {
        // document.getElementById('2S').play();
        sound3.play();
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #51e644 0%, #2deb26 50%, #39af39 75%)");
        $(`#${id}`).css("box-shadow", "rgba(166, 216, 125, 0.56) 0px 22px 70px 4px");
        
        
    }
    if (id=='blue') {
        // document.getElementById('3S').play();
        sound4.play();
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #5153db 0%, #2664eb 50%, #4962cf 75%)");
        $(`#${id}`).css("box-shadow", "rgba(50, 50, 250, 0.56) 0px 22px 70px 4px");
        
        
        

    }
}

function TurnOff(index) {
    let id= Colors[index];
  TurnOffColor(id)
}

function TurnOffColor(id) {
    
    if (id=='red') {
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #f38186 0%, #ff8383 50%, #c56169 75%)");
        $(`#${id}`).css("box-shadow", "rgba(0, 0, 0, 0.27) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px");
        
    }
    if (id=='yellow') {
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #dbd474 0%, #d1ca61 50%, #e7d957 75%)");
        $(`#${id}`).css("box-shadow", "rgba(0, 0, 0, 0.27) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px");
        
    }
    if (id=='green') {
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #adffa6 0%, #83ff7f 50%, #90fa90 75%)");
        $(`#${id}`).css("box-shadow", "rgba(0, 0, 0, 0.27) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px");
       
    }
    if (id=='blue') {
        $(`#${id}`).css("background-image", "linear-gradient(140deg, #b4b5ff 0%, #92b3fa 50%, #8191da 75%)");
        $(`#${id}`).css("box-shadow", "rgba(0, 0, 0, 0.27) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px");

       // $(`#${id}`).css("box-shadow", "none");
        
    }
    


}

$(document).ready(function (){
    console.log('ready')
    sound1=document.getElementById('0S')
    sound2=document.getElementById('1S')
    sound3=document.getElementById('2S')
    sound4=document.getElementById('3S')
    sound5=document.getElementById('5S')
    sound6=document.getElementById('wrong');
    sound7=document.getElementById('win');
    document.getElementById('StartBtn').disabled = true;
    if (localStorage['Games']!=undefined) {
        GameObj.list=JSON.parse(localStorage['Games']);
    }
    
    

})  

function SetGame(input) {
    console.log(input.id)
    document.getElementById('StartBtn').disabled = false;
    if (input.id=='classic') {
        GameObj.ClassicMode=true;
        
    } else {
        GameObj.ClassicMode=false;
        document.getElementById('ScoreP').innerHTML='IQ-Score: 00'
    }
    $('#ModeModal').fadeOut(750);
}

function SaveScore() {
    var game={
        name:document.getElementById('name').value,
        score:GameObj.User.score,
        lvl:GameObj.User.level,
        len:GameObj.CompRound
    }
    GameObj.list.push(game);
    
        localStorage['Games']=JSON.stringify(GameObj.list);
        alert('Your score saved in the Score-Board')
    
    location.reload();
    

}
function ShowBoard() {
    let winarr=[];
    let max1=0;
    let max2=0;
    let max3=0;

    for (let index = 0; index < GameObj.list.length; index++) {
        const game = GameObj.list[index];
        if (game.score>max1) {
            max1=game.score;
            winarr[0]=game
        }
        
    }

    
    for (let index = 0; index < GameObj.list.length; index++) {
        const game = GameObj.list[index];
       
        if(game.score>max2  && winarr.includes(game)==false){
            max2=game.score;
            winarr[1]=game
        }
        
        
    }

    
    for (let index = 0; index < GameObj.list.length; index++) {
        const game = GameObj.list[index];
        if(game.score>max3 && winarr.includes(game)==false){
            max3=game.score;
            winarr[2]=game
        }
        
    }

    console.log(winarr)
    if (winarr.length>0) {
        document.getElementById('name1').innerHTML=winarr[0].name;
        document.getElementById('sco1').innerHTML=winarr[0].score;
        document.getElementById('lev1').innerHTML=winarr[0].lvl;
        document.getElementById('dif1').innerHTML=winarr[0].len;
    
        document.getElementById('name2').innerHTML=winarr[1].name;
        document.getElementById('sco2').innerHTML=winarr[1].score;
        document.getElementById('lev2').innerHTML=winarr[1].lvl;
        document.getElementById('dif2').innerHTML=winarr[1].len;
    
        document.getElementById('name3').innerHTML=winarr[2].name;
        document.getElementById('sco3').innerHTML=winarr[2].score;
        document.getElementById('lev3').innerHTML=winarr[2].lvl;
        document.getElementById('dif3').innerHTML=winarr[2].len;
        $('#ScoreBoard').fadeIn(750);}
        else{
            alert('There is no game history yet')
        }
 
}
function fadeout(div) {
    $(`#${div.id}`).fadeOut(500);
}

//to start round
function Start(btn) {
    GameObj.User.level++;
    sound5.play();
    $(`.wrap`).fadeOut(400)
    document.getElementById('DifficultyP').innerHTML=`Difficulty: ${GameObj.CompRound}`
    document.getElementById('LevelP').innerHTML=`Level: 0${GameObj.CompRound-2}`;
    if (GameObj.ClassicMode) {
        var arrcolorsrandom=GetSeqClassic();
    }
    else{
        var arrcolorsrandom=GetSeq(GameObj.CompRound);
    }
    
    let offset=1000;
    let offset2=1750;
    for (let i = 0; i < arrcolorsrandom.length; i++) {
        setTimeout(TurnOn,offset,arrcolorsrandom[i])
        offset+=1600;
        setTimeout(TurnOff,offset2,arrcolorsrandom[i])
        offset2+=1600;
        
    }
    btn.innerHTML='NEXT LEVEL';
}

function ClickSdiv(div) {
    let localFlag=true;
    if (div.id!=Colors[GameObj.CurrentRandomArr[GameObj.Clicks]]) {
        //lose in the choise
        sound6.play();
        GameObj.User.loseRound++;
        GameObj.Clicks++;
        GameObj.CompRound=3;
        if (GameObj.ClassicMode) {
            document.getElementById('ScorePT').innerHTML=GameObj.User.score;
            
        }
        else{
            document.getElementById('ScoreUi').innerHTML=`IQ-Score`
            document.getElementById('ScorePT').innerHTML=GameObj.User.iq+' %';
        }
        document.getElementById('LevelPT').innerHTML=`0${GameObj.User.level}`
        document.getElementById('DifficultyPT').innerHTML=GameObj.CompRound;
        
        

        $('#UserUi').fadeIn(1500);
        //just for now i will return  this
        return
    }
    else if(GameObj.CurrentRandomArr.length==GameObj.Clicks+1){
        //win round
        setTimeout(timeoutsound,1000,sound7);
        GameObj.User.winRounds++;
        GameObj.CompRound++;
        GameObj.Clicks=0;
        localFlag=false;
        $('.wrap').fadeIn(3000)

    }
    TurnOnColor(div.id)
    setTimeout(TurnOffColor,750,div.id)
    if (GameObj.ClassicMode) {
        GameObj.User.score+=10;
        document.getElementById('ScoreP').innerHTML=`Score: ${GameObj.User.score}`;
    }
    else{
        GameObj.User.score+=10;
        GameObj.User.iq=((GameObj.User.score/150 *100)+GameObj.User.level/25).toFixed(2);
        document.getElementById('ScoreP').innerHTML=`IQ-Score: ${GameObj.User.iq}%  of the average`;
    }
    
    

    //beacuse if the user win we need set the click to 0 
    if (localFlag) {
        GameObj.Clicks++;
    }
    
   


}

function timeoutsound(sound){
    sound.play();
}