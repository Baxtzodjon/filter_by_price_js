let cont = document.querySelector('.container2');
let closeCart = document.querySelector('.close');
let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let arr2 = [{}]
let cartTab = document.querySelector('.cartTab')

let form = document.querySelector('form');
let fromInput = form.querySelector('[placeholder="$100"]');
let toInput = form.querySelector('[placeholder="$500"]');
let showButton = form.querySelector('button');

let blockss = document.querySelector('.blocks');

let addButton = document.querySelector(".checkOut");

btn.onclick = () => {
    body.classList.toggle('showCart');
}

closeCart.onclick = () => {
    body.classList.toggle('showCart');
}

for (let item of arr) {
    let blocks = document.createElement('div');
    let filter_blocks = document.createElement('div');
    let title = document.createElement('h4');
    let price = document.createElement('p');

    blocks.classList.add('blocks');
    filter_blocks.classList.add('filter_blocks');
    title.classList.add('title');
    price.classList.add('price');

    title.innerHTML = item.title;
    price.innerHTML = item.price;

    cont.append(blocks);
    blocks.append(filter_blocks);
    filter_blocks.append(title, price);

    function showProducts(event) {
        event.preventDefault();

        let fromValue = parseFloat(fromInput.value.replace('$', ''));
        let toValue = parseFloat(toInput.value.replace('$', ''));

        blockss.forEach(block => {
            let price = parseFloat(block.querySelector('.price').innerHTML.replace('$', ''));

            if (price >= fromValue && price <= toValue) {
                blocks.style.display = 'block';
            } else {
                blocks.style.display = 'none';
            }
        });
    }

    showButton.addEventListener('click', showProducts);
}

for (let item of arr2) {
    addButton.addEventListener("click", function () {
        let productName = document.querySelector(".input_second").value;
        let productPrice = document.querySelector(".input_third").value;

        let newBlocks = document.createElement('div');
        let newFilter_blocks = document.createElement('div');
        let newTitle = document.createElement('h4');
        let newPrice = document.createElement('p');

        newBlocks.classList.add('blocks');
        newFilter_blocks.classList.add('filter_blocks');
        newTitle.classList.add('title');
        newPrice.classList.add('price');

        newTitle.innerHTML = productName;
        newPrice.innerHTML = productPrice;

        cont.append(newBlocks);
        newBlocks.append(newFilter_blocks);
        newFilter_blocks.append(newTitle, newPrice);

        body.classList.remove('showCart')
    });
}
