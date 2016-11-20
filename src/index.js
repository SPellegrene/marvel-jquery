
function loadIt(){
var linkID = $('#linkID').val();
  if(linkID == 'undefined' || linkID == '' || linkID == null){
    alert('Please enter the name of your hero')
} else {
    console.log(linkID);
$.ajax({url:"https://gateway.marvel.com:443/v1/public/characters?apikey=bc8bc29e1ad131498d1f3edfd064b9a1" + linkID}).done(function(stuff){
  var holder = $('<div class="holders"></div>');
  $.each(stuff.data.results,function(req, res) {
    holder.append($('<img/>').attr('src',res.thumbnail.path + '/portrait_uncanny.' + res.thumbnail.extension));
    holder.append('<br>' + 'Hero: ' + res.name);
    holder.append('<br>' + 'Copies ' + res.comics.available);
  $('.content').append(holder);
  })
$('.content').empty().append(holder);
  })

.fail(function(){
alert('Retry that search silly human.')
    })
    }
}
$('#send').on('click', loadIt);
