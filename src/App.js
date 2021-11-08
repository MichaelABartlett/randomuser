import {useEffect, useState} from 'react';

import './App.css';

import PeopleList from './components/PeopleList';


const API_URL = 'https://randomuser.me/api?results=25';

// use lifecycles method - useEffect
// using promises
// componentDidMount() {
//   fetch(PUNK_API)
//   .then((response) => response.json())
//   .then(data => this.setState({
//     beers: data
//   }))
// }


function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log("i mounted")
    // use fetch API
    fetch(API_URL).then((response) => response.json())
    .then((data) => setContacts(data.results))
    .catch((error) => console.log('parsing failed', error))
  }, [])


  // this is just to make sure contacts are set in state
  useEffect(() => {
    console.log('I updated');
    console.log('contacts',contacts)
    // Use fetch API
  }, [contacts]);


  return (
    <div className="App">
      <h1>List of Random Contacts</h1>
     <ul>{contacts.map((contacts, index) => {
       return (
         <PeopleList key={index} picture={contacts.picture.medium} firstName={contacts.name.first} lastName={contacts.name.last} email={contacts.email} city={contacts.location.city} country={contacts.location.country}/>
       )
        //  <li key={contacts.email}>
        //    <img src={contacts.picture.thumbnail} alt={contacts.name.first} />
        //    <h5>{contacts.name.first}{' '}{contacts.name.last}</h5>
        //    <button></button>
        //  </li>
        })}
       </ul>
    </div>
  );
}

export default App;
