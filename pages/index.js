
import React, {useEffect, useState} from 'react'
const data = require('../public/data.json');
import Web3Modal from 'web3modal'
import {Contract, ethers} from 'ethers';


export default function Home() {

	const [loadingState, setLoadingState] = useState('not-loaded');
	const [sacs,setSacs] = useState([])
	const [first,setFirst] = useState([])
	const [end,setEnd] = useState([])
	const [can,setCan] = useState(0)
	const [addr, setAddr] = useState("")
	const [wait,setWait] = useState(0)
	const [now,setNow] = useState(0)

	const july = 1657026000
	

	const [Pulse, setPulse] = useState(0);
	const [PulseX, setPulseX] = useState(0);
	const [LiquidLoans, setLiquidLoans] = useState(0);
	const [Mintra, setMintra] = useState(0);
	const [Genius, setGenius] = useState(0);
	const [Hurricash, setHurricash] = useState(0);
	const [Phiat, setPhiat] = useState(0);
	const [IMD, setIMD] = useState(0);

	useEffect(() => {
		
		init()
	  }, []);

	async function init(){
		
		setNow(Date.now()/1000)
		// const addy = signer.provider.provider.selectedAddress
		const yes = 
		[{
			name: "Pulse",
			image: "pulse.png",
			time:1627948800,
			in: false
		},
		{
			name: "PulseX",
			image: "pulsex.png",
			time:1645660800,
			in: false
		},
		{
			name: "Liquid Loans",
			image: "liquidloans.png",
			time:1647907200,
			in: false
	
		},
		{
			name: "Hurricash",
			image: "hurricash.png",
			time:1646092800,
			in: false
		},
		{
			name: "Genius",
			image: "genius.png",
			time:1654041600,
			in: false
		},
		{
			name: "Mintra",
			image: "mintra.png",
			time: 1646179200,
			in: false
		},
		{
			name: "Phiat",
			image: "phiat.png",
			time:1654387200,
			in: false
		},
		{
			name: "I.M.D",
			image: "imd.png",
			time:1647734400,
			in: false
		}]
		setSacs(yes)

		

		
	

	

		setLoadingState("loaded")

	}// eslint-disable-line react-hooks/exhaustive-deps

	const load = e => {
		e.preventDefault();

		const fsdaf = addr.toLowerCase()

		const str = fsdaf.replace(/\s+/g, '');


		// const addy = signer.provider.provider.selectedAddress
		const addy = (str)
		const yes = [{
			name: "Pulse",
			image: "pulse.png",
			time:1627948800,
			in: data.Pulse.includes(addy)
		},
		{
			name: "PulseX",
			image: "pulsex.png",
			time:1645660800,
			in: data.PulseX.includes(addy)
		},
		{
			name: "Liquid Loans",
			image: "liquidloans.png",
			time:1647907200,
			in: data.LiquidLoans.includes(addy)
	
		},
		{
			name: "Hurricash",
			image: "hurricash.png",
			time:1646092800,
			in: data.Hurricash.includes(addy)
		},
		{
			name: "Genius",
			image: "genius.png",
			time:1654041600,
			in: data.Genius.includes(addy)
		},
		{
			name: "Mintra",
			image: "mintra.png",
			time: 1646179200,
			in: data.Mintra.includes(addy)
		},
		{
			name: "Phiat",
			image: "phiat.png",
			time:1654387200,
			in: data.phiat.includes(addy)
		},
		{
			name: "I.M.D",
			image: "imd.png",
			time:1647734400,
			in: data.InternetMoneyDividend.includes(addy)
		}]
		setFirst(yes.slice(0,4))
		setEnd(yes.slice(4,8))
		setSacs(yes)


		let result = yes.map(a => a.in);
		let time = yes.map(a => a.time)
		let sum =0;
		for(var i = 0; i<8; i++){
			if(result[i]==true)
			sum+=(now-time[i])/3600
		}
		setWait(sum)

		if(result.includes(true)){
			setCan(2)
		}
		else{
			setCan(1)
		}
	}// eslint-disable-line react-hooks/exhaustive-deps


	

  return (
    <>
		<div className="h-full flex justify-center">
			{loadingState=='loaded' ?
			(
				<>
				
				<div>
					<div className='w-screen md:h-32 h-fit bg-[#252E3F] flex items-center justify-center md:flex-row flex-col'>
						<div className='h-24 w-24 mt-6'>
							<img src='WAIT.png'></img>
						</div>
						<h1 className='text-white text-6xl font-semibold mx-12 my-6'>$WAIT</h1> 
						<h1 className='text-gray-400 text-6xl font-semibold lg:my-2 text-center '>SAMPLE DATA</h1> 
						<button className='rounded-3xl w-60 md:w-40 h-16 bg-blue-400 md:ml-32 my-6' >
							<a  href="https://app.0xwait.com/" className='text-xl'> Production Site </a>
						</button>					</div>
					<div className='w-full bg-[#00e7fa] flex justify-center items-center '>
						<a className="w-3/5 text-[#252e3f] text-2xl font-sans font-bold mx-20 my-6 text-center">NOTE: This site is meant to check eligibility. If you want to claim Mainnet $WAIT, head to the production site and check the Mainnet Database and claim!</a>
					</div>
					
				
					<div className='w-full bg-white items-center mt-6'>
						<form className='flex flex-col justify-center items-center' onSubmit={load}>
							<input className='w-2/3 h-16 text-xl font-semibolds text-center px-10 bg-gray-200' placeholder="Enter your Ethereum Address" onChange={(e) => setAddr(e.target.value)}></input>

							<button type='submit'  className='md:w-5/12 w-3/5 h-12 md:text-xl text-lg text-white text-center bg-[#324dff] border-4 border-black my-5'>Check Database!</button>

						</form>

					{can>0?
					<div className='w-full bg-white flex flex-col items-center'>
					{can==1?
					<>
					<h1 className='text-xl text-center '>checking address: {addr}</h1>
					<div className='md:w-5/12 h-16 w-3/5 lg:text-xl md:text-lg text-sm text-center bg-red-300 border-4 border-black my-5 flex justify-center items-center' ><h1 className='mx-5'>Oh No! It doesn't look like you participated in any of the sacrifices</h1> </div>
					</>
				
						:
						<>
						<h1 className='text-xl text-center'>checking address: {addr}</h1>
						<div className='md:w-5/12 h-16 w-3/5 lg:text-xl md:text-lg text-sm text-center bg-green-100 border-4 border-black my-5 flex justify-center items-center' ><h1 className='mx-5'>Success! Come back on July 5th to claim your {Math.floor(wait)} $WAIT</h1></div>
					</>
					}
				</div>
					:
<></>
					}
					</div>
					
				<div className='flex justify-between lg:flex-col'>

				
					<div className='flex justify-between lg:flex-row flex-col w-1/2 lg:w-full'>
						{first.map((row,i) => (
							<div key={i} className='lg:w-1/4 w-full flex items-center flex-col'>
								<div className='w-full flex flex-col items-center'>
									<h1 className='text-3xl font-semibold text-center'>{row.name}</h1>
									<img className='w-48 h-48 p-5' src={row.image}></img>
									{can>0?
									<div className='w-full px-2'>
										{row.in==false?
										<h1 className='w-full bg-red-300 text-center text-3xl border-2 border-black p-4'>Not Eligible to Claim</h1>
										:
										<h1 className='w-full  bg-green-100 text-center text-3xl border-2 border-black p-4'>{Math.floor((now - row.time)/3600)} $WAIT Claimable</h1>
										}
									</div>
									:
									<></>
									}
									
								</div>
							</div>
						))}
						</div> 
						<div className='flex lg:justify-between lg:flex-row flex-col w-1/2 lg:w-full'>
							{end.map((row,i) => (
								<div key={i} className='lg:w-1/4 w-full flex items-center flex-col'>
									<div className='lg:mt-12 w-full flex flex-col items-center'>
										<h1 className='text-3xl font-semibold text-center'>{row.name}</h1>
										<img className='w-48 h-48 p-5' src={row.image}></img>
										{can>0?
										<div className='w-full px-2'>
											{row.in==false?
											<h1 className='w-full bg-red-300 text-center text-3xl border-2 border-black p-4'>Not Eligible to Claim</h1>
										:
											<h1 className='w-full  bg-green-100 text-center text-3xl border-2 border-black p-4'>{Math.floor((now - row.time)/3600)} $WAIT Claimable</h1>
											}
										</div>
										:
										<></>
										}
									</div>
								</div>
							))}
						</div>
						</div>
					
						


{/* <div className=''>
									<h1 className='text-xl text-center'>{end[i].name}</h1>
									<img className='w-48 h-48' src={end[i].image}></img>
								</div>
					</div> */}
			

					{/* {sacs.map((sac,index) => (
						<div key={sac.name} className='w-full flex flex-col md:flex-row bg-white items-center justify-between pt-6'>
							<div>
								<div className='h-80 w-80 md:h-40 md:w-40 m-5'>
									<img src={sac.image}></img>
								</div>
								<div className='w-full flex justify-center'>
									<a className="w-full text-black text-center text-4xl font-sans font-thin my-6 justify-center">{sac.name}</a>
								</div>								
							</div>
							<div className='bg-green-100'>
								<div className='w-full  flex flex-col relative justify-center lg:flex-row gap-5'>
									<a className=" text-black text-center text-xl font-sans mx-16 my-6">If you participated in the {sac.name} sacrifice, you are eligible to claim free $WAIT tokens. You can claim your $WAIT for {sac.name} here.</a>
								</div>
								{sacs[index].in ?
									<div className='w-full bg-white flex   justify-center items-center  gap-5'>
										<div className='w-4/5 h-20 text-xl text-black text-center bg-green-200 border-2 border-black my-5'>CLAIM $WAIT FOR {sac.name}</div>
									</div>
									:
									<div className='w-4/5 h-20 bg-red-300 flex   justify-center items-center  gap-5'>
										<div className='w-full text-xl text-black text-center  my-5'>Unable to claim for  {sac.name}</div>
									</div> 
								}
								
							</div>
						</div>
					))} */}
						

						<hr className='mt-10  border-black'></hr>

						<div className='h-52 w-full flex flex-col items-center justify-center'>
							<h1 className='text-2xl font-bold text-center'>Coast- a #pulsechain development company</h1>
							<div className='flex justify-center'>
							<a href='https://twitter.com/0xCoast'><img src='twit.png'  className='h-16 w-16 '></img></a>
							<img src='wifi.png' className='h-16 w-16 p-1'></img>

							</div>
						</div>
						<div className='flex justify-center'>
						</div>
						<div className='flex justify-center'>
							<hr className='w-5/6 border-black mb-5'></hr>
						</div>

						<div className='w-full flex items-center justify-center mt-12'>
						<p className='w-3/5 text-center leading-loose'>No part of content produced by 
						<a className='text-[#324dff]'  href="https://0xwait.com/"> 0xWait </a>
						may be redistributed without express written permission from 0xCoast. This content is for educational and informational purposes only and should not constitute investment advice or an offer to sell or the solicitation of an offer to purchase any products or services. This information is not intended for any persons who are prohibited from receiving such information under the laws applicable to their place of citizenship, domicile or residence.</p>
					</div>
					<div className='w-full flex items-center justify-center my-12'>
						<p className='w-4/5 text-center leading-loose'> © All rights reserved 0xCoast.</p>
					</div>

				</div>
				
				</>
			):(
				<p>
					Loading...
				</p>
			)}
		</div>
	</>
  )
}
