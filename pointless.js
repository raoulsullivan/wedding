function showPicture(filename) {
  $('#myModal').find('.modal-content').empty().append('<img src='+filename+' class="bigsilly"></img>')
  $('#myModal').modal('show')
}
function showVideo(youtubething) {
  $('#myModal').find('.modal-content').empty().append('<iframe align="center" width="854" height="510" src="http://www.youtube.com/embed/'+youtubething+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  $('#myModal').modal('show')
}
