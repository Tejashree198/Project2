document.querySelectorAll('.card-text').forEach((text) => {
    if (text.scrollHeight > text.offsetHeight) {
      const readMoreLink = text.nextElementSibling; // Assuming the next element is "Read More"
      readMoreLink.style.display = 'inline-block';
    }
  });
  

  // let bucketCounter = localStorage.getItem('bucketCounter') ? parseInt(localStorage.getItem('bucketCounter')) : 0;

  // function updateBucketCounter() {
  //   const bucketIcon = document.querySelector('.bucket-icon');
  //   const bucketCounterSpan = bucketIcon.querySelector('.bucket-counter');
  //   bucketCounterSpan.textContent = bucketCounter;
  //   localStorage.setItem('bucketCounter', bucketCounter);
  // }

  // function addItemToBucket() {
  //   bucketCounter++;
  //   updateBucketCounter();
  //   // Add item to bucket logic here
  // }

  // updateBucketCounter();
