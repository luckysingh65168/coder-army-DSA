import React from 'react'
import { NavLink,Link } from 'react-router-dom';

const navList = [
    {
        title: "Search",
        path: "/search"
    },
    {
        title: "Sort",
        path: "/sort"
    },
    {
        title: "Tree",
        path: "/tree"
    },
    {
        title: "Graph",
        path: "/graph"
    },
    {
        title: "DP",
        path: "/dp"
    }
];

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 bg-gray-400 m-2 rounded-xl'>
            <div>
                <Link to="/">
                    <h1 className='text-2xl cursor-pointer font-bold'>Kuldeep</h1>
                </Link>
            </div>
            <div className='flex gap-6'>
                {
                    navList.map((item, index) => (
                        <NavLink key={index} to={item.path} className={({ isActive }) =>
                            isActive ? "underline underline-offset-8" : ""
                        }>
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>

        </nav>
    )
}

export default Navbar