

$(document).ready(function(){

    $("#simpan").click(function(){

        let newNama = $("#nama").val();
        let newEmail = $("#email").val();
        let newNim = $("#nim").val();

        let pNama = $("<p>").text(newNama).addClass("nama");
        let pEmail = $("<p>").text(newEmail).addClass("email");
        let pNim = $("<p>").text(newNim).addClass("nim");

        $("#result").empty().append(pNama, pEmail, pNim);
    });

});