import React from 'react'

const Navbar = ({ navList, filterList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    {
                        navList.map((lists) => {
                            return (
                                <button
                                    className="btn-group__item"
                                    onClick={() =>filterList(lists)}>
                                    {lists}
                                </button>
                            );
                        })
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;
