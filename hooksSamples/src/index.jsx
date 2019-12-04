import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme } from "@material-ui/core/styles"
import deepOrange from '@material-ui/core/colors/deepOrange'
import teal from '@material-ui/core/colors/teal'
import { grey } from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
    palette: {  
        primary: deepOrange,
        secondary: teal,
        background: grey,
        text: {
            primary:teal
        }
    },
    overrides: {
        MuiListItemText: {
            secondary: teal,
            primary: deepOrange
        }
    }
})
const ThemedApp = () => {
    return <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
}
require('dotenv').config()
ReactDOM.render(<ThemedApp/>,document.getElementById("app"))