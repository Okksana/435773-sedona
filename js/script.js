var modalLink, modalWindow, searchForm, arrival, departure, adults, children, filterForm, filterLink;

modalLink = document.querySelector(".modal-button");

if (modalLink != null) {
  modalWindow = document.querySelector(".modal");
  searchForm = modalWindow.querySelector(".search-form");
  arrival = modalWindow.querySelector("[name=arrival-date]");
  departure = modalWindow.querySelector("[name=departure-date]");
  adults = modalWindow.querySelector("[name=adults]");
  children = modalWindow.querySelector("[name=children]");

    modalWindow.classList.add("modal-hidden");

    modalLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalWindow.classList.toggle("modal-hidden");
      arrival.focus();
      });

    modalLink.addEventListener("keypress", function (evt) {
      if (evt.keyCode === 32 || evt.keyCode === 13) {
        evt.preventDefault();
        modalWindow.classList.toggle("modal-hidden");
        arrival.focus();
        }
      });

    searchForm.addEventListener("submit", function (evt) {
      if (!arrival.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        alert("Сперва нужно заполнить все поля!");
        }
      });
  }

else {

  filterForm = document.querySelector(".filter");
  filterLink = document.querySelector(".filter-button");

    filterLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      filterForm.submit();
    });

    filterLink.addEventListener("keypress", function (evt) {
      if (evt.keyCode === 32 || evt.keyCode === 13) {
        evt.preventDefault();
        filterForm.submit();
        }
      });
  }
