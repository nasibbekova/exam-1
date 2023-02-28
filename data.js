const data = [
    {
        title: 'Mac',
        img: 'mac.png'
    },
    {
        title: 'iPhone',
        img: 'iphone.png'
    },
    {
        title: 'iPad',
        img: 'ipad.png'
    },
    {
        title: 'Apple Watch',
        img: 'apple watches.png'
    },
    {
        title: 'AirPods',
        img: 'airpods.png'
    },
    {
        title: 'AirTag',
        img: 'airtag.png'
    },
    {
        title: 'Apple TV',
        img: 'apple tv.png'
    },
    {
        title: 'HomePod mini',
        img: 'homepad mini.png'
    },
    {
        title: 'Accessories',
        img: 'accessories.png'
    },
]
let cont = document.querySelector('container')

for(let item of data ){
    let box = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    box.classList.add('box')
    img.src = `./img/${item.img}`
    span.innerHTML = item.title

    box.append(img, span)

}


