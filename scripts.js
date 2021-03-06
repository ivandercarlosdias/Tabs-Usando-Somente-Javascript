"use strict";

///////////////////
// Tabs

const tabs = document.querySelectorAll(".tab__button");
const tabsNav = document.querySelector(".tab__nav");
const tabsContent = document.querySelectorAll(".tab__content");

tabsNav.addEventListener("click", function(e) {
    const tabButtonClicked = e.target.closest(".tab__button");
    //console.log(tabButtonClicked);
    if (!tabButtonClicked) return;

    tabs.forEach(tab => tab.classList.remove("tab__button--active"));
    tabButtonClicked.classList.add("tab__button--active");

    tabsContent.forEach(tabCont => tabCont.classList.remove("tab__content--active"));
    document.querySelector(`.tab__content--${tabButtonClicked.dataset.tab}`).classList.add("tab__content--active");
});