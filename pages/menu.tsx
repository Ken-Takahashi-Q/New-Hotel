import styles from '../styles/Home.module.css';
import { useState } from 'react';
export default function HamburgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

	const handleMenuClick = () => {
	  setIsOpen(!isOpen);
	};

    return (
        <div className="hamburger_menu">
            <div className='flex flex-col items-center text-center bg-[#326BFF]'>
                <div className='rounded-lg p-4'>
                    <img className='w-24' src="group.png" alt="logo" />
                </div>
                <p className='text-[17px] text-white'>Room 301</p>
            </div>

            <div className='flex flex-col gap-4 '>
                <ul>
                    <li className='flex items-center gap-4 fixed w-full max-w-[400px] bg-[white] z-[999] transition-all duration-[0.3s] ease-[ease-out] -right-full inset-y-0;'>
                        <img className='h-6 w-6' src="Icon-Home.png" alt="home" />
                        <p>Home</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <img className='h-6 w-6'src="Icon-Booking.png" alt="booking" />
                        <p>My Booking & Order</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <img className='h-6 w-6'src="Icon-Notification.png" alt="notification" />
                        <p>Notification</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <img className='h-6 w-6'src="English.png" alt="eng" />
                        <p>English</p>
                        <p>Change</p>
                    </li>
                </ul>
            </div>

            <div className={styles.menu_footer}>
                <img src="" alt="" />
                <p>Version 1.0.0</p>
            </div>
        </div>
    );
}
