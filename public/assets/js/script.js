const $noteForm = document.querySelector('#note-form');

const handleNoteFormSubmit = event => {
  event.preventDefault();

  const title = $noteForm.querySelector('[title="note-title"]').value;
  const body = $noteForm.querySelector('[title="body"]').value;
 
  const noteObject = { title, body };

  fetch('api/notes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(noteObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an note!');
    });
};

$noteForm.addEventListener('submit', handleNoteFormSubmit);