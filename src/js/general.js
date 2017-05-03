"use strict";

// Script for Order switcher 
$(document).ready(function() {
    $("#content__order-switcher").on("click", function() {
        if($("#content__order-switcher").prop('checked')) {
            $(".content__order-switcher-wrap").addClass("checked");
        }
        else {
            $(".content__order-switcher-wrap").removeClass("checked");
        }
    })
    
})
