import React from 'react'
import '../node_modules/datatables.net-dt/css/jquery.dataTables.css'
import $ from 'jquery';
import {DataTable as dt} from 'datatables.net'

$.DataTable = dt;

export default class DataTable extends React.Component {
    data=[
        {name:"a",id:1,score:20},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100},
        {name:"z",id:2,score:90},
        {name:"p",id:3,score:10},
        {name:"r",id:4,score:20},
        {name:"s",id:5,score:50},
        {name:"b",id:6,score:20},
        {name:"c",id:7,score:100}
    ]
    columns=[
        {
            title:'S.No',
            width:50,
            data:'id'
        },
        {
            title:'NAME',
            width:80,
            data:'name'
        },
        {
            title:"SCORE",
            width:50,
            data:'score'
        }
    ]
    componentDidMount(){
        $(this.refs.table).DataTable({
            data:this.data,
            columns:this.columns,
        });
    }
    render(){
    return (
        <div className='col-5' style={{margin:"auto"}}>
            <table ref='table' className="col table table-striped"/>  
        </div>
    )
    }
}
