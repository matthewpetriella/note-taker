const $noteForm = document.querySelector('#notes-form');
const $displayArea = document.querySelector('#display-area');

const printResults = resultArr => {
  console.log(resultArr);

  const noteHTML = resultArr.map(({ id, title, body }) => {
    return `
  <div class="col-12 col-md-5 mb-3">
    <div class="card p-3" data-id=${id}>
      <h4 class="text-primary">${title}</h4>
      <p>Body: ${body.substring(0, 1).toUpperCase() + body.substring(1)}<br/>
    </div>
  </div>
    `;
  });

  $displayArea.innerHTML = noteHTML.join('');
};

const getNotes = (formData = {}) => {
  let queryUrl = '/api/notes?';

  Object.entries(formData).forEach(([key, value]) => {
    queryUrl += `${key}=${value}&`;
  });

  console.log(queryUrl);

  fetch(queryUrl)
    .then(response => {
      if (!response.ok) {
        return alert('Error: ' + response.statusText);
      }
      return response.json();
    })
    .then(noteData => {
      console.log(noteData);
      printResults(noteData);
    });
};

const handleGetNotesSubmit = event => {
  event.preventDefault();
  getNotes(noteObject);
};

$noteForm.addEventListener('submit', handleGetNotesSubmit);

getNotes();
