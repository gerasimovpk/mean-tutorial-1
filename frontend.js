$(document).ready(function(){
    $("#getTimeButton").click(function(){
        $.get("./api/time", function(res) {
            $("#timeResult").html(res.time)
        })
    })
})