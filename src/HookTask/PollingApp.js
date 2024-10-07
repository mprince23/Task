import React, { useReducer } from 'react';

function PollingApp() {

    const initialState = {
        options: [
            { id: 'option1', text: 'Option 1', votes: 0 },
            { id: 'option2', text: 'Option 2', votes: 0 },
            { id: 'option3', text: 'Option 3', votes: 0 },
        ],
    };
    const ADDVOTE = 'ADDVOTE';
    const reducer = (state, action) => {
        switch (action.type) {
            case ADDVOTE:
                return {
                    ...state,
                    options: state.options.map(option =>
                        option.id === action.payload ? { ...option, votes: option.votes + 1 } : option
                    ),
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const handleVote = (optionId) => {
        dispatch({ type: ADDVOTE, payload: optionId });
    };



    return (
        <div>
            <div style={{ padding: '20px' }}>
                <h1>Real-Time Polling App</h1>
                <div>
                    {state.options.map(option => (
                        <div key={option.id} style={{ marginBottom: '10px', display: "flex", alignItems: "center", gap: "10px" }}>
                            <button onClick={() => handleVote(option.id)} className='btn btn-primary'>{option.text}</button>
                            <h5 className='text-black'> Votes: {option.votes}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default PollingApp