$(function(){
  function loadIt(e){
    e.preventDefault();
    var linkID = $('#linkID').val();
    if(typeof linkID == 'undefined' || linkID == '' || linkID == null){
      alert('Please try again')
    } else {
      console.log(linkID);
      $.ajax({
        url: "https://gateway.marvel.com/v1/public/characters?nameStartsWith="+ encodeURIComponent(linkID) +"&apikey=bc8bc29e1ad131498d1f3edfd064b9a1",
        crossOrigin: true
      })
      .then(function(response){
        var holder = $('<div class="holders"></div>');
        $.each(response.data.results,function(i, character) {
          holder.append($('<img/>').attr('src',character.thumbnail.path + '/portrait_uncanny.' + character.thumbnail.extension));
          holder.append('<br>' + 'Hero: ' + character.name);
          holder.append('<br>' + 'Copies: ' + character.comics.available);
          $('.content').append(holder);
        })
        $('.content').empty().append(holder);
      })
      .fail(function(){
        alert('Error 404. Retry that search silly human.')
      })
    }
  }

  $('#send').on('click', loadIt);
})
