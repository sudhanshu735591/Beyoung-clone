import { useEffect, useState } from "react";
import "./navbar.css";
import DirectionStack from "../meterial_ui/mui";
import MenData from "../MenData/mendata";
import { Link, NavLink, Outlet, json } from "react-router-dom";

function Navbar(){
    return(
        <div className="section_tag">
            <span className="sections">BEYOUNG.</span>
            <section className="list">
                <ul>
                    <li className="men">MEN
                        {
                            <div className="listData">
                                {
                                    Object.keys(MenData).map((key)=>{
                                        return(
                                            <div>
                                                <h4>{key}</h4>
                                                {
                                                    MenData[key].list.map((val)=>{
                                                        return(
                                                            <ul>
                                                                <li className="weardata">
                                                                    <NavLink to = {(`/categories?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                                                                        {val.name}
                                                                   </NavLink>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </li>
                    <li className="men">WOMEN
                        {
                            <div className="listData">
                                {
                                    Object.keys(MenData).map((key)=>{
                                        return(
                                            <div>
                                                <h4>{key}</h4>
                                                {
                                                    MenData[key].list.map((val)=>{
                                                        return(
                                                            <ul>
                                                                <li className="weardata">
                                                                    <NavLink to = {(`/categories?search=${JSON.stringify(val.search)}&filter=${JSON.stringify(val.filter)}`)}>
                                                                        {val.name}
                                                                   </NavLink>
                                                                </li>
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </li>

                    <li>COMBOS</li>
                    <li>BB K FAVORITES</li>
                    <li>WINTER WEARS</li>
                    <li>NEW ARRIVALS</li>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    
                </ul>

            </section>

        </div>
        
    )
}

export default Navbar;









































// const data = {

//     TopWear: {
    
//     list:[
    
//     {name: 'Printend T Shirts',search: {name: 'Printend T Shirts' , description: 'Printend T Shirts'}, filter: {subCategory:'tshirt'}},
    
//     {name: 'OverSize T Shirts',search: {name: 'OverSize T Shirts' , description: 'OverSize T Shirts'}, filter: {subCategory:'tshirt'}},
    
//     ]
    
//     }
    
//     }
    
//     {
    
//     Object.keys(data).map((key)=>{
    
//     <Component id ={key}/>
    
//     })
    
//     }
    
//     const Component= (props)=>{
    
//     const onClick = (object) => {
    
//     fetch('url?filter={object.filter}&search={object.search}')
    
//     }
    
//     return (
    
//     <div>
    
//     <h4>{id}</h4>
    
//     {
    
//     data[id].map((object)=>{
    
//     return <List object={object} handler = {onClick}/>
    
//     })
    
//     }
    
//     </div>
    
//     )
    
//     }