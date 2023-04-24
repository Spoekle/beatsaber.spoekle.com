var reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = reviewForm.elements['name'].value;
    var rating = reviewForm.elements['rating'].value;
    var comment = reviewForm.elements['comment'].value;
    var reviewData = {
        name: name,
      rating: rating,
      comment: comment
    };
    firebase.database().ref('reviews').push(reviewData).then(function() {
      console.log('Review submitted successfully!');
      reviewForm.reset();
    }).catch(function(error) {
      console.error('Error writing review to Firebase Realtime Database:', error);
    });
  });