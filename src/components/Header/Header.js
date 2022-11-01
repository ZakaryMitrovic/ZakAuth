import {Link} from 'react-router-dom';
import './Header.css';
import { authContexte } from "../../Contexte/authContexte";
import { useContext, useState } from "react";

const Header = props => {
    const ctx = useContext(authContexte);

    let isAuth = false;
    if(ctx.user != undefined){
        isAuth = true;
    }

    const btnDeconnexion = async(e)=>{
        e.preventDefault();
        ctx.logout();
        isAuth=false;
    };

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="Header">
                    <div className="navbar-header">

                        <ul className="nav navbar-nav">
                            <li style={{display:(isAuth ? "block" : "none")}}><Link to="/posts">Posts</Link></li>
                        </ul>

                        <ul className="nav navbar-nav">
                            <li style={{display:(isAuth ? "none" : "block")}}><Link to="/register">Inscription</Link></li>
                            <li style={{display:(isAuth ? "none" : "block")}}><Link to="/login">Authentification</Link></li>
                        </ul>
                    </div>
                    
                    <button onClick={e=>btnDeconnexion(e)} style={{display:(isAuth ? "block" : "none")}} className="btn btn-danger">Déconnexion</button>

                </div>
            </div>
        </nav>
    );
};

export default Header;
