"use strict";
const $mainSectionTwoViewmore = document.querySelector(".main_section2_viewmore");
$mainSectionTwoViewmore.addEventListener("mouseenter", () => {
    if ($mainSectionTwoViewmore.classList[1] === "slide-in-left") {
        $mainSectionTwoViewmore.classList.remove("slide-in-left");
    }
    else {
        $mainSectionTwoViewmore.classList.add("slide-in-left");
    }
});
console.log(window.screen);
