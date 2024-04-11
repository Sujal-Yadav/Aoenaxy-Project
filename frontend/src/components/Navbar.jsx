import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {

    const [help, setHelp] = useState(false);
    const [profile, setProfile] = useState(false);
    const [nav, setNav] = useState(true);

    function handleNav() {
        setNav(!nav);
    }

    function handleHelp() {
        setHelp(!help);
    }

    function handleAccount() {
        setProfile(!profile);
    }

    return (
        <div className="border-b">
            <div className="max-w-screen-lg md:flex hidden flex-wrap items-center justify-between mx-auto p-4">
                <img className="h-10" src="src/assets/image.png" alt="" />
                <ul className="flex justify-between items-center">
                    <li className="px-4 text-lg inline-flex text-gray-400 justify-center gap-x-1.5 rounded-md bg-white py-2 hover:bg-gray-50">Security</li>
                    <li className="px-4 text-lg inline-flex text-gray-400 justify-center gap-x-1.5 rounded-md bg-white py-2 hover:bg-gray-50">Integrations</li>
                    <li className="pl-4 text-lg">
                        <button onClick={handleHelp} type="button" class="inline-flex justify-center items-center text-gray-400 gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Help
                            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        {help && <div class="absolute text-left z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">About</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>

                            </div>
                        </div>}
                    </li>
                    <li className="px-4 text-lg">
                        <button onClick={handleAccount} type="button" class="inline-flex justify-center items-center text-gray-400 gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            Account
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        {profile && <div class="absolute text-left z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Purchases</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">History</a>
                                <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sign Out</a>
                            </div>
                        </div>}
                    </li>

                </ul>
            </div>

            <div className="flex md:hidden justify-between p-2">
                <img className="h-10" src="src/assets/image.png" alt="" />

                <div className="flex justify-center items-center">
                    <button onClick={handleAccount} type="button" class="inline-flex justify-center items-center text-gray-400 gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        Account
                        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    {profile && <div class="absolute text-left z-10 mt-2 w-40 top-10 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Purchases</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">History</a>
                            <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Sign Out</a>
                        </div>
                    </div>}

                    <div onClick={handleNav} className="p-2">
                        {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                </div>
            </div>
            <div className={!nav ? "fixed md:hidden top-0 border w-screen duration-500 ease-in-out text-lg mt-14 block text-center backdrop-blur-sm justify-center items-center" : "fixed -top-[100%]"}>
                    <p className="border-b-2 py-2">Security</p>
                    <p className="border-b-2 py-2">Integrations</p>
                    <p className="border-b-2 py-2">About</p>
                    <p className="border-b-2 py-2">Support</p>
                    <p className="border-b-2 py-2">License</p>
                </div>
        </div>
    )
}