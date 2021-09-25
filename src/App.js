import { useState } from "react";

import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import SearchList from "./components/SearchList";
import Translate from "./components/Translate";
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
    {
        title: "Whats React?",
        content: "React is a front end javascript library",
    },
    {
        title: "Why we use React?",
        content: "React is favorite JS library among developers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: "The Red Color",
        value: "red",
    },
    {
        label: "The Green Color",
        value: "green",
    },
    {
        label: "The Blue Color",
        value: "blue",
    },
];

// const showAccordion = () => {
//     if (window.location.pathname === "/") {
//         return <Accordion items={items} />;
//     }
// };
// const showList = () => {
//     if (window.location.pathname === "/list") {
//         return <SearchList />;
//     }
// };
// const showDropdown = () => {
//     if (window.location.pathname === "/dropdown") {
//         return (
//             <Dropdown
//             // label="color"
//             // options={options}
//             // selected={selected}
//             // onSelectChange={setSelected}
//             />
//         );
//     }
// };
// const showTranslation = () => {
//     if (window.location.pathname === "/translation") {
//         return <Translate />;
//     }
// };

// const showComponent = (route, component) => {
//     if (window.location.pathname === route) {
//         return component;
//     }
// };

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <SearchList />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="color"
                    options={options}
                    selected={selected}
                    onSelectChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

export default App;
