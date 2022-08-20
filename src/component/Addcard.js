import '../App.css';
import '../Web.css';
import '../Mobile.css';
import Header_navber from './Header_navber';
import Fooder from './Fooder';
import { useParams, Link } from "react-router-dom";
import { additems_data } from '../api/api';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { add_card_items_local_data } from '../api/api';


const Addcard = () => {
    const [loca_adddata, setLoca_adddata] = useState([]);
        
    const [quntitycounter, setQuntitycounter] = useState();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        setInterval(function () {
            add_card_items_local_data()
                .then((res) => {
                    setLoca_adddata(res);
                })
        }, 100);
    }, [])


    const delet = (e) => {
        const add_items = JSON.parse(localStorage.getItem("add_items"));
        add_items.splice(e, 1);
        localStorage.setItem('add_items', JSON.stringify(add_items));
    }

    const itemscounter = (e)=>{
        if(e[0] === 'incre'){
            console.log(e[0])
            console.log(e[1])
        }else{
            console.log(e[0])
            console.log(e[1])
        }
    }


    return (
        <>
            <Header_navber />
            <br />
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-12">
                        asdf
                    </div>

                    <div className="col-md-8 col-12">
                        {loca_adddata.length != 0 ?
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='text-light' style={{ background: '#006a50' }}>
                                        <th>image</th>
                                        <th>Item Name</th>
                                        <th>Quntity</th>
                                        <th>Price(tk)</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        loca_adddata.map((data, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <img width="80" height="70" src={"http://screete.bikretabd.com/items_image_file/" + data.img} />
                                                        </td>
                                                        <td>{data.item_name}</td>
                                                        <td>
                                                            <input type="button" onClick={()=>itemscounter([data, 'decre'])} value="-" />
                                                            <span className="" style={{paddingRight:'6px', paddingLeft:'6px'}}>{data.qnt}</span>
                                                            <input type="button" onClick={()=>itemscounter([data, 'incre'])} value="+" />
                                                        </td>
                                                        <td>{data.price}</td>
                                                        <td> <span className="text-danger" style={{ cursor: 'pointer' }} onClick={() => delet(index)}>Delete</span></td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    <tr>
                                        <td colspan="3" align="right">Total = </td>
                                        <td>1200 Tk</td>
                                    </tr>


                                </tbody>
                            </Table>
                            : <div className='text-center text-danger py-3'>No addcard data </div>}
                    </div>
                </div>
            </div>
            <br />
            <Fooder />
        </>
    )
}




export default Addcard;