import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const addUser = async () => {
        const userObj = {
            name: "keval",
            age: 21,
            email: "ashfanjh@gmail.com",
            password: "wsc76en87yew5r",
            isActvie: true
            
        }
        try {
            const rec = await axios.post("https://node5.onrender.com/user/user/", userObj)
            console.log(rec)
            console.log(rec.data)
        } catch (eror) {
            console.log(eror)
            alert("error while adding users ")
        }

    }
    const deleteUser = async () => {
        
        try {
            const rec = await axios.delete(`https://node5.onrender.com/user/user/${"6996b487bfcb359658e48563"}`);
            console.log("Deleted User Response:", rec.data);
            alert("User deleted successfully");
        } catch (error) {
            console.log(error.response?.data || error.message);
            alert("Error while deleting user");
        }

    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>ApiDemo2</h2>
            <button onClick={() => { addUser() }}>Add</button>
            <button onClick={()=>{deleteUser("6996b487bfcb359658e48563")}}>Delete</button>
        </div>
    )
}
