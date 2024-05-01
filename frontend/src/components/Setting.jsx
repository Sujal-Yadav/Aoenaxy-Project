import { useState } from "react";
import Deletion from "./Deletion";

export default function Setting() {

    const [activeSetting, setActiveSetting] = useState("deletion");
    const [menu, setMenu] = useState("deletion");

    const handleMenu = (event) => {
        setMenu(event.target.value);
    }
    const handleSetActiveSetting = (setting) => {
        setActiveSetting(setting);
    };

    return (
        <>
            <div className="border-b py-4">
                <div className="flex max-w-screen-lg mx-auto justify-between items-center">
                    <div className="md:py-4 md:text-2xl md:mx-0 mx-4 text-lg">
                        Organization Settings
                    </div>

                    <div className="md:pt-6 md:hidden">
                        <select
                            className="outline-none w-fit rounded-md py-2 px-4 mr-4 text-lg"
                            value={menu}
                            onChange={handleMenu}>
                            <option className="mr-20" value="shared">Shared event types</option>
                            <option className="mr-20" value="sign">Single sign-on</option>
                            <option className="mr-20" value="workflow">Workflows</option>
                            <option className="mr-20" value="deletion">Data Deletion</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="pt-6 md:flex hidden justify-start mx-auto max-w-screen-lg">
                <ul className="w-4/6">
                    <li className="py-3 text-lg"><button onClick={() => handleSetActiveSetting("shared")}>Shared event types</button></li>
                    <li className="py-3 text-lg"><button onClick={() => handleSetActiveSetting("sign")}>Single sign-on</button></li>
                    <li className="py-3 text-lg"><button onClick={() => handleSetActiveSetting("workflow")}>Workflows</button></li>
                    <li className="py-3 text-lg"><button onClick={() => handleSetActiveSetting("deletion")}>Data Deletion</button></li>
                </ul>
                <div className="py-3">
                    {activeSetting === "shared" && <div className="text-2xl">Shared</div>}
                    {activeSetting === "sign" && <div className="text-2xl">Single sign-on</div>}
                    {activeSetting === "workflow" && <div className="text-2xl">Workflows</div>}
                    {activeSetting === "deletion" && <Deletion />}
                </div>
            </div>

            <div className="md:hidden py-3">
                {menu === "shared" && <div className="text-2xl">Shared</div>}
                {menu === "sign" && <div className="text-2xl">Single sign-on</div>}
                {menu === "workflow" && <div className="text-2xl">Workflows</div>}
                {menu === "deletion" && <Deletion />}
            </div>

            <div className="absolute -right-5 shadow-inner p-2 rounded-md top-60 -rotate-90">
                <button>Feedback</button>
            </div>

            <div className="absolute right-5 top-[150%]">
            <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2 ">1</div>
                <button className="bg-slate-800 text-white text-sm font-thin px-3 py-2 rounded-md">Getting started</button>
            </div>

        </>
    )
}