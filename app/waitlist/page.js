'use client';
import AnimatedInput from '@/components/AnimatedInput';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';

const page = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<div className="flex flex-col md:w-[100%] md:flex-row w-full md:h-screen">
			<div className="flex md:hidden">
				<Image
					src="/images/waitlist.jpeg"
					alt="Waitlist"
					width={200}
					height={200}
					className="w-full h-[239px]  md:w-[385px] md:h-screen object-cover"
				/>
			</div>
			<div className="md:w-[60%] md:pt-32">
				<div className="flex flex-col md:px-40">
					<Link
						href={'/'}
						className="flex flex-row gap-1 items-center absolute top-5 left-5 md:top-10 md:left-40 bg-[#fff] py-[4px] px-[6px] rounded-[8px]"
					>
						<IoArrowBack color="#1E5185" />
						<p className="text-[#1E5185] font-[400]">
							Back
						</p>
					</Link>
					<Image
						src="/images/icon2.png"
						alt="Logo"
						width={100}
						height={100}
						className=""
					/>
					<div className="px-5 flex flex-col gap-[12px] md:w-[80%]">
						<h1 className="text-[#0C111D] text-[30px] md:text-[36px] font-[600]">
							Get early access
						</h1>
						<p className="text-[#48505E] text-[16px] md:text-[18px] md:leading-[28px] font-[400] leading-[24px]">
							Be one of the first to discover how to track
							gas levels, save money, and cook with peace of
							mind{' '}
						</p>
					</div>
				</div>
				<div className="space-y-6 px-5 py-10 md:px-44 md:w-[80%]">
					<div className="flex flex-row items-center gap-5">
						<AnimatedInput
							label="First Name"
							placeholder="First name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>

						<AnimatedInput
							label="Last Name"
							placeholder="Last Name"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="w-[100%]">
						<AnimatedInput
							label="Email"
							placeholder="Email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="px-5 md:px-44 md:w-[80%]">
					<div className="bg-[#1E5185] cursor-pointer md:mt-5 flex items-center justify-center rounded-[4px] md:py-[12px] md:px-[18px] md:text-[16px] py-[12px] px-[18px] text-[16px] text-[#fff]">
						<p>Join our waitlist now</p>
					</div>
				</div>
			</div>
			<div className="md:w-[40%]">
				<Image
					src="/images/waitlist.jpeg"
					alt="Waitlist"
					width={200}
					height={200}
					className="w-full h-[239px] hidden md:flex md:w-full md:h-screen object-cover"
				/>
			</div>
		</div>
	);
};

export default page;
