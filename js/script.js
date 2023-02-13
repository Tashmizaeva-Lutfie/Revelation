const like = document.querySelector('.item-like');
const likeactive = document.querySelector('.active');

like.onclick = function(){
    like.classList.toggle('active')
    if(like.classList.contains('active')){
        like.setAttribute('src', '../assets/img/icons/like-active.png');
    }
    else{
        like.setAttribute('src', '../assets/img/icons/like.png');
    }
}

likeactive.onclick = function(){
    like.classList.toggle('active')
}