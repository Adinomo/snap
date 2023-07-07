import React, { useRef, useState } from 'react'
import logo from '../assets/img/logo.svg';
import arrow_up from '../assets/img/icon-arrow-up.svg';
import arrow_down from '../assets/img/icon-arrow-down.svg';
import calendar from '../assets/img/icon-calendar.svg';
import todo from '../assets/img/icon-todo.svg';
import reminder from '../assets/img/icon-reminders.svg';
import planning from '../assets/img/icon-planning.svg';
import menu from "../assets/img/icon-menu.svg";
import close from "../assets/img/icon-close-menu.svg"; 

function NavBar() {
	const [dropDown1, setDropdown1] = useState(false);
	const [dropDown2, setDropdown2] = useState(false);
	const [open, setOpen] = useState(false);

  return (
			<div className="navbar font-semibold">
				<img
					src={logo}
					alt="snap"
					className="mt-2"
				/>
				<div className={`navbar_collapse z-30 md:flex ${open ? "block" : "hidden"}`}>
					<div
						className="relative md:flex items-center mx-3"
						onClick={() => setDropdown1(!dropDown1)}>
						<li className="list-none nav-hover mb-3 md:mb-0">Features</li>
						<img
							src={dropDown1 ? arrow_up : arrow_down}
							className="ms-1 w-[0.6rem] h-[0.5rem] absolute md:static top-[0.35rem] left-16"
							alt="arrow"
						/>
						<ul className={`dropdown ${dropDown1 ? "block" : "hidden"}`}>
							<li className="flex mb-2 nav-hover">
								<img
									src={todo}
									alt={"todo"}
									className="w-4 h-4 me-2"
								/>{" "}
								Todo List
							</li>
							<li className="flex mb-2 nav-hover">
								<img
									src={calendar}
									alt={"calendar"}
									className="w-4 h-4 me-2"
								/>{" "}
								Calendar
							</li>
							<li className="flex mb-2 nav-hover">
								<img
									src={reminder}
									alt={"reminder"}
									className="w-4 h-4 me-2"
								/>{" "}
								Reminders
							</li>
							<li className="flex nav-hover">
								<img
									src={planning}
									alt={"planning"}
									className="w-4 h-4 me-2"
								/>{" "}
								Planning
							</li>
						</ul>
					</div>
					<div
						className="relative md:flex items-center"
						onClick={() => setDropdown2(!dropDown2)}>
						<li className="list-none nav-hover mx-3 md:mx-0 mb-3 md:mb-0">Company</li>
						<img
							src={dropDown2 ? arrow_up : arrow_down}
							className="ms-1 w-[0.6rem] h-[0.5rem] absolute md:static top-[0.35rem] left-20"
							alt="arrow"
						/>
						<ul
							className={`md:absolute bg-white md:custom_shadow rounded-lg px-5 pt-1 pb-3 md:py-4 w-[107px] ms-3 md:ms-0 left-0 top-[2rem] ${
								dropDown2 ? "block" : "hidden"
							}`}>
							<li className="flex mb-2 nav-hover">History</li>
							<li className="flex mb-2 nav-hover">Our Team</li>
							<li className="flex nav-hover">Blog</li>
						</ul>
					</div>
					<li className="list-none nav-hover mx-3 mb-3 md:mb-0">Careers</li>
					<li className="list-none nav-hover mx-3 mb-4 md:mb-0">About</li>
					<div className="text-sm md:ms-auto text-gray-500 flex flex-col md:flex-row">
						<button className="me-2 px-4 py-2 hover:text-black w-fit">Login</button>
						<button className="ms-3 md:ms-0 w-fit border-2 border-gray-400 nav-hover rounded-lg px-4 py-2">
							Register
						</button>
					</div>
				</div>
				<div className='z-50 md:hidden' onClick={() => setOpen(!open)}>
					<img src={open ? close : menu} className='ms-auto'/>
				</div>
				<div className={`bg-black fixed top-0 left-0 bg-opacity-50 md:hidden ${open ? "block" : "hidden"} w-full h-full`}></div>
			</div>
		);
}

export default NavBar