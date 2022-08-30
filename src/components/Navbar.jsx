import React, {useState} from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const styles = {
        'typography': {
            'color': 'white',
            'backgroundColor': 'red',
            'textTransform': 'uppercase'
        },
        nav: {
            'color': 'yellow',
        }
    }
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            {
                // Logo section.

                // Text Logo.
                <p style={styles.typography} className='w-1/6'>My logo</p>

                // Image Logo.
                // <img src={logo} alt="logo" className='w-[124px] h-[32px]'/>
            }

            {
                /* Feature Sections */
                <>
                    {/* Desktop */}
                    <ul className='flex list-none'>
                        {
                            navLinks.map((nav, index) => (
                                <li key={nav.id} style={styles.nav} className={`${index - 1 > navLinks.length ? 'mr-0' : 'mr-3'}`}>
                                    <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Mobile */}
                    <div className='sm:hidden flex flex-1 justify-end'>
                        <img src={toggle ? close : menu}
                            className='w-[28px] h-[28px] object-contain'
                            onClick={() => setToggle((prev) => !prev)}
                        />
                    </div>

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                        <ul className="list-none justify-end item-center flex-1">
                            {navLinks.map((nav, index) => (
                                <li key={nav.id} className={`font-popins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                                    <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            }
        </nav>
    )
}

export default Navbar