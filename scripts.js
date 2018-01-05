if (localStorage) {
	$('body').append("<p>localStorage  поддерживается в браузере</p>");
}
	
if(localStorage['style']){
	$('link[rel=stylesheet]').attr('href', localStorage['style']);
}
if(localStorage.getItem('style') === 'green.css'){
	$('.boo').css('float', 'right');
} else{
	$('.boo').css('float', 'left');
}

$('.green-site').click(function(){
	$('.boo').css('float', 'right');
	$('link[rel=stylesheet]').attr('href', 'green.css');
	localStorage['style'] = 'green.css';
});
$('.red-site').click(function(){
	$('.boo').css('float', 'left');
	$('link[rel=stylesheet]').attr('href', 'red.css');
	localStorage['style'] = 'red.css';
	
});

//Задание 3

let myObj = {
	name: 'Volodymyr',
	lastname: 'Pavlichenko',
	age: 31
}
let smyObj = JSON.stringify(myObj);
localStorage.setItem("object", smyObj);
$('body').append(localStorage.object);


//Задание 4
let timer = setTimeout(function(){
	$('.popup').css('top', '50%');
}, 4000);

$('.ok').click(function(){
	$(this).css('color', 'red').text("Согласился");
	localStorage.setItem("click", timer);
});
$('.close').click(function(){
	$('.popup').css('top', '-100%');
});

clearTimeout(localStorage.getItem('click'));

//Задание 5

s = localStorage;

for (var i = 0; i < s.length; i++) { key = s.key(i);
     $('body').append('<p>' + key + " = " + s.getItem(key) + '</p>');
}
