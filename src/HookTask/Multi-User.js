import React, { useReducer, useContext, createContext, useRef, useEffect, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'John Doe' });
    const value = { user, setUser };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

const initialState = {
    lines: [],
    currentLine: [],
};

const drawingReducer = (state, action) => {
    if (action.type === 'START_DRAWING') {
        return { ...state, currentLine: [action.payload] };
    } else if (action.type === 'DRAW') {
        return { ...state, currentLine: [...state.currentLine, action.payload] };
    } else if (action.type === 'STOP_DRAWING') {
        return { ...state, lines: [...state.lines, state.currentLine], currentLine: [] };
    } else if (action.type === 'RESET_DRAWING') {
        return { ...initialState };
    } else {
        return state;
    }
};

const DrawingCanvas = () => {
    const { user } = useAppContext();
    const [state, dispatch] = useReducer(drawingReducer, initialState);
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);

    const handleMouseDown = (e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const position = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        dispatch({ type: 'START_DRAWING', payload: position });
        isDrawing.current = true;
    };

    const handleMouseMove = (e) => {
        if (!isDrawing.current) return;
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const position = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        dispatch({ type: 'DRAW', payload: position });
    };

    const handleMouseUp = () => {
        if (isDrawing.current) {
            dispatch({ type: 'STOP_DRAWING' });
            isDrawing.current = false;
        }
    };

    const handleReset = () => {
        dispatch({ type: 'RESET_DRAWING' });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        state.lines.forEach((line) => {
            ctx.beginPath();
            line.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            });
            ctx.stroke();
        });

        if (state.currentLine.length > 0) {
            ctx.beginPath();
            state.currentLine.forEach((point, index) => {
                if (index === 0) {
                    ctx.moveTo(point.x, point.y);
                } else {
                    ctx.lineTo(point.x, point.y);
                }
            });
            ctx.stroke();
        }
    }, [state]);

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={800}
                height={500}
                style={{ border: '1px solid black', cursor: 'crosshair' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            />
            <div>
                <button className="btn btn-primary" onClick={handleReset}>
                    Reset Drawing
                </button>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <AppProvider>
            <DrawingCanvas />
        </AppProvider>
    );
};

export default App;
