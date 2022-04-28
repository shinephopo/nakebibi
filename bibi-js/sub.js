//프로필 사진 슬라이드
document.querySelector('.button01').addEventListener('click',function(){
    document.querySelector('.container').style.transform= 'translate(0vw)';
});
document.querySelector('.button02').addEventListener('click',function(){
    document.querySelector('.container').style.transform= 'translate(-100vw)';
});
document.querySelector('.button03').addEventListener('click',function(){
    document.querySelector('.container').style.transform= 'translate(-200vw)';
});