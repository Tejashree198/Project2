document.querySelectorAll('.card-text').forEach((text) => {
    if (text.scrollHeight > text.offsetHeight) {
      const readMoreLink = text.nextElementSibling; // Assuming the next element is "Read More"
      readMoreLink.style.display = 'inline-block';
    }
  });
  