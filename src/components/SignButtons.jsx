import React from 'react'

export default function SignButtons({ hoverSignIn, hoverSignUp, signInId, signUpId, style }) {
    return (
        <>
            <button onMouseOver={hoverSignIn}
                id={signInId}
                className={`font-medium rounded-[5px] ${style}`}>
                Sign in
            </button>
            <button onMouseOver={hoverSignUp}
                id={signUpId}
                className={`font-medium rounded-[5px] bg-buttonSignCustom ${style}`}>
                Sign up
            </button>
        </>
    )
}
