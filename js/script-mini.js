﻿var modalLink,modalWindow,searchForm,arrival,departure,adults,children,filterForm,filterLink;null!=(modalLink=document.querySelector(".modal-button"))?(searchForm=(modalWindow=document.querySelector(".modal")).querySelector(".search-form"),arrival=modalWindow.querySelector("[name=arrival-date]"),departure=modalWindow.querySelector("[name=departure-date]"),adults=modalWindow.querySelector("[name=adults]"),children=modalWindow.querySelector("[name=children]"),modalWindow.classList.add("modal-hidden"),modalLink.addEventListener("click",function(e){e.preventDefault(),modalWindow.classList.toggle("modal-hidden"),arrival.focus()}),modalLink.addEventListener("keypress",function(e){32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),modalWindow.classList.toggle("modal-hidden"),arrival.focus())}),searchForm.addEventListener("submit",function(e){arrival.value&&departure.value&&adults.value&&children.value||(e.preventDefault(),alert("Сперва нужно заполнить все поля!"))})):(filterForm=document.querySelector(".filter"),(filterLink=document.querySelector(".filter-button")).addEventListener("click",function(e){e.preventDefault(),filterForm.submit()}),filterLink.addEventListener("keypress",function(e){32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),filterForm.submit())}));