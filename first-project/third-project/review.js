const reviewse = [
    {
        names: "Sumith Reviews",
        Job: 'Web Developer',
        img: '1.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        names: "Simirth",
        Job: 'Web Designer',
        img: '2.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        names: "Peter Jones",
        Job: 'Front end Developer',
        img: '3.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        names: "Bill Anderson",
        Job: 'THE BOSS',
        img: '4.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
]

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const imgs = document.querySelector('.change');

const next = document.querySelector('.right-a');
const prev = document.querySelector('.left-a');

let count = 0;


window.addEventListener('load', function () {
    const item = reviewse[count];
});


function show(person) {
    const item = reviewse[person];
    first.innerHTML = item.names;
    second.innerHTML = item.Job;
    imgs.src = item.img;
    third.innerHTML = item.text;
};

next.addEventListener("click", function () {
    count++;
    if (count > reviewse.length - 1) {
        count = 0;
    }
    show(count);
});

prev.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = reviewse.length - 1;
    }
    show(count);
});


