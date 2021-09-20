import { useState } from 'react';

import Accordion from './components/Accordion';
import SearchList from './components/SearchList';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: "What's React",
        content: "React is front end javascript library",
    },
    {
        title: "Why we use React",
        content: "React is favorite JS library among developers",
    },
    {
        title: "How do you use React",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: 'The Red Color',
        value: 'red',
    },
    {
        label: 'The Green Color',
        value: 'green',
    },
    {
        label: 'The Blue Color',
        value: 'blue',
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <SearchList /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? (
                <Dropdown 
                    options={options} 
                    selected={selected} 
                    onSelectChange={setSelected}
                    label="color"
                />
            ) : null}
        </div>
    );
}

export default App;