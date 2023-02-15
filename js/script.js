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


  function serializeForm(formNode) {
    console.log(formNode.elements)
  }
  
  function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
  }
  
  const applicantForm = document.getElementById('mars-once')
  applicantForm.addEventListener('submit', handleFormSubmit)

  function serializeForm(formNode) {
    const { elements } = formNode
  
    Array.from(elements)
      .forEach((element) => {
        const { name, value } = element
        console.log({ name, value })
      })
  }

  function serializeForm(formNode) {
    const { elements } = formNode
    const data = Array.from(elements)
      .filter((item) => !!item.name)
      .map((element) => {
        const { name, value } = element
  
        return { name, value }
      })
  
    console.log(data)
  }

  function serializeForm(formNode) {
    return new FormData(formNode)
  }

  async function sendData(data) {
    return await fetch('mailer/smart.php', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    })
  }
  async function handleFormSubmit(event) {
    event.preventDefault()
  
    const data = serializeForm(event.target)
    const response = await sendData(data)
  }