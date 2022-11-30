import React, { useState } from 'react'
import axios from "axios";
import { TextField } from '@mui/material';

function MessageForm() {
    const [smstext, setSmstext] = useState(" ")
    const handleSubmit=()=>{
        axios
        .post("http://localhost:4000/smstext/", {
          data: smstext,
        })
        .then(function (response) {
          console.log(response.data);
        });
    }
  return (
    <div>
        <h1>Type the message to send to students</h1>
         <TextField
          fullWidth
          id="smstext"
          type="text"
          onChange={(e) =>
            setSmstext( e.target.value )
          }
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default MessageForm