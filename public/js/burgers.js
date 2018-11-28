// Make sure we wait to attach our handlers until the DOM is fully loaded.
// var burgers = [];
// $.get("/", function (data) {
//     Burgers = data;
// });
$(function () {

    $(".devourBurger").on("click", function () {
        var id = $(this).data("id");

        var devourState = {
            devouredValue: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed Devoured", devourState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".addBurger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".deleteBurger").on("click", function () {
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            data: id
        }).then(
            function () {
                console.log("Deleted Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
