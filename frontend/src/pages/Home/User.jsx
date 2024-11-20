import React from 'react'

const User = () => {
    return (
        <div>
            <h2>Log In</h2>
            <div>
                <label>Username</label>
                <input type='text' />
            </div>
            <div>
                <label>Password</label>
                <input type='password' />
            </div>
            <div>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default User