import React from 'react'
import styled from 'styled-components'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

function Login({setUser}) {
    // eslint-disable-next-line
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const signIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const usr = result.user;
            console.warn(`User: ${JSON.stringify(usr)}`)
            const userInfo = {
                name: usr.displayName,
                email: usr.email,
                photo: usr.photoURL,
                id: usr.uid,
                token: token
            }
            localStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/')
            window.location.reload()
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            if(errorCode) {
                console.error(`Google Login Error Code: ${errorCode}`)
            }
            const errorMessage = error.message
            if(errorMessage) {
                console.error(`Google Login Error: ${errorMessage}`)
            }
            const email = error.customData.email;
            if(email) {
                console.error(`Google Login Error: ${email}`)
            }
            const credential = GoogleAuthProvider.credentialFromError(error);
            if(credential) {
                console.error(`Google Login Error: ${credential}`)
            }
        });
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
                <h1>Sign into Amazon</h1>
                <LoginButton
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`
const Content = styled.div`
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`
const AmazonLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
`
const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`
