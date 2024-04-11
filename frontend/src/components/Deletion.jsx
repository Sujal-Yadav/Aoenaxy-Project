export default function Deletion() {
    return (
        <div className="md:px-0 px-4">
            {/* Delete information from your organization */}
            <div className="border-b-2">
                <div className="font-bold text-lg">Delete information from your organization</div>

                <div className="font-normal py-4 text-md">
                    When anyone in your organization schedules an event with an invitee, information about the event
                    and everyone part of it is saved in Calendly. If you need to delete this information from Calendly and
                    its vendors for compliance reasons, you can do so without contacting support.
                </div>

                <div className="bg-red-50 px-6 py-4 font-bold text-md rounded">
                    Once you delete information, you won't be able to recover it
                </div>

                <div className="py-6 text-md">
                    Invitee data will be deleted in <b>7 days</b> from the date you make the request
                </div>
            </div>

            {/* Delete information for specific invitees */}
            <div className="border-b-2 py-8">
                <div className="font-bold">Delete information for specific invitees</div>

                <div className="text-md py-2">
                    Enter an invitee's email to delete all of their personally identifiable information from your organization
                    and integrations. During the data deletion process, Calendly removes the deleted invitee from their
                    spot on group events and cancels both pending and upcoming events with them.
                </div>

                <textarea className="rounded-xl border-2 w-full my-4" name="specific-deletion" id="" cols="30" rows="10"></textarea>

                <button className="rounded-3xl bg-red-600 text-white font-bold py-3 px-5">Delete</button>
            </div>

            {/* Delete information within a period of time */}
            <div className="border-b-2 py-8">
                <div className="font-bold py-2">Delete information within a period of time</div>

                <div className="text-md">
                    Choose a date range to delete all information from scheduled events within that period of time.
                </div>

                <div className="py-4">
                    <input type="text" className="rounded-lg border-2 px-4 py-3 w-3/6" placeholder="Select a date range" />
                    <button className="ml-4 rounded-3xl bg-red-600 text-white font-bold py-3 px-5">Delete</button>
                </div>
            </div>

            {/* Data delteion history */}
            <div className="border-b-2 py-8">
                <div className="font-bold pb-4">Data deletion history</div>
                <div className="grid grid-cols-5 border-2 shadow-md rounded-lg px-6 py-2 font-bold text-md">
                    <div className="flex items-center col-span-2">
                        Request Date
                        <svg class="w-6 h-6 text-gray-800 pl-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" />
                        </svg>
                    </div>
                    <div className="flex items-center col-span-2">
                        Requested By
                        <svg class="w-6 h-6 text-gray-800 pl-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                        </svg>

                    </div>
                    <div className="flex items-center col-span-1">
                        Status
                        <svg class="w-6 h-6 text-gray-800 pl-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4" />
                        </svg>

                    </div>
                </div>
            </div>

            {/* Delete your account */}
            <div className="py-8">
                <div className="font-bold">Delete your account</div>
                <div className="text-md py-2">You can delete your account in your <a className="text-blue-400" href="#">account settings.</a></div>
            </div>
        </div>
    )
}