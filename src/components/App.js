import Accordion from './Accordion';

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

const App = () => {
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;