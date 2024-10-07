import React, { useState } from "react";

function FormInputHandling() {

    const [userdata, setUserDeta] = useState({
        firstName: "",
        lastName: "",
        password: "",
        bod: "",
        age: "",
        color: "",
        select: "",
        range: "",
    });

    const [hobbies, sethobbies] = useState([]);
    const [gender, setGender] = useState([])

    function handleclick() {
        console.log({ ...userdata, hobbies, gender });
    }

    function handlechange(e) {
        const { name, value } = e.target;
        setUserDeta({ ...userdata, [name]: value });
    }

    function handlehobbies(e) {
        const { checked, value } = e.target

        if (checked) {
            sethobbies([...hobbies, value])
        } else {
            const filterhobbies = hobbies.filter((item) => item !== value)
            sethobbies(filterhobbies)
        }
    }

    function handleGender(e) {
        const { checked, value } = e.target

        if (checked) {
            setGender([...gender, value])
        } else {
            const filtergender = gender.filter((item) => item !== value)
            setGender(filtergender)
        }
    }


    return (
        <div className="border border-primary ps-5 pe-5 col-xl-5 container mt-4">
            <div className="container mt-3">
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        FirstName
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="firstName"
                        value={userdata.firstName}
                        onChange={(e) => handlechange(e)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        LastName
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="lastName"
                        value={userdata.lastName}
                        onChange={(e) => handlechange(e)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="password"
                        value={userdata.password}
                        onChange={(e) => handlechange(e)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        BOD
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="bod"
                        value={userdata.bod}
                        onChange={(e) => handlechange(e)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Age
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        name="age"
                        value={userdata.age}
                        onChange={(e) => handlechange(e)}
                    />
                </div>




                <label htmlFor="">Hobbies : </label>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        value="Dance"
                        onChange={(e) => handlehobbies(e)}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Dance
                    </label>

                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        value='Cooking'
                        onChange={(e) => handlehobbies(e)}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Cooking
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        value='Writing'
                        onChange={(e) => handlehobbies(e)}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Writing
                    </label>
                </div>

                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        value='Acting'
                        onChange={(e) => handlehobbies(e)}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Acting
                    </label>
                </div>

                <div className="mb-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Gender
                    </label>
                    <div className="">
                        <input
                            type="radio"
                            id="exampleFormControlInput1"
                            name="male"
                            onChange={(e) => handleGender(e)}
                        />
                        <label htmlFor="">Male</label>
                    </div>
                    <div className="">
                        <input
                            type="radio"
                            name="fmale"
                            onChange={(e) => handleGender(e)}
                        />
                        <label htmlFor="">Fmale</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="">Choose Color : </label>
                    <input
                        type="color"
                        name="color"
                        value={userdata.color}
                        onChange={(e) => handlechange(e)}
                    />
                </div>

                <div className="mb-4">
                    <select class="form-select" aria-label="Default select example" name="select" value={userdata.select} onChange={(e) => handlechange(e)}>
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="mb-4">
                    <input type="range" name="range" value={userdata.range} onChange={(e) => handlechange(e)} />
                </div>

                <button
                    className="btn btn-primary container col-md-5 mb-4"
                    onClick={handleclick}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default FormInputHandling