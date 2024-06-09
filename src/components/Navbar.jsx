import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isLogin, setIsLogin] = useState(false);
    const [authUser, setAuthUser] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:8000/profile', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
            .then(res => {
                setIsLogin(true);
                setAuthUser(res.data.data);
                if (location.pathname === '/login') {
                    navigate('/profile');
                }
            })
            .catch(err => {
                setIsLogin(false);
                if (err.response.status === 401 && location.pathname !== '/login') {
                    navigate('/login?message=' + encodeURIComponent('Anda belum login!!!'));
                }
            })
    }, [navigate, location.pathname]);

    const backgroundColor = (
        isLogin ? (
            authUser['role'] === 'admin' ? (
                'bg-blue-600'
            ) : (
                'bg-red-600'
            )
        ) : (
            'bg-blue-600'
        )
    )

    return (
        <>
            <div className={backgroundColor + " py-5"}>
                <div className="grid grid-cols-12">
                    <section className="col-span-10 col-start-2">
                        <div className="flex items-center justify-between">
                            <div>
                                {/* 1. tambahin tulisan WIRDA disebelah kiri Inventaris App */}
                                {/* 2. bikin kondisi, jika yang login email nya itu wirda@gmail.com maka muncul tulisan WIRDA disebelah kiri Inventaris App */}

                                {/* yap udah bebner ini :D YEYY!! oke jadi bener yakin bener?yes gih bobo <3yaudaa terimakasi yaa */}

                                {
                                    isLogin ? (
                                        authUser['email'] === 'wirda@gmail.com' ? (
                                            <>
                                                <Link className="mr-2 text-sm font-semibold uppercase text-white" to="/">WIRDA</Link>

                                            </>
                                        ) : (
                                            <>
                                            </>
                                        )
                                    ) : (
                                        <>
                                        </>
                                    )
                                }

                                <Link className="mr-2 text-sm font-semibold uppercase text-white" to="/">INVENTARIS APP</Link>

                                {
                                    isLogin ? (
                                        authUser['role'] === 'admin' ? (
                                            <>
                                                <Link to="/profile"><small className="text-white ms-3">Profile</small></Link>
                                                <Link to="/dashboard"><small className="text-white ms-3">Dashboard</small></Link>
                                                <Link to="/inbound"><small className="text-white ms-3">Inbound</small></Link>
                                                <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                                                <Link to="/user"><small className="text-white ms-3">User</small></Link>
                                                <Link to="/stuff"><small className="text-white ms-3">Stuff</small></Link>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/profile"><small className="text-white ms-3">Profile</small></Link>
                                                <Link to="/dashboard"><small className="text-white ms-3">Dashboard</small></Link>
                                                <Link to="/lending"><small className="text-white ms-3">Lending</small></Link>
                                            </>
                                        )
                                    ) : (
                                        <Link to="/login"><small className="text-white">Login</small></Link>
                                    )
                                }


                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </>
    );
}