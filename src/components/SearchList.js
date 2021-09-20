import axios from 'axios';
import { useState, useEffect } from 'react';

const SearchList = () => {
    const [term, setTerm] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            async function search() {
                const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    }
                });
                setResult(response.data.query.search);
            }
            if(term) {
                search();
            }
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [term]);

    const renderedResults = result.map((result) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* XSS - attack */}
                    <span 
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default SearchList;