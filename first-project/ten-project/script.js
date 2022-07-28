let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');

let l1 = document.querySelector('.list1');
let l2 = document.querySelector('.list2');
let l3 = document.querySelector('.list3');

let tit = document.querySelector('.title');
let desc = document.querySelector('.discription');
let over = document.querySelector('.over');

one.addEventListener('click', () => {
    tit.innerHTML = 'History';
    l1.innerHTML = '';
    l2.innerHTML = '';
    l3.innerHTML = '';
    over.style.borderTopLeftRadius = '9px';
    over.style.transform = 'translateX(0)';
    desc.innerHTML = "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.";
});

two.addEventListener('click', () => {
    tit.innerHTML = 'Vision';
    over.style.transform = 'translateX(106%)';
    over.style.borderRadius = '0px';
    desc.innerHTML = "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.";
    l1.innerHTML = 'List item';
    l2.innerHTML = 'List item';
    l3.innerHTML = 'List item';
});

three.addEventListener('click' , () =>{
    tit.innerHTML = 'Goals';
    over.style.transform = 'translateX(212%)';
    l1.innerHTML = '';
    l2.innerHTML = '';
    l3.innerHTML = '';
    desc.innerHTML = "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.";
    over.style.borderTopLeftRadius = '0px';
    over.style.borderTopRightRadius = '9px';
});