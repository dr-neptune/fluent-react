import { people } from './data.js';
import { getImageUrl } from './utils.js';

const Profile = (person) => {
    return (
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
}

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist').map(Profile);
    const nonChemists = people.filter(person => person.profession !== 'chemist').map(Profile);

    return (
        <>
            <article>
                <h1>Chemists</h1>
                <ul>{chemists}</ul>
            </article>
            <article>
                <h1>Other Scientists</h1>
                <ul>{nonChemists}</ul>
            </article>
        </>
    );
}


export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];


import { Fragment } from 'react';
import { recipes } from './data.js';

export default function RecipeList() {
    const ingredients = recipes.map(recipe =>
        <Fragment key={recipe.id}>
            <h1>{recipe.name}</h1>
            <ul>
                {recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}
            </ul>
        </Fragment>
    );

    return (
        <div>
            <h1>Recipes</h1>
            {ingredients}
        </div>
    );
}








import { recipes } from './data.js';

const Recipe = ({ id, name, ingredients }) => {
    return (
        <div key={id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(Recipe)}
        </div>
    );
}



import { Fragment } from 'react';

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export default function Poem() {
    return (
        <article>
            {poem.lines.map((line, index) =>
                <Fragment key={index}>
                    <p key={index}>
                        {line}
                    </p>
                    {index !== poem.lines.length - 1 ? <hr /> : null}
                </Fragment>
            )}
        </article>
    );
}


export default function Clock({ time }) {
    let hours = time.getHours();

    return (
        <h1 id="time" className={hours >= 0 && hours <= 6 ? 'night' : 'day'}>
            {time.toLocaleTimeString()}
        </h1>
    );
}




import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
    const currentPerson = person;
    return (
        <Panel>
            <Header currentPerson={currentPerson} />
            <Avatar currentPerson={currentPerson} />
        </Panel>
    )
}

function Header(currentPerson) {
    return <h1>{currentPerson.name}</h1>;
}

function Avatar(currentPerson) {
    return (
        <img
            className="avatar"
            src={getImageUrl(currentPerson.imageId)}
            alt={currentPerson.name}
            width={50}
            height={50}
        />
    );
}



import Panel from './Panel.js';
import { getImageUrl } from './utils.js';

export default function Profile({ person }) {
    return (
        <Panel>
            <Header {...person} />
            <Avatar {...person} />
        </Panel>
    )
}

function Header(person) {
    return <h1>{person.name}</h1>;
}

function Avatar({ name, imageId }) {
    return (
        <img
            className="avatar"
            src={getImageUrl({ imageId })}
            alt={name}
            width={50}
            height={50}
        />
    );
}






export default function StoryTray({ stories }) {
    stories.push({
        id: 'create',
        label: 'Create Story'
    });

    return (
        <ul>
            {stories.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}




export default function StoryTray({ stories }) {
    const createStory = {
        id: 'create',
        label: 'Create Story'
    };

    return (
        <ul>
            {stories.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
            <li key={createStory.id}>{createStory.label}</li>
        </ul>
    );
}






export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}





import { useState } from 'react';

export default function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');

    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        // eslint-disable-next-line

        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
}


import { useState } from 'react';

export default function FeedbackForm() {
  function handleClick() {
    let name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}


import { useState } from= 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        setWalk(!walk);
        alert(`${walk ? 'Stop is next' : 'Walk is next'}`)
    }

    return (
        <>
            <button onClick={handleClick}>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}
















import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pend => pend + 1);
    await delay(3000);
    setPending(pend => pend - 1);
    setCompleted(comp => comp + 1);
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


export function getFinalState(baseState, queue) {
    queue.map(ele => typeof ele === 'function' ? baseState = ele(baseState) : baseState = ele);
    return baseState;
}









import { useImmer } from 'use-immer';

