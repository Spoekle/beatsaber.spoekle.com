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

reviewForm.addEventListener('submit', function(event) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("User is signed in");
      // Your code to write to the database goes here
    } else {
      // User is signed out.
      console.log("User is signed out");
    }
  });
});