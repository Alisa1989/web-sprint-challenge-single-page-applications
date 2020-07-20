import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import axios from 'axios';
//import * as yup from 'yup';

// const formSchema = yup.object().shape({
//     name: yup.string().required("Must input a name"),
//     size: yup.string().required("Must select a size"),
//     extraCheese: "",
//     pepperoni: "",
//     ricotta: "",
//     olives: "",
//     specialInstructions: ""
// });

const Pizza = (props) => {

    const [formState, setFormState] = useState({
        name: "",
        size: "",
        extraCheese: "",
        pepperoni: "",
        ricotta: "",
        olives: "",
        specialInstructions: ""
    });

    const formSubmit = e => {
        e.preventDefault();
    
        // formSchema.isValid(formState).then(valid => {
        //   if (valid) {
            console.log("form submitted");
            // axios
            //   .post("https://reqres.in/api/users", formState)
            //   .then(response => console.log(response))
            //   .catch(err => console.log(err));
           // props.addUser(formState);
        //   } else {
        //     console.log("form not complete");
        //   }
        // })
      }

    const inputChange = e => {
        e.persist();
        console.log("input changed", e.target.value, e.target.checked);
        //validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
      }

    return (
        <div>
            <div>
                <h1>Make your pizza as Yummy as you want!!</h1>
                <Link path to="/">Back to Home</Link>
            </div>
            <form onSubmit={formSubmit}>
                <label>
                    Name
            <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                    {/* {errorState.name.length > 0 ? (
                            <p className="error">{errorState.name}</p>
                        ) : null} */}
                </label>
                <label htmlFor="size">
                    Select pizza size?
        <select
                        name="size"
                        id="size"
                        value={formState.position}
                        onChange={inputChange}
                    >
                        <option value=" ">Small 10'</option>
                        <option value="Small 10'">Small 10'</option>
                        <option value="Medium 12'">Medium 12'</option>
                        <option value="Large 14'">Large 14'</option>
                        <option value="Extra Large 16'">Extra Large 16'</option>
                    </select>
                </label>
                <label htmlFor="glutenFree">
                    Select for Gluten Free
        <input
                        type="checkbox"
                        id="glutenFree"
                        name="glutenFree"
                        checked={formState.glutenFree}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="pepperoni">
                Select for Pepperoni
        <input
                        type="checkbox"
                        id="pepperoni"
                        name="pepperoni"
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="ricotta">
                Select for Ricotta
        <input
                        type="checkbox"
                        id="ricotta"
                        name="ricotta"
                        checked={formState.ricotta}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="olives">
                Select for Olives
        <input
                        type="checkbox"
                        id="olives"
                        name="olives"
                        checked={formState.olives}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="specialInstructions">
        Special Requests?
        <textarea
          type="text"
          name="specialInstructions"
          id="specialInstructions"
          placeholder="example: extra crispy, precut..."
          value={formState.specialInstructions}
          onChange={inputChange}
        />
      </label>
                <button>Order Now!</button>
            </form>
        </div>
    );
};


export default Pizza;