export default function Scoreboard() {
    const [player, setPlayer] = useImmer({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10,
    });

    function handlePlusClick() {
        setPlayer(player => {
            player.score = player.score + 1;
        })
    }

    function handleFirstNameChange(e) {
        setPlayer(player => {
            player.firstName = e.target.value;
        });
    }

    function handleLastNameChange(e) {
        setPlayer(player => {
            player.lastName = e.target.value;
        });
    }

    return (
        <>
            <label>
                Score: <b>{player.score}</b>
                {' '}
                <button onClick={handlePlusClick}>
                    +1
                </button>
            </label>
            <label>
                First name:
                <input
                    value={player.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={player.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
        </>
    );
}




import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

    function handlePlusClick() {
     setPlayer({...player, score: player.score + 1});
    }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
      setPlayer({
          ...player,
          lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}







import { useState } from 'react';
import Background from './Background.js';
import Box from './Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

    function handleMove(dx, dy) {
        setShape({...shape,
                  position: {
                      ...shape.position,
                      x = x + dx,
                      y = y + dy,
                  }
        });
    }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}






import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
      setProducts(products.map(product => {
          if (product.id === productId) {
              return { ...product, count: product.count + 1 };
          } else {
              return product;
          }
      }));
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}


import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        return setProducts(products.map(p => p.id === productId ? { ...p, count: p.count + 1 } : p));
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}







import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

    function handleIncreaseClick(productId) {
        return setProducts(products.map(p => p.id === productId ? { ...p, count: p.count + 1 } : p));
    }

    function handleDecreaseClick(productId) {
        return setProducts(products.map(p => p.id === productId ?
                                             p.count > 0 ? { ...p, count: p.count - 1 } : p : p));
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                    <button onClick={() => {
                        handleDecreaseClick(product.id);
                    }}>
                        –
                    </button>
                </li>
            ))}
        </ul>
    );
}
















import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

    function handleAddTodo(title) {
        setTodos([
            { id: nextId++, title: title, done: false },
            ...todos,
        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => { t.id === nextTodo.id ? nextTodo : t }));
  }

    function handleDeleteTodo(todoId) {
        setTodos(todos.filter(t => t.id === todoId));
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}


















import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
    const [todos, setTodos] = useImmer(
        initialTodos
    );

    function handleAddTodo(title) {
        setTodos(draft => draft.push({
            id: nextId++,
            title: title,
            done: false
        }));
    }

    function handleChangeTodo(nextTodo) {
        setTodos(draft => {
            const todo = todos.find(t =>
                todo.id === nextTodo.id
            );
            todo.title = nextTodo.title;
            todo.done = nextTodo.done;
        });
    }

    function handleDeleteTodo(todoId) {
        setTodos(draft => {
            const index = todos.findIndex(t =>
                t.id === todoId
            );
            todos.splice(index, 1);
        })

    }

    return (
        <>
            <AddTodo
                onAddTodo={handleAddTodo}
            />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}





import { useState } from 'react';

export default function Picture() {
    const [bgActive, setBgActive] = useState('background');

    const handleClickPicture = (e) => {
        e.stopPropagation();
        setBgActive('picture');
    };

    const handleClickBackground = (e) => {
        e.stopPropagation();
        setBgActive('background');
    };

    return (
        <div className={bgActive === 'background' ? "background background--active" : "background"}
            onClick={handleClickBackground}>
            <img
                className={bgActive === 'picture' ? "picture picture--active" : "picture"}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={handleClickPicture}
            />
        </div>
    );
}




import { useState } from 'react';

export default function Clock(props) {
    return (
        <h1 style={{ color: props.color }}>
            {props.time}
        </h1>
    );
}




















import { useState } from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList.js';

let nextId = 3;
const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

export default function TravelPlan() {
    const [items, setItems] = useState(initialItems);

    function handleAddItem(title) {
        setItems([
            ...items,
            {
                id: nextId++,
                title: title,
                packed: false
            }
        ]);
    }

    function handleChangeItem(nextItem) {
        setItems(items.map(item => {
            if (item.id === nextItem.id) {
                return { ...nextItem, packed: !item.packed };
            } else {
                return item;
            }
        }));
    }

    function handleDeleteItem(itemId) {
        setItems(
            items.filter(item => item.id !== itemId)
        );
    }

    const numPacked = items.filter(item => item.packed === true).length;

    return (
        <>
            <AddItem
                onAddItem={handleAddItem}
            />
            <PackingList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
            <hr />
            <b>{numPacked} out of {items.length} packed!</b>
        </>
    );
}








