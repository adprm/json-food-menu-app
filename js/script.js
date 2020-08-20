// testing get data json
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
}

xhr.open('GET', 'data/data.json', true);
xhr.send();

// created function show all menu
function showAllMenu() {
    $.getJSON('data/data.json', function (data) {

        let menu = data.menu;
        // looping objek
        $.each(menu, function (index, data) {
            $('#list-menu').append(`
            <div class="col-md-4 card-group">
                <div class="card m-2">
                    <img src="assets/images/`+ data.image + `" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">`+ data.name + `</h5>
                        <p class="card-text">`+ data.description + `</p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                </div>
            </div>
            `);
        });
    });
};

// show all menu
showAllMenu();

// data by category
$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let category = $(this).html();
    $('h1').html(category);

    if (category == 'All Menu') {
        showAllMenu();
        return;
    }

    $.getJSON('data/data.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (index, data) {
            if (data.category == category) {
                content += `
                <div class="col-md-4 card-group">
                    <div class="card m-2">
                        <img src="assets/images/`+ data.image + `" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">`+ data.name + `</h5>
                            <p class="card-text">`+ data.description + `</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
                `
            }
        });

        $('#list-menu').html(content);

    });
});