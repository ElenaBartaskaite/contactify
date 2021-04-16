import style from './App.module.scss';
import React, { useEffect, useState } from 'react';
import ContactTable from './ContactTable';
import Filters from './Filters';
import { faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const url = "https://contactify-api.herokuapp.com/api/contacts";

function App() {
  const [contacts, updateContacts] = useState(null);
  const [error, toggleError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        updateContacts(data);
      } catch (error) {
        toggleError(true);
        console.log(error);
      }
    })();
  }, [])

  return (
    <div className={style.center}>
      {contacts === null ? error === false ?
        <Loading /> :
        <Error /> :
        <React.Fragment>
          <Filters contacts={contacts} />
          <ContactTable contacts={contacts} />
        </React.Fragment>
      }
    </div>
  );
}

function Error() {
  return (
    <div className={style.whiteText}>
      <FontAwesomeIcon icon={faExclamationTriangle} />
        Something went wrong. Refresh the page.
    </div>
  );
}

function Loading() {
  return (
    <div className={style.loading}>
      <div className={style.spinner}>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
        Loading...
    </div>
  );
}

export default App;