import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);

    const toggleAttribute = (setter, newObj, attr, flip = true) => {
        setter(letters.map(letter => {
            if (letter.id === newObj.id) {
                return { ...letter, [attr]: flip ? !letter[attr] : true};
            } else {
                return flip ? letter : { ...letter, [attr]: false };
            }
        }));
    };

    function handleHover(highlighted) {
        toggleAttribute(setLetters, highlighted, 'isHighlighted', false)
    }
    function handleStar(starred) {
        toggleAttribute(setLetters, starred, 'isStarred')
    }
    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={letter.isHighlighted}
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}


import { useState } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
    const [selectedIds, setSelectedIds] = useState([]);
    const selectedCount = selectedIds.length;

    function handleToggle(toggledId) {
        if (selectedIds.includes(toggledId)) {
            setSelectedIds([...selectedIds.filter(s => s !== toggledId)]);
        } else {
            setSelectedIds([...selectedIds, toggledId]);
        }
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={selectedIds.includes(letter.id)}
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}





import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <Input label="First input" text={text} textHandler={handleChange} />
            <Input label="Second input" text={text} textHandler={handleChange} />
        </>
    );
}

function Input({ label, text, textHandler }) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={textHandler}
            />
        </label>
    );
}








import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
    const [query, setQuery] = useState('');

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} handleChange={handleChange} />
            <hr />
            <label>{query}</label>
            <List items={foods.filter(food => food.name.includes(query) )} />
        </>
    );
}

function SearchBar({ query, handleChange }) {
    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}










import { useState } from 'react';
import { foods, filterItems } from './data.js';

export default function FilterableList() {
    const [query, setQuery] = useState('');

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <SearchBar query={query} handleChange={handleChange} />
            <hr />
            <List items={filterItems(foods, query)} />
        </>
    );
}

function SearchBar({ query, handleChange }) {
    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}



export function filterItems(items, query) {
  let query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export const foods = [{
  id: 0,
  name: 'Sushi',
  description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
  id: 1,
  name: 'Dal',
  description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
  id: 2,
  name: 'Pierogi',
  description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
  id: 3,
  name: 'Shish kebab',
  description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
        id: 4,
        name: 'Dim sum',
        description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
    }];








/* on preserving and resetting state problems */

import { useState } from 'react';

export default function App() {
    const [showHint, setShowHint] = useState(false);

    return (
        <>
            {showHint && <p><i>Hint: Your favorite city?</i></p>}
            <Form />
            <button onClick={() => setShowHint(!showHint)}>
                {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
        </>
    )
}

function Form() {
    const [text, setText] = useState('');
    return (
        <textarea
            value={text}
            onChange={e => setText(e.target.value)}
        />
    );
}







import { useState } from 'react';

export default function App() {
    const [reverse, setReverse] = useState(false);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');

    let checkbox = (
        <label>
            <input
                type="checkbox"
                checked={reverse}
                onChange={e => setReverse(e.target.checked)}
            />
            Reverse order
        </label>
    );

    return (
        <>
            {reverse ?
                <>
                    <Field label="Last Name" text={last} handler={setLast} />
                    <Field label="First Name" text={first} handler={setFirst} />
                </> :
                <>
                    <Field label="Last Name" text={last} handler={setLast} />
                    <Field label="First Name" text={first} handler={setFirst} />
                </>}
            {checkbox}
        </>
    );
}

function Field({ label, text, handler }) {
    return (
        <label>
            {label}:{' '}
            <input
                type="text"
                value={text}
                placeholder={label}
                onChange={e => handler(e.target.value)}
            />
        </label>
    );
}
