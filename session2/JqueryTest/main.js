$(document).ready(function(){
    $.get('https://randomuser.me/api?results=10').then(function(data){
        var results = data.results
        results.forEach(element => {
            $('#content').append("<div>"+element.name.first+" "+element.name.last+"</div>")
        });
    })
})
