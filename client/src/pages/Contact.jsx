import React from 'react'

export default function Contact() {
  return (
    <div className="">
                <div id="Contact font-heading" className="mx-auto flex flex-col  justify-center items-center">

                            <h1 className="text-3xl font-bold leading-tight text-white text-center">CONTACT US</h1>

                    <form className="w-2/3 md:w-1/3 space-y-8  flex flex-col">
                        <div>
                            <input
                                type="text"
                                name="name"
                                className=" border-b text-white border-gray-500 rounded-full p-3 placeholder-zinc-500 bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform hover:border-b-2"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="number"
                                className="border-b text-white border-gray-500 rounded-full p-3 placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                placeholder="Number"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                className="border-b text-white border-gray-500 p-3 rounded-lg placeholder-zinc-500 bg-transparent focus:outline-none w-full py-3 transition-transform hover:border-b-2"
                                rows="4"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className=" rounded-full  bg-black  text-amber-50 mx-auto mt-4 p-3 w-48"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>
  )
}
