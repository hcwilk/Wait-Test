
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

	const july = 1657026000
	

	const [Pulse, setPulse] = useState(0);
	const [PulseX, setPulseX] = useState(0);
	const [LiquidLoans, setLiquidLoans] = useState(0);
	const [Mintra, setMintra] = useState(0);
	const [Genius, setGenius] = useState(0);
	const [Hurricash, setHurricash] = useState(0);
	const [Phiat, setPhiat] = useState(0);
	const [IMD, setIMD] = useState(0);

	useEffect(()=>{
		init()
	}, []);

	async function init(){
		
		console.log(Date.now())
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
			image: "liquid.jpeg",
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
			image: "genius.jpeg",
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

	async function load(address){

		// const addy = signer.provider.provider.selectedAddress
		const addy = (address)
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
			image: "liquid.jpeg",
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
			image: "genius.jpeg",
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

		console.log('fuck',yes)

		let result = yes.map(a => a.in);
		let time = yes.map(a => a.time)
		let sum =0;
		for(var i = 0; i<8; i++){
			if(result[i]==true)
			sum+=(july-time[i])/3600
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
					<div className='w-screen h-48 bg-[#252E3F] flex items-center'>
						<div className='h-36 w-36 ml-16'>
							<img src='WAIT.png'></img>
						</div>
						<h1 className='text-white text-8xl font-semibold ml-20'>$Wait</h1>
					</div>
					<div className='w-full bg-[#00e7fa] flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<a className=" text-[#252e3f] text-4xl font-sans font-bold mx-20 my-6">Check how much $WAIT you're able to claim, starting July 5th!</a>
					</div>
					<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<a className=" text-black text-center text-4xl font-sans font-thin mx-16 my-6">If you participated in any of the below sacrifices, you are eligible to claim free $WAIT tokens. You can claim by project or all at once.</a>
					</div>

					<div className='w-full bg-white flex flex-col justify-center items-center mt-8'>
						<input className='w-2/3 h-20 text-2xl font-semibolds text-center px-10 bg-gray-200' placeholder="Enter your Ethereum Address" onChange={(e) => setAddr(e.target.value)}></input>

						<button className='w-5/12 h-20 text-xl text-white text-center bg-[#324dff] border-4 border-black my-5' onClick={() => {load(addr)}}>Check Database!</button>

					{can>0?
					<div className='w-full bg-white flex flex-col items-center'>
					{can==1?
					<>
					<h1 className='text-3xl text-center'>checking address: {addr}</h1>
					<div className='w-5/12 h-20 text-xl   bg-red-300 border-4 border-black my-5 flex justify-center items-center' ><h1>Oh No! It doesn't look like you participated in any of the sacrifices</h1> </div>
					</>
				
						:
						<>
						<h1 className='text-3xl'>checking address: {addr}</h1>
						<div className='w-5/12 h-20 text-xl  bg-green-100 border-4 border-black my-5 flex justify-center items-center' ><h1>Success! Come back on July fifth to claim your {wait} $WAIT</h1></div>
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
								<div className='mt-12 mb-20'>
									<h1 className='text-3xl font-semibold text-center'>{row.name}</h1>
									<img className='w-48 h-48' src={row.image}></img>
									{can>0?
									<div>
										{row.in==false?
										<h1 className='w-48 bg-red-300 text-center text-3xl border-4'>You didn't sacrifice for {row.name}</h1>
										:
										<h1 className='w-48  bg-green-100 text-center text-2xl border-4'>On July 5th, 8 A.M CST, you'll be able to claim {(july - row.time)/3600} $WAIT</h1>
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
									<div className='mt-12 mb-20'>
										<h1 className='text-3xl font-semibold text-center'>{row.name}</h1>
										<img className='w-48 h-48' src={row.image}></img>
										{can>0?
										<div>
											{row.in==false?
											<h1 className='w-48 bg-red-300 text-center text-3xl border-4'>You didn't sacrifice for {row.name}</h1>
										:
											<h1 className='w-48  bg-green-100 text-center text-2xl border-4'>On July 5th, 8 A.M CST, you'll be able to claim {(july - row.time)/3600} $WAIT</h1>
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
						

						
					
				</div>
				
				</>
			):(
				<p>
					Not Loaded. Make sure you're connected to MetaMask!
				</p>
			)}
		</div>
	</>
  )
}
