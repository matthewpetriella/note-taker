const fs = require('fs');
const { filterByQuery, findById, createNewNote, validateNote } = require('../lib/notes.js');
const { notes } = require('../data/notes');

test('creates a note object', () => {
  const note = createNewNote({ title: 'Task 1', id: 'test1234' }, notes);

  expect(note.title).toBe('Task 1');
  expect(note.id).toBe('test1234');
});

test('filters by query', () => {
  const startingNotes = [
    {
        id: '2',
        title: 'Task 2',
        body: 'this is where task 2 will go',
    },
    {
        id: '3',
        title: 'Task 3',
        body: 'this is where task 2 will go',
    }
  ];

  const updatedNotes = filterByQuery({ title: 'Task 2' }, startingNotes);

  expect(updatedNotes.length).toEqual(1);
});

test('finds by id', () => {
  const startingNotes = [
    {
        id: '2',
        title: 'Task 2',
        body: 'this is where task 2 will go',
    },
    {
        id: '3',
        title: 'Task 3',
        body: 'this is where task 2 will go',
    }
  ];

  const result = findById('3', startingNotes);

  expect(result.title).toBe('Task 3');
});
