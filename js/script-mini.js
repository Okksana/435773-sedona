﻿var modalLink,modalWindow,searchForm,arrival,departure,filterForm,filterLink;null!=(modalLink=document.querySelector(".modal-button"))?(searchForm=(modalWindow=document.querySelector(".modal")).querySelector(".search-form"),arrival=modalWindow.querySelector("[name=arrival-date]"),departure=modalWindow.querySelector("[name=departure-date]"),modalWindow.classList.add("modal-hidden"),modalLink.addEventListener("click",function(e){e.preventDefault(),modalWindow.classList.toggle("modal-hidden"),arrival.focus()}),modalLink.addEventListener("keypress",function(e){32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),modalWindow.classList.toggle("modal-hidden"),arrival.focus())}),searchForm.addEventListener("submit",function(e){arrival.value&&departure.value||(e.preventDefault(),alert("Сперва нужно заполнить такие поля: дата заезда, дата выезда!"))})):(filterForm=document.querySelector(".filter"),(filterLink=document.querySelector(".filter-button")).addEventListener("click",function(e){e.preventDefault(),filterForm.submit()}),filterLink.addEventListener("keypress",function(e){32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),filterForm.submit())}));