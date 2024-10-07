import React, { useReducer } from 'react';


const CustomizableForm = () => {

    const initialState = {
        fields: [],
    };

    const formReducer = (state, action) => {
        if (action.type === 'ADDFIELD') {
            return {
                ...state,
                fields: [...state.fields, action.payload],
            };
        } else if (action.type === 'REMOVEFIELD') {
            return {
                ...state,
                fields: state.fields.filter((_, index) => index !== action.index),
            };
        } else if (action.type === 'UPDATEFIELD') {
            return {
                ...state,
                fields: state.fields.map((field, index) =>
                    index === action.index ? { ...field, value: action.value } : field
                ),
            };
        } else {
            return state;
        }
    };

    const [state, dispatch] = useReducer(formReducer, initialState);

    return (
        <div className="container p-5 col-md-6">
            <h2>Customizable Form Builder</h2>
            <button
                onClick={() =>
                    dispatch({
                        type: 'ADDFIELD',
                        payload: { type: 'text', value: '' },
                    })
                }
                className="btn btn-primary mx-3"
            >
                Add Text Field
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: 'ADDFIELD',
                        payload: {
                            type: 'dropdown',
                            value: '',
                            options: ['Option 1', 'Option 2'],
                        },
                    })
                }
                className="btn btn-primary mx-3"
            >
                Add Dropdown
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: 'ADDFIELD',
                        payload: {
                            type: 'radio',
                            value: '',
                            options: ['Option 1', 'Option 2'],
                        },
                    })
                }
                className="btn btn-primary mx-3"
            >
                Add Radio Button
            </button>

            <form className='mt-2'>
                {state.fields.map((field, index) => (
                    <div key={index} style={{ marginBottom: '1rem' }}>
                        {field.type === 'text' && (
                            <input
                                type="text"
                                value={field.value}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATEFIELD',
                                        index,
                                        value: e.target.value,
                                    })
                                }
                            />
                        )}
                        {field.type === 'dropdown' && (
                            <select
                                value={field.value}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'UPDATEFIELD',
                                        index,
                                        value: e.target.value,
                                    })
                                }
                            >
                                {field.options.map((option, i) => (
                                    <option key={i} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}
                        {field.type === 'radio' &&
                            field.options.map((option, i) => (
                                <div key={i} className="">
                                    <input
                                        type="radio"
                                        name={`radio-${index}`}
                                        value={option}
                                        checked={field.value === option}
                                        onChange={() =>
                                            dispatch({
                                                type: 'UPDATEFIELD',
                                                index,
                                                value: option,
                                            })
                                        }
                                    />
                                    <label style={{ marginRight: '1rem' }}>
                                        {option}
                                    </label>
                                </div>
                            ))}

                        <button
                            type="button"
                            onClick={() => dispatch({ type: 'REMOVEFIELD', index })}
                            className='btn btn-danger mx-3'
                        >
                            Remove Field
                        </button>
                    </div>
                ))}
            </form>
        </div>
    );
};

export default CustomizableForm;