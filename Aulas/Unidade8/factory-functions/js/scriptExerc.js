function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element => {
      element.style.display = "none";
    });
    return this;
  }

  function show() {
    elements.forEach(element => {
      element.style.display = "initial";
    });
    return this;
  }

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element => {
      element.classList.add(className)
    })
    return this;
  }

  function removeClass(className) {
    elements.forEach(element => {
      element.classList.remove(className)
    })
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}

function handleClick(event) {
  console.log(event.target);
}

const btns = $$('button');
console.log(btns.hide().show());

btns.on('click', handleClick);
btns.addClass('active');
btns.removeClass('active');
