import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Counter = () => {

    // Counter
    const [number, setNumber] = useState(0)

    // Toggle Visibility
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (!passwordRegex.test(value)) {
            setPasswordError("Password must be at least 8 characters long and contain both letters and numbers");
        } else {
            setPasswordError("");
        }
    };

    // Like Button with Count:
    const [like, setLike] = useState(0)

    // Character Counter
    const [numberData, setNumberData] = useState('')

    function handelnumber(e) {
        setNumberData(e.target.value)
    }

    // Timer Component
    const [timer, setTimer] = useState(0)

    function handleStart() {
        setInterval(() => {
            setTimer((data) => data + 1)
        }, 1000)
    }

    function handleStop() {
        setTimer(null)
    }

    // Shopping Cart Quantity
    const [shoppingCartQuantity, setShoppingCartQuantity] = useState(0)
    const [shoppingCartQuantity1, setShoppingCartQuantity1] = useState(0)
    const totalQuantity = shoppingCartQuantity + shoppingCartQuantity1;


    // Window Width 

    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
    });

    useEffect(() => {
        console.log(dimensions.width);
        setDimensions({
            width: window.innerWidth
        });
    });



    // Timer useEffect

    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timer;

        if (isActive) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isActive]);

    const handleStartStop = () => {
        setIsActive((prev) => !prev);
    };

    // Countdown Timer

    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        if (countdown > 0) {
            const countdowntimer = setInterval(() => {
                setCountdown((e) => e - 1)
            }, 1000)
            return () => clearTimeout(countdowntimer)
        }
    }, [countdown])


    // Lazy Load Images

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchedImages = [
            'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
            'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5',
            'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
        ];

        setImages(fetchedImages);
    }, []);

    return (
        <>
            <div className='container col-md-3 p-5'>
                {/* Counter */}
                <div>
                    <h1>Number : {number}</h1>
                    <button className='btn btn-success px-4 py-1' onClick={() => setNumber(number + 1)}>+</button>
                    <button className='btn btn-danger px-4 py-1 mx-3' onClick={() => setNumber(number - 1)} disabled={number <= 0}>-</button>
                </div>

                {/* Toggle Visibility */}
                <div className='mt-5 d-flex gap-2'>
                    <input
                        type={showPassword ? 'text' : "password"}
                        placeholder='Enter Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div onClick={() => setShowPassword(prev => !prev)}>
                        <span>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                {passwordError && (
                    <p className="text-danger mt-2">{passwordError}</p>
                )}

                {/* Like Button with Count */}
                <div className="mt-5">
                    <button onClick={() => setLike(like + 1)}>
                        <BiLike />
                    </button>
                    <p>Like : {like}</p>
                </div>

                {/* Character Counter */}
                <div className="mt-4">
                    <input
                        type="text"
                        value={numberData}
                        onChange={handelnumber}
                    />
                    <p>Number : {numberData.length}</p>
                </div>

                {/* Timer Component */}
                <div className="mt-5">
                    <h5>Timer : {timer}</h5>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                </div>

                {/* Shopping Cart Quantity */}
                <div className="mt-5">
                    <div className="d-flex gap-3">
                        <p>Item 1</p>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick={() => setShoppingCartQuantity(shoppingCartQuantity + 1)}>+</button>
                            <button type="button" className="btn btn-outline-primary">{shoppingCartQuantity}</button>
                            <button type="button" className="btn btn-outline-primary" disabled={shoppingCartQuantity <= 0} onClick={() => setShoppingCartQuantity(shoppingCartQuantity - 1)}>-</button>
                        </div>
                    </div>

                    <div className="d-flex gap-3 mt-3">
                        <p>Item 2</p>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary" onClick={() => setShoppingCartQuantity1(shoppingCartQuantity1 + 1)}>+</button>
                            <button type="button" className="btn btn-outline-primary">{shoppingCartQuantity1}</button>
                            <button type="button" className="btn btn-outline-primary" disabled={shoppingCartQuantity1 <= 0} onClick={() => setShoppingCartQuantity1(shoppingCartQuantity1 - 1)}>-</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>Total Quantity: {totalQuantity}</h5>
                    </div>

                </div>


                {/* Window Width  */}

                <div className="">
                    <p>{dimensions.width}px</p>
                </div>


                {/* Timer useEffect */}

                <div className="mt-4 text-center">
                    <h1>Timer</h1>
                    <h2>{count} seconds</h2>
                    <button className="btn btn-primary me-2" onClick={handleStartStop}>
                        {isActive ? 'Stop' : 'Start'}
                    </button>
                </div>


                {/* Countdown Timer */}

                <div className="mt-4">
                    <h4>Time : {countdown}</h4>
                </div>


                {/* Lazy Load Images */}


                <div className='mt-4'>
                    {
                        images.map((src, index) => (
                            <LazyLoadImage
                                src={src}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        ))
                    }
                </div>


            </div>
        </>
    )
}

export default Counter;
