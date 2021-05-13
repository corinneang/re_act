//self typing
var i = 0;
var copy = ['“Where are you from?” has been a question I dread in casual conversation. I know that people are looking for a simple answer, but it sets off a bizarre internal debate on how to respond. I grew up as a third culture kid (TCK), a diasporic body [1]; perching on the fences between different cultures and spaces. The place I grew up in, the culture I was raised with, the education I received, and the media I consumed all originated from varying histories and narratives. Navigating these interconnected parts of myself quickly became increasingly complex. Complexity which doesn’t fit into the contemporary world that constantly asks for simpler stories and answers. More often than not I find it difficult to enter spaces when the narrative boxes offered to fit in are so limiting. As someone consistently forced to work within the frameworks of others I question if there is a way of undoing this means of control through a tool utilized to "organize" and simplify: graphic design. I question if there are frameworks that allow for an opening of space, exploration and fluidity. This brought me to consider where I saw this most naturally: on commutes watching the facade of the city and it’s communities passing by. To the right is a rumination on the visual manifestation of this through a Risograph-ed flipbook.', 
'Moving between multiple cultures and spaces the commutes I embarked on day to day became a comforting ritual no matter where I was in the world. Without fail everyday I would sit down, feel the motion and watch the environment come to life. Like my TCK upbringing, the commute is a space in-between which I’ve found to be grounding in a constantly shifting world. Whizzing past are these beautifully abstract and instantaneous impressions of these places. When you finally slow, you can see all the stories within communities that happen when the visual facade of the city and the people interact. Imprinted into my mind are the boisterous neon signs that lined buildings in Hong Kong calling out to people with English and Chinese side by side. Whizzing past were the hand-painted flourishing letters of Manila, announcing the destination of the vehicles they were on and hinting to their Spanish & American colonial past. Inherently there is this notion of the individual impacting the whole. Space made for the implementation of multiplicity. Akin to a frame by frame animation, mutliple perspectives come together to form a narrative. This site works similarly, with each tile contributing to the whole image.'];
var speed = 60; /* The speed/duration of the effect in milliseconds */

function sectionOne() {
  if (i < copy[1].length) {
    document.getElementById('demo').innerHTML += copy[0].charAt(i);
    i++;
    setTimeout(sectionOne, speed);
  }
}

function sectionTwo() {
    if (i < copy[1].length) {
      document.getElementById('demo').innerHTML += copy[1].charAt(i);
      i++;
      setTimeout(sectionTwo, speed);
    }
  }

$(function(){
    $('.refgroup1').hide();
    $('.refgroup2').hide();
    $('#back').hide();
    $('#typeit').click(function(){
        i = 0;
        $('#demo').html('');
        sectionOne();
        $('#title').html('(ACT)');
        $('.refgroup1').show();
        $('#back').show();
    });

    $('#slider').hide();
    $('#back2').hide();
    $('#typeit2').click(function(){
        i = 0;
        $('#demo').html('');
        sectionTwo();
        $('#title').html('FLECTING'); 
        $('#slider').show();
        $('.refgroup2').show();
        $('#back2').show();
    });

    $('#ref1cont').hide();
    $('#ref1').click(function(){
        $('#ref1cont').toggle();
    });
    $('#ref2cont').hide();
    $('#ref2').click(function(){
        $('#ref2cont').toggle();
    });

    $('#dropdown1').hide();
    $('#work1').click(function(){
        $('#dropdown1').toggle();
    });

    $('#dropdown2').hide();
    $('#work2').click(function(){
        $('#dropdown2').toggle();
    });



 //       $(".flip").flip({
   //         axis: 'x'
    //    });
});



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
		
    let zoomValue = $(this).val();
    console.log(zoomValue);
    $('#field').css('transform', 'scale('+zoomValue+')');

});

//toggling
//$(document).ready(function(){
//    $(".middle").click(function(){
//      $(".middletext").toggle();
//    });
//  });

