const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeElemSpase = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElemSpase.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');
      
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Получить элемент контейнера
var btnContainer = document.getElementById("promobtn");

// Сделать все кнопки с class="btn" внутри контейнера
var btns = btnContainer.getElementsByClassName("promo__link");

// Выполните цикл по кнопкам и добавьте активный класс к текущей/нажатой кнопке
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn");

    // Если нет активного класса
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" btn", "");
    }

    // Добавить активный класс для текущей/нажатой кнопки
    this.className += " btn";
  });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error===0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
          method:'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formPreview.innerHTML = '';
          form.reset();
        } else {
          alert("Ошибка");
          form.classList.remove('_sending');
        }

      } else {
        alert('Заполните обязательные поля');
      }

    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('_req');
      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')){
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false){
          formAddError(input);
          error++;
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
      }
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }

    function emailTest(input) {
      return !/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});