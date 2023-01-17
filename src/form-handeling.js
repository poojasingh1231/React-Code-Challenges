import React, { useState } from 'react'

const FormHandeling = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [message, setMessage] = useState("");

    const findErrors = () => {
        const errors = [];
        if(!email || !password || !passwordConfirm) errors.push('Required all fields')

        if([...email].filter(i => i === '@').length !== 1){
            errors.push('An email must have one @ sign');
        }

        if(password.length < 8)errors.push("Password must be 8 Char or longer")
        if(password !== passwordConfirm) errors.push("password must match")
        return errors;
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const errors = findErrors();
        setMessage(errors.length ? errors.join(',') : 'User Created!'  )
    }

  return (
    <form onSubmit={handelSubmit}>
        <label htmlFor='email'>Email</label>
        <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)}/>

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)}/>

        <label htmlFor='password-confirm'>Confirm Password</label>
        <input type='password' name='password-confirm' value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}/>
        {message}
        <button type='submit'>Submit</button>
    </form>
  )
}

export default FormHandeling