function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3500);
  }
  
  window.onload = fadeOut();
  document.querySelector('.menu-icon').addEventListener('click', function(){
    document.querySelector('.header').classList.toggle('close');
  
  })
  