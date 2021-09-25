import { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    {
        label: "Azerbaijani",
        value: "az",
    },
    {
        label: "Russian",
        value: "ru",
    },
    {
        label: "Arabic",
        value: "ar",
    },
];

const Translate = () => {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState(options[0]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <br />
            <Dropdown
                options={options}
                label="language"
                selected={language}
                onSelectChange={setLanguage}
            />
            <br />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
