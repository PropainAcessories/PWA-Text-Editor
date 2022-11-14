import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {

  // creates a connection with your database.
  const jateDb = await openDB('jate', 1);

  // Creates a new transaction that determines the database and the priviledges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // opens the object store you want/
  const store = tx.objectStore('jate');

  // puts the content in the database
  const request = store.put({ jate: content });

  // Confirms request to the database
  const result = await request;
  console.log('Data Saved', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  // Creates a connection to your database.
  const jateDb = await openDB('jate', 1);

  // Creates a new transaction that determines the database and the priviledges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Opens the object store you want.
  const store = tx.objectStore('jate');

  // Retrieves all data in the database
  const request = store.getAll();

  //confirms the request
  const result = await request;
  console.log(result);
};

initdb();
