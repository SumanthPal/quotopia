import React from 'react';
import {ChangeEvent} from "react";
import "./Title-Generator.css"


const TagQuoteGenerator = () => {
    const [data, setData] = React.useState(null);
    const [inputText, setInputText] = React.useState("");
    const [updated, setUpdated] = React.useState('');


    const convertString = (str) => str.toLowerCase().replace(/\s+/g, '-');


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUpdated(convertString(event.target.value));

            updateQuote();
        }
    };


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
    };


    async function updateQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random?tags=" + updated);
            console.log("https://api.quotable.io/random?" + updated)


            const {statusCode, statusMessage, ...data} = await response.json();
            if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
            setData(data);
        } catch (error) {
            // If the API request failed, log the error to console and update state
            // so that the error will be reflected in the UI.
            console.error(error);
            setData({content: "Please enter a valid genre"});
        }
    }
    React.useEffect(() => {
        updateQuote();
    }, []);

    if (!data) return (
        <section className="quoter">
            <h1 className="title">Quote Generator by Genre</h1>
            <p className="subtitle">Enter the genre's  name to get a quote (ex. History or Technology)</p>
            <input type="text" onChange={handleChange}onKeyDown={handleKeyDown} value={inputText} />
        </section>
    );


    return (
        <section className="quoter">
            <h1 className="title">Quote Generator by Genre</h1>
            <p className="subtitle">Enter the genre's  name to get a quote (ex. History or Technology)</p>
            <input type="text" onChange={handleChange}onKeyDown={handleKeyDown} value={inputText} />
            <div className="quote-content">
                <p>{data.content}</p>
            </div>
            {data.author && (
                <div className="blockquote-footer">
                    <cite title="Source Title">{data.author}</cite>
                </div>
            )}


        </section>
    );
};

export default TagQuoteGenerator;