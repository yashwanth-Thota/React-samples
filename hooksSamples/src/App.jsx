import React from 'react'
import Container from './components/containers'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function App() {
    return (
        <Container/>
    )
}
