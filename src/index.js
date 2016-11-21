$(function(){
  function loadIt(){
    var linkID = $('#linkID').val();
    if(linkID == 'undefined' || linkID == '' || linkID == null){
      alert('Text Only Please')
    } else {
      console.log(linkID);
      $.ajax({
        url: "http://gateway.marvel.com:80/v1/public/characters?nameStartsWith="+encodeURIComponent(linkID)+"&apikey=bc8bc29e1ad131498d1f3edfd064b9a1",
        crossOrigin: true
      })
      .then(function(stuff){
        // console.log('got stuff', stuff);
        var holder = $('<div class="holders"></div>');
        $.each(stuff.data.results,function(req, res) {
          holder.append($('<img/>').attr('src',res.thumbnail.path + '/portrait_uncanny.' + res.thumbnail.extension));
          holder.append('<br>' + 'Hero: ' + res.name);
          holder.append('<br>' + 'Copies: ' + res.comics.available);
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
