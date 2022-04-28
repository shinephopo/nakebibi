{
    let goToSchedule = document.querySelector("#main-banner-img");
    goToSchedule.addEventListener('click', () => {
    location.href = './schedule.html'
    })

    let goToAlbum = document.querySelector(".album-banner-img");
    goToAlbum.addEventListener('click', () => {
        location.href = './album.html'
    })

    let goToGoods = document.querySelector(".goods-banner-img");
    goToGoods.addEventListener('click', () => {
        location.href = './goods.html'
    })
}