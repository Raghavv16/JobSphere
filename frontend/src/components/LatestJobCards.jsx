import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';

const LatestJobCards = ({ job }) => {
	const navigate = useNavigate();

	return (
		<motion.div
			onClick={() => navigate(`/description/${job._id}`)}
			className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'
			whileHover={{ scale: 1.05 }}
		>
			<div className='flex items-center gap-2 my-2'>
				<Button variant='outline' className='p-6' size='icon'>
					<Avatar>
						<AvatarImage src={job?.company?.logo} />
					</Avatar>
				</Button>
				<div>
					<h1 className='font-medium text-lg'>{job?.company?.name}</h1>
					<p className='text-sm text-gray-500'>{job?.location}</p>
				</div>
			</div>
			<div>
				<h1 className='font-bold text-lg my-2'>{job?.title}</h1>
				<p className='text-sm text-gray-600'>{job?.description.substring(0, 100)} ...</p>
			</div>
			<div className='flex items-center gap-2 mt-4'>
				<Badge className='text-blue-700 font-bold' variant='ghost'>{job?.position} Positions</Badge>
				<Badge className='text-[#f83002] font-bold' variant='ghost'>{job?.jobType}</Badge>
				<Badge className='text-[#7209b7] font-bold' variant='ghost'>{job?.salary} LPA</Badge>
			</div>
		</motion.div>
	)
}

export default LatestJobCards