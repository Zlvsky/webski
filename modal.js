document.getElementById('turn-modal').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
  document.getElementById('stopScroll').style.overflow = 'hidden';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'none';
  document.getElementById('stopScroll').style.overflow = 'auto';
});

document.getElementById('bg-color').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'none';
  document.getElementById('stopScroll').style.overflow = 'auto';
});


$(document).ready(function() {
  $('input[name=picker]:radio').change(function(e) {
    let value = e.target.value.trim()

    $('[class^="form"]').css('display', 'none');

    switch (value) {
      case '1':
      $('.form-1').show()
        break;
      case '2':
      $('.form-2').show()
        break;
      default:
        break;
    }
  })
})
