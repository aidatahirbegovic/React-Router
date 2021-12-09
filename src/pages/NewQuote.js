import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api'; 

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData);
        //console.log(quoteData);
        //history.push('/quotes'); //push methog pushes new page on to the stack or replace method that replaces the page
        //with push we can go back with back button with replace we cant
        //if we submit form we will navigate to quotes page
    };
    return <QuoteForm isLoading={status==='pending'} onAddQuote={addQuoteHandler}/>
};

export default NewQuote;