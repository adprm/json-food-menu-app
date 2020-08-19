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
            `)
        })
    })
};

showAllMenu();