import React from 'react';

function LoginButton() {
    const handleLogin = () => {
        // Insert login logic here
        console.log('Login Button Clicked');
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}

export default LoginButton;