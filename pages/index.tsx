import Head from 'next/head'
import React, { useState, useEffect  } from 'react';
import styles from '@/styles/Home.module.css'
import ImageGallery from './gallery';
import Chat from './chat'

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [chatOpen, setChatOpen] = useState(false);

	const handleMenuClick = () => {
	  	setIsOpen(!isOpen);
	};
	const handleChatClick = () => {
		setChatOpen(!chatOpen);
	};

  	return (
	<div>
		<Head>
			<title>AltoTech Hotel</title>
			<link rel="icon" />
		</Head>

		<main className="w-full h-screen overflow-x-hidden;">

		{/* Menu left side */}
		<div className={`${isOpen ? 'absolute top-0 left-0 transition-transform duration-[0.3s] ease-[ease-out] bg-[rgba(33, 37, 41, 0.5)]' :
									'hidden'}`}>
			<div className={`${isOpen ? 'absolute top-0 left-0 bg-white h-[960px] w-[277px]' : 'hidden'}`}>
				{/* Hotel logo */}
				<div className='flex flex-col items-center justify-center text-center bg-[#326BFF] h-[280px]'>
					<div className='rounded-lg p-4'>
						<img className='w-24' src="group.png" alt="logo" />
					</div>
					<p className='text-[17px] text-white'>Room 301</p>
				</div>

				<div className="flex flex-col justify-between h-full">
					<div className='flex flex-col gap-4 mt-4;'>
						<ul>
							<li className='flex items-center gap-4 p-3'>
								<img className='h-5 w-5' src="Icon-Home.png" alt="home" />
								<p className='text-[17px] leading-[25px] text-[#979FA7]'>Home</p>
							</li>
							<li className='flex items-center gap-4 p-3'>
								<img className='h-5 w-5'src="Icon-Booking.png" alt="booking" />
								<p className='text-[17px] leading-[25px] text-[#979FA7]'>My Booking & Order</p>
							</li>
							<li className='flex items-center gap-4 p-3'>
								<img className='h-5 w-5'src="Icon-Bell-gray.png" alt="notification" />
								<p className='text-[17px] leading-[25px] text-[#979FA7]'>Notification</p>
							</li>
							<li className='flex items-center gap-4 p-3 w-full'>
								<img className='h-5 w-5'src="English.png" alt="eng" />
								<div className="flex items-center justify-between w-full">
									<p className='text-[17px] leading-[25px] text-[#979FA7]'>English</p>
									<p className='text-[17px] text-[#326BFF]'>Change</p>
								</div>
							</li>
						</ul>
					</div>

					<div className="flex justify-between w-full p-4 border border-solid border-[#E2ECF8]">
						<img className='w-[80.98px] h-[25px]' src="group-color.png" alt="logo" />
						<p className='text-[17px] font-normal text-[#979FA7]'>Version 1.0.0</p>
					</div>
				</div>
			</div>

			{/* Close menu */}
			<div className={`${isOpen ? 'absolute top-0 left-60 bg-[black] h-10' : 'hidden'}`}>
				<button className="h-full" onClick={handleMenuClick}>
					<img className="h-full" src="close.png" alt="close" />
				</button>
			</div>

		</div>

		<div 
			className={`${isOpen ? 'w-full bg-[rgba(33,37,41,0.5)] brightness-[50%] translate-x-[276px] transition-transform duration-[0.3s] ease-[ease-out]' : chatOpen ? 'hidden' : 'absolute top-0 left-0 bg-white w-full'}`}
			>
			<div className="absolute w-full h-[280px] bg-[#326BFF] left-0 top-0"></div>
			<nav className="flex absolute w-full h-11 left-0 top-11 items-center justify-between top-0 w-full h-12 px-4 py-0 bg-[#326BFF]">
				{/* Hamburger Menu*/}
				<button className="h-full" onClick={handleMenuClick}>
					{isOpen ? (
						<img className="h-3/6"
							src="Icon-close.png" alt="menus"
						/>
					) : (
						<img className="h-3/6"
							src="Icon-Hamburger-menu.png" alt="menus"
						/>
					)}
				</button>

				<div className="flex items-center justify-center h-full">
					<img className="h-full object-cover" src="Alto-Logo.png" alt="logo" />
					<div className="flex flex-col items-center justify-center">
						<p className='font-bold text-white text-lg'>AltoTech</p>
						<div className="flex mt-[-0.5rem] tracking-[0.2rem];">
							<hr style={{ width: '100%', height: '4px', border: 0, background: '#000' }} />
							<p className='font-normal text-white text-[8px];'>Hotel</p>
						</div>

						<div className="flex mt-[-0.5rem] items-center">
							<hr className="flex-grow border-2 border-t border-red-500 mx-2" />
							<p className='font-normal text-white text-[8px]'>Hotel</p>
							<hr className="flex-grow border-2 border-t border-red-500 mx-6" />
						</div>
					</div>
				</div>

				<button className="h-full">
					<img className="h-[60%] object-cover" src="Icon-Bell.png" alt="Notification" />
				</button>
			</nav>

			<ImageGallery />

			<div className='absolute top-[460px] w-full'>
			<h1 className="text-xl font-bold text-left mb-4 p-4">Good evening, Mr.Joe</h1>
			
			{/* Hotel functions */}
			<div className="flex justify-center items-center mb-6">
			<div className="grid grid-rows-[repeat(1,1fr)] grid-cols-[repeat(4,1fr)] items-start w-full justify-items-center">
				<div className="flex flex-col items-center justify-center text-center gap-1 w-12">
					<button className='justify-center h-12 w-12 bg-[#326BFF] rounded-[50%] border-[none]'>
						<img className="mx-auto" src="Icon-VirtualKey.png" alt="VirtualKey" />
					</button>
					<p className='font-normal text-xs text-[#326BFF] leading-[120%]'>Virtual key</p>
				</div>

				<div className="flex flex-col items-center justify-center text-center gap-1 w-12">
					<button className='justify-center h-12 w-12 bg-[#326BFF] rounded-[50%] border-[none]'>
						<img className="mx-auto" src="Icon-Room.png" alt="VirtualKey" />
					</button>
					<p className='font-normal text-xs text-[#326BFF] leading-[120%]'>Smart Room</p>
				</div>

				<div className="flex flex-col items-center justify-center text-center gap-3 w-12">
					<button className='justify-center h-12 w-12 bg-[#326BFF] rounded-[50%] border-[none]'>
						<img className="mx-auto" src="Icon-Wifi.png" alt="VirtualKey" />
					</button>
					<p className='font-normal text-xs text-[#326BFF] leading-[120%]'>Wifi</p>
				</div>

				<div className="flex flex-col items-center justify-center text-center gap-1 w-12">
					<button className='justify-center h-12 w-12 bg-[#326BFF] rounded-[50%] border-[none]'>
						<img className="mx-auto" src="Icon-VirtualKey.png" alt="VirtualKey" />
					</button>
					<p className='font-normal text-xs text-[#326BFF] leading-[120%]'>Hotel Information</p>
				</div>
			</div>
			</div>
			
			<h1 className="text-xl font-bold text-left p-4">Welcome to SYN Hotel</h1>

			{/* Services */}
			<div className="grid grid-rows-[repeat(2,1fr)] grid-cols-[repeat(2,1fr)] gap-4 w-full p-4 mb-4">
				<a href="" className="bg-[#D9D9D9] h-[200px] p-2 rounded-lg border-[none] flex flex-col justify-end">
					<p>Room Service</p>
				</a>
				<a href="" className="bg-[#D9D9D9] h-[200px] p-2 rounded-lg border-[none] flex flex-col justify-end">
					<p>Service Request</p>
				</a>

				<a href="" className="bg-[#D9D9D9] h-[200px] p-2 rounded-lg border-[none] flex flex-col justify-end">
					<p>Room Service</p>
				</a>
				<a href="" className="bg-[#D9D9D9] h-[200px] p-2 rounded-lg border-[none] flex flex-col justify-end">
					<p>Room Service</p>
				</a>
			</div>
			</div>

			{/* Chat */}
			<button className="fixed h-12 w-12 bg-[#326BFF] cursor-pointer rounded-[5rem] border-[none] right-0 bottom-8"
					onClick={handleChatClick}>
				<img className="mx-auto" src="Icon-LiveChat.png" alt="Live Chat" />
			</button>

		</div>
		</main>

		<div className={`${chatOpen ? 'flex flex-col justify-between absolute top-0 w-full h-screen bg-gray' :
									'hidden'}`}>	
			<button className="absolute top-0 left-0 h-[48px] bg-[#326BFF] m-4 p-1 rounded-3xl z-[100]" onClick={handleChatClick}>
				<img className="h-full"
					src="Icon-close.png" alt="close"/>
			</button>
			<Chat />
			
		</div>
	</div>
  )
}
