import React from 'react';

const QuoteSection = () => {
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
       <section className="App">
           <div className="quote-content">
                <p>{data.content}</p>
           </div>
           {data.author && (
               <div className="blockquote-footer">
                   <cite title="Source Title">{data.author}</cite>
               </div>
           )}
           <div className="quote-button">
                <button className="quote-button" onClick={updateQuote}>New Quote</button>
           </div>
       </section>
    );
};

export default QuoteSection;