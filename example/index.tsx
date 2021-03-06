import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useInputFilter } from '../.';

interface Person {
  username: string;
  website: string;
}

const people: Person[] = [
  {
    username: 'alistair',
    website: 'https://alistair.cloud',
  },
  {
    username: 'scott',
    website: 'https://hiett.dev',
  },
  {
    username: 'robert',
    website: 'https://github.com/robertt',
  },
  {
    username: 'benja',
    website: 'https://benja.dev',
  },
  {
    username: 'driaug',
    website: 'https://driaug.com',
  },
  {
    username: 'delmo',
    website: 'https://delmo.dev',
  },
  {
    username: 'wyatt',
    website: 'https://wyattsell.com/',
  },
];

const App = () => {
  const { state, setState, filtered } = useInputFilter((user, state) => {
    return user.username.toLowerCase().includes(state.toLowerCase());
  }, people);

  return (
    <div>
      <h1>
        <code>use-input-filter</code>
      </h1>
      <p>
        A very basic solution to filtering through items in an array in React.
      </p>
      <input
        type="text"
        placeholder="Search"
        value={state}
        onChange={e => setState(e.target.value)}
      />
      {filtered.map(user => {
        return (
          <a key={user.username} href={user.website}>
            {user.username}
          </a>
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
