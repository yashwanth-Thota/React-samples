import {Parser} from 'html-to-react'
export default function Parse(html){
    return Parser().parse(html)
}