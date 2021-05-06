//self typing
var i = 0;
var copy = 'I keep thinking about what it means to be a WOC in this institution instilled with European values and my thoughts keep going back to the expectation of work. Work above and beyond what is asked of my male counterparts to even just be known by my name. Work above and beyond my non-BIPOC peers to frame and reframe and recontextualize for the structure I have been dropped into. Work that is added to my load when my peers refuse to do work that feeds back into the community and doesn’t service themselves. I think the first four weeks of the last semester of my BFA education have been fruitful. I’ve gotten a lot of work done. I am so grateful to be given the opportunity to do the work because I enjoy being able to help others. Through the amount of work I have done I feel so grateful to have received support and to be able to see how I can support those around me. However, I’m reminded by the sheer amount of work that I had to do to even receive these opportunities that I am a body that is deemed lesser in the context of the institution I attend and the society we live in. So, I am tired.'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < copy.length) {
    document.getElementById("demo").innerHTML += copy.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//pop up
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}


//zooming
$('#zoom').on('input', function(){
		
    let zoomValue = $(this).val(); //get slider input value
    console.log(zoomValue);
    $('#field').css('transform', 'scale('+zoomValue+')');

});

//toggling
$(document).ready(function(){
    $(".middle").click(function(){
      $(".middletext").toggle();
    });
  });

