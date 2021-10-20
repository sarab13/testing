window.onload = function () {
    var button = document.getElementById('topBtn1');
    button.click();
}

function navBar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// CATEGORIES
// Cache selectors
var lastId,
    topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight() + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.on("click", function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: (offsetTop - 148)
    }, 850);
    e.preventDefault();
});

// Bind to scroll
$(window).on("scroll", function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight + 190;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) {
            return this;
        }
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.parent().removeClass("active");

        menuItems.filter("[href$=" + id + "]").parent().addClass("active");

        menuItems.filter("[href$=" + id + "]")[0].scrollIntoView();
    }
});

// ORDER

var modal = document.getElementsByClassName("order");

$('.card__button').on('click', function () {
    var i = $('.card__button').index(this);
    modal[i].style.display = "block";
});

$('.order__cancel').on('click', function () {
    var i = $('.order__cancel').index(this);
    modal[i].style.display = "none";
});

$('.place__order').on('click', function () {
    var i = $('.place__order').index(this);
    modal[i].style.display = "none";
});

var quantity = document.getElementsByClassName("quantity");

$('.dec').on('click', function () {
    var i = $('.dec').index(this);

    var temp = quantity[i].innerHTML;

    if (temp > 0) {
        --temp;
        quantity[i].innerHTML = temp;
    }
});

$('.inc').on('click', function () {
    var i = $('.inc').index(this);

    var temp = quantity[i].innerHTML;

    if (temp >= 0) {
        ++temp;
        quantity[i].innerHTML = temp;
    }
});

// SEARCH BAR
function search_food() {
    let input = document.getElementsByClassName('searchTerm')[0].value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('card__text');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].parentNode.parentNode.parentElement.style.display = 'none'
        }
        else {
            x[i].parentNode.parentNode.parentElement.style.display = 'flex'
        }
    }
}

// Filtering basis of categories
function btn1() {
    let temp1 = document.getElementById('topBtn2');
    let temp2 = document.getElementById('topBtn3');
    temp1.style.backgroundColor = 'white';
    temp2.style.backgroundColor = 'white';
    let temp3 = document.getElementsByClassName('btn2__default');
    let temp4 = document.getElementsByClassName('btn3__default');
    for (let i = 0; i < temp3.length; i++) {
        temp3[i].classList.remove('btn2');
        temp3[i].classList.remove('btn2__cat');
    }
    for (let i = 0; i < temp4.length; i++) {
        temp4[i].classList.remove('btn3');
        temp4[i].classList.remove('btn3__cat');
    }


    let x = document.getElementById('topBtn1');
    x.style.backgroundColor = 'rgb(255, 99, 151)';
    let y = document.getElementsByClassName('btn1__default');
    for (let i = 0; i < y.length; i++) {
        y[i].classList.add('btn1');

        if (y[i].parentNode.id == 'mainNav') {
            y[i].classList.remove('btn1');
            y[i].classList.add('btn1__cat');

        }
    }

    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (!item[0].classList.value.search('btn1')) { return item; }
    });
}

function btn2() {
    let temp1 = document.getElementById('topBtn1');
    let temp2 = document.getElementById('topBtn3');
    temp1.style.backgroundColor = 'white';
    temp2.style.backgroundColor = 'white';
    let temp3 = document.getElementsByClassName('btn1__default');
    let temp4 = document.getElementsByClassName('btn3__default');
    for (let i = 0; i < temp3.length; i++) {
        temp3[i].classList.remove('btn1');
        temp3[i].classList.remove('btn1__cat');
    }
    for (let i = 0; i < temp4.length; i++) {
        temp4[i].classList.remove('btn3');
        temp4[i].classList.remove('btn3__cat');

    }


    let x = document.getElementById('topBtn2');
    x.style.backgroundColor = 'rgb(255, 99, 151)';
    let y = document.getElementsByClassName('btn2__default');
    for (let i = 0; i < y.length; i++) {
        y[i].classList.add('btn2');

        if (y[i].parentNode.id == 'mainNav') {
            y[i].classList.remove('btn2');
            y[i].classList.add('btn2__cat');

        }
    }

    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (!item[0].classList.value.search('btn2')) { return item; }
    });

}

function btn3() {
    let temp1 = document.getElementById('topBtn1');
    let temp2 = document.getElementById('topBtn2');
    temp1.style.backgroundColor = 'white';
    temp2.style.backgroundColor = 'white';
    let temp3 = document.getElementsByClassName('btn1__default');
    let temp4 = document.getElementsByClassName('btn2__default');
    for (let i = 0; i < temp3.length; i++) {
        temp3[i].classList.remove('btn1');
        temp3[i].classList.remove('btn1__cat');
    }
    for (let i = 0; i < temp4.length; i++) {
        temp4[i].classList.remove('btn2');
        temp4[i].classList.remove('btn2__cat');
    }


    let x = document.getElementById('topBtn3');
    x.style.backgroundColor = 'rgb(255, 99, 151)';
    let y = document.getElementsByClassName('btn3__default');
    for (let i = 0; i < y.length; i++) {
        y[i].classList.add('btn3');

        if (y[i].parentNode.id == 'mainNav') {
            y[i].classList.remove('btn3');
            y[i].classList.add('btn3__cat');
        }
    }

    scrollItems = menuItems.map(function (ele) {
        var item = $($(this).attr("href"));
        if (!item[0].classList.value.search('btn3')) { return item; }
    });
}