import dayjs from 'dayjs';
import { navIcons, navLinks } from '#constants';
import React from 'react'
import useWindowStore from '#store/window';

const Navbar = () => {

    const {openWindow} = useWindowStore();

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="os logo" />
            <p className='font-bold'>Surya's portfolio</p>

            <ul>
                {navLinks.map(({id, name, type})=>(
                    <li key={id} onClick={()=> openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {navIcons.map((id)=>(
                    <li key={id.id} className='icon-hover'>
                        <img src={id.img} alt={`icon-${id.id}`} />
                    </li>
                ))}
            </ul>

            <time>{dayjs().format("ddd h:mm A | DD-MM-YYYY")}</time>
        </div>
    </nav>
  )
}

export default Navbar