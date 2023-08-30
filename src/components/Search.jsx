import React from 'react';
import { MdEditLocationAlt } from 'react-icons/md';
import { BiUserVoice } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
const Search = () => {
    return (
        <div className='mt-10'>
            <div className='flex gap-5 justify-center items-center'>
                <button className='text-xl font-semibold hover:bg-blue-500 rounded-3xl p-2'>Economy class</button>
                <button className='text-xl font-semibold hover:btn-warning rounded-3xl p-2'>Business class</button>
                <button className='text-xl font-semibold hover:btn-secondary rounded-3xl p-2'>First class</button>

            </div>


            <div className=''>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <MdEditLocationAlt className='text-4xl' />
                        <span className=" text-xl font-semibold"> Location</span>

                    </label>
                    <input type="text" placeholder="Where do you want to go?" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <BiUserVoice className='text-4xl' />
                        <span className=" text-xl font-semibold"> Travels</span>

                    </label>
                    <input type="text" placeholder="Add guest" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <BsCalendarCheck className='text-4xl' />
                        <span className=" text-xl font-semibold"> Cheak In</span>

                    </label>
                    <input type="text" placeholder="Add guest" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <BsCalendarCheck className='text-4xl' />
                        <span className=" text-xl font-semibold"> Cheak Out</span>

                    </label>
                    <input type="text" placeholder="Add guest" className="input input-bordered w-full max-w-xs" />
                </div>
<button className='btn bg-blue-500 mx-auto flex justify-center items-center mt-4'>Search Fight</button>
            </div>
        </div>
    );
};

export default Search;