import React from 'react';
import "./quote-generator.css"
const RandomQuoteGenerator = () => {
    const [data, setData] = React.useState(null);

    async function updateQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const {statusCode, statusMessage, ...data} = await response.json();
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
            setData(data);
        } catch (error) {
            // If the API request failed, log the error to console and update state
            // so that the error will be reflected in the UI.
            console.error(error);
            setData({content: "Opps... Something went wrong"});
        }
    }
    React.useEffect(() => {
        updateQuote();
    }, []);

    if (!data) return null;


    return (
        <section className="quote-generator">
            <h1 className="title">Random Quote Generator</h1>
            <div className="quote-content">
                <p className="quote-text">{data.content}</p>
                <p className="quote-name">{data.author && (
                    <div className="blockquote-footer">
                        <cite title="Source Title">{data.author}</cite>
                    </div>)}</p>
            </div>
            <div className="quote-button">
                <button className="new-quote-button" onClick={updateQuote}>New Quote</button>
            </div>
        </section>
    );
};

export default RandomQuoteGenerator;