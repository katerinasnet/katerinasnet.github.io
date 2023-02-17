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

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');
for (let elm of elements) {
  observer.observe(elm);
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



const scriptURL = '<https://script.google.com/macros/s/AKfycbwzxwcYF1TlJfmCUlDXG0D7wsQiCDbR6NFj9po6vckPSMiXxug7i0t5iLR-tc4cKsJ2/exec>'
const form = document.forms['Form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById('form');
//   form.addEventListener('submit', formSend);

//     async function formSend(e) {
//       e.preventDefault();

//       let error = formValidate(form);

//       let formData = new FormData(form);

//       if (error===0) {
//         !function (exports) {
//           exports.submitGoogleForm = submitGoogleForm;
        
//           function submitGoogleForm(form) {
//             try {
//               var data = [].slice.call(form).map(function(control) {
//                 return 'value' in control && control.name ?
//                   control.name + '=' + (control.value === undefined ? '' : control.value) :
//                   '';
//               }).join('&');
//               var xhr = new XMLHttpRequest();
        
//               xhr.open('POST', form.action + '/formResponse', true);
//               xhr.setRequestHeader('Accept',
//                   'application/xml, text/xml, */*; q=0.01');
//               xhr.setRequestHeader('Content-type',
//                   'application/x-www-form-urlencoded; charset=UTF-8');
//               xhr.send(data);
//             } catch(e) {}
        
//             form.parentNode.className += ' submitted';
        
//             return false;
//           }
//         }(typeof module === 'undefined' ? window : module.exports);

//         if (response.ok) {
//           let result = await response.json();
//           alert(result.message);
//           formPreview.innerHTML = '';
//           form.reset();
//         } else {
//           alert("Ошибка");
//           form.classList.remove('_sending');
//         }

//       } else {
//         alert('Заполните обязательные поля');
//       }

//     }

//     function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelectorAll('_req');
//       for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);

//         if (input.classList.contains('_email')){
//           if (emailTest(input)) {
//             formAddError(input);
//             error++;
//           }
//         } else if (input.getAttribute("type") === "checkbox" && input.checked === false){
//           formAddError(input);
//           error++;
//         } else {
//           if (input.value === '') {
//             formAddError(input);
//             error++;
//           }
//         }
//       }
//       return error;
//     }

//     function formAddError(input) {
//       input.parentElement.classList.add('_error');
//       input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//       input.parentElement.classList.remove('_error');
//       input.classList.remove('_error');
//     }

//     function emailTest(input) {
//       return !/^w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }

// });
