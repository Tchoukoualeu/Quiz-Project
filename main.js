
function toSecond(){
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'block';
    console.log('2');
}

function toThird(){
    document.getElementById('second').style.display = 'none';
    document.getElementById('third').style.display = 'block';
    console.log('3');
}

function toFourth(){
    document.getElementById('third').style.display = 'none';
    document.getElementById('fourth').style.display = 'block';
    console.log('4');
}

function toFifth(){
    document.getElementById('fourth').style.display = 'none';
    document.getElementById('fifth').style.display = 'block';
    console.log('5');
}

function toSixth(){
    document.getElementById('fifth').style.display = 'none';
    document.getElementById('sixth').style.display = 'block';
    console.log('6');
}

function toSeventh(){
    document.getElementById('sixth').style.display = 'none';
    document.getElementById('seventh').style.display = 'block';
    console.log('7');
}

function toEighth(){
    document.getElementById('seventh').style.display = 'none';
    document.getElementById('eighth').style.display = 'block';
    console.log('8');
}

function toNinth(){
    document.getElementById('eighth').style.display = 'none';
    document.getElementById('ninth').style.display = 'block';
    console.log('9');
}

function toTenth(){
    document.getElementById('ninth').style.display = 'none';
    document.getElementById('tenth').style.display = 'block';
    console.log('10');
}

function toFinal(){
    document.getElementById('tenth').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    console.log('11');
}

function myRand(){
    let max = 999;
    let number = Math.floor(Math.random() * Math.floor(max));
    document.write(number);
}
