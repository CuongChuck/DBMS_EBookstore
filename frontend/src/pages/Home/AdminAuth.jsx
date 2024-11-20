import React from 'react';

const AdminAuth = () => {
    return (
        <div>
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
        </div>
    )
}

export default AdminAuth