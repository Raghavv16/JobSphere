import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse');
    }

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <h1 className='text-5xl font-bold'>Search, Apply & <br />Get Your <span className='text-[#3aafa9]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic. Quos nam a adipisci.</p>
                <motion.div 
                className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'
                whileHover={{ scale: 1.01 }}>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className='rounded-r-full bg-[#e47698]'>
                        <Search className='h-5 w-5' />
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection