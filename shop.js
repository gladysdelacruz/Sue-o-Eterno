//Shop
const categoryRoses = document.getElementById('categoria_rosas')
const categorySunflowers= document.getElementById('categoria_girasoles')
const categoryTulipans = document.getElementById('categoria_tulipanes')
const clearFilter = document.getElementById('clear_filter')

categoryRoses.addEventListener('click', () => {
    let roses = document.querySelectorAll('.cardproduct')
    roses.forEach(element => {
        element.style.display = 'flex'
        let isRoseFlower = element.querySelector('.category_flower').innerText
        if(isRoseFlower !== 'Rosas'){
            element.style.display = 'none'
        }
    });

})
categorySunflowers.addEventListener('click', () => {
    let sunflowers = document.querySelectorAll('.cardproduct')
    sunflowers.forEach(element => {
        element.style.display = 'flex'
        let isSunFlower = element.querySelector('.category_flower').innerText
        if(isSunFlower !== 'Girasoles'){
            element.style.display = 'none'
        }
    });
})
categoryTulipans.addEventListener('click', () => {
    let tulipans = document.querySelectorAll('.cardproduct')
    tulipans.forEach(element => {
        element.style.display = 'flex'
        let isTulipan = element.querySelector('.category_flower').innerText
        if(isTulipan !== 'Tulipanes'){
            element.style.display = 'none'
        }
    });
})

clearFilter.addEventListener('click', () => {
    let flowers = document.querySelectorAll('.cardproduct')
    flowers.forEach(element => {
        element.style.display = 'flex'
    });
})