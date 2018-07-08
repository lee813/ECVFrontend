$(function () {
    // $('#loading').hide()
    var constructItem = function(entries) {
        entries.forEach(entry => {
            $('.content').append("<div>"+ entry.name.first +" " + entry.name.last+"</div>")
            $('.bootstrap-content').append("<li class='list-group-item'>"+ entry.name.first +" " + entry.name.last+"</li>")
        });
    }

    $('#load').on('click', () => {
        $('.loading').show('slow')
        $.get('https://randomuser.me/api?results=10').then((data) => {
            console.log(data)
            $('.loading').hide(500)
            constructItem(data.results)

        })
    })
});