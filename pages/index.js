
import React, {useEffect, useState} from 'react'
const data = require('../public/data.json');
import Web3Modal from 'web3modal'
import {Contract, ethers} from 'ethers';


export default function Home() {

	const [loadingState, setLoadingState] = useState('not-loaded');
	const [sacs,setSacs] = useState([])
	const [can,setCan] = useState(0)

	const message = ["blank","You're not registered in any sacrifice", "Claim All Wait"]
	

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
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
	
	
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner()

		// const addy = signer.provider.provider.selectedAddress
		const addy = ("0x4a514a827d9644ddd394477a30f0513cfabf6ffd")
		setSacs([{
			name: "Pulse",
			image: "pulse.png",
			in: false
		},
		{
			name: "PulseX",
			image: "pulsex.png",
			in: false
		},
		{
			name: "Liquid Loans",
			image: "liquidloans.png",
			in: false
	
		},
		{
			name: "Hurricash",
			image: "hurricash.png",
			in: false
		},
		{
			name: "Genius",
			image: "genius.png",
			in: false
		},
		{
			name: "Mintra",
			image: "mintra.png",
			in: false
		},
		{
			name: "Phiat",
			image: "phiat.png",
			in: false
		},
		{
			name: "I.M.D",
			image: "imd.png",
			in: false
		}]
		)


		
	

	

		setLoadingState("loaded")

	}// eslint-disable-line react-hooks/exhaustive-deps

	async function load(){
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
	
	
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner()

		const addy = signer.provider.provider.selectedAddress
		// const addy = ("0x4a514a827d9644ddd394477a30f0513cfabf6ffd")
		const yes = [{
			name: "Pulse",
			image: "pulse.png",
			in: data.Pulse.includes(addy)
		},
		{
			name: "PulseX",
			image: "pulsex.png",
			in: data.PulseX.includes(addy)
		},
		{
			name: "Liquid Loans",
			image: "liquidloans.png",
			in: data.LiquidLoans.includes(addy)
	
		},
		{
			name: "Hurricash",
			image: "hurricash.png",
			in: data.Hurricash.includes(addy)
		},
		{
			name: "Genius",
			image: "genius.png",
			in: data.Genius.includes(addy)
		},
		{
			name: "Mintra",
			image: "mintra.png",
			in: data.Mintra.includes(addy)
		},
		{
			name: "Phiat",
			image: "phiat.png",
			in: data.phiat.includes(addy)
		},
		{
			name: "I.M.D",
			image: "imd.png",
			in: data.InternetMoneyDividend.includes(addy)
		}]
		
		setSacs(yes)

		let result = yes.map(a => a.in);

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
					<div className='w-full h-48 bg-[#252E3F] flex items-center'>
						<div className='h-36 w-36 ml-16'>
							<img src='WAIT.png'></img>
						</div>
						<h1 className='text-white text-8xl font-semibold ml-20'>$Wait</h1>
					</div>
					<div className='w-full bg-[#00e7fa] flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<a className=" text-[#252e3f] text-4xl font-sans font-bold mx-20 my-6">Claim Your Free $WAIT</a>
					</div>
					<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<a className=" text-black text-center text-4xl font-sans font-thin mx-16 my-6">If you participated in any of the below sacrifices, you are eligible to claim free $WAIT tokens. You can claim by project or all at once.</a>
					</div>
					<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						<button className='w-5/12 h-20 text-xl text-white text-center bg-[#324dff] border-4 border-black my-5' onClick={load}>Check Database!</button>
					</div>
					{ can !=0 ? 
					<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
						{can==1?
							<h1 className='text-5xl '>You're not registered in any sacrifice!</h1>
						:
						<button className='w-5/12 h-20 text-xl text-white text-center bg-[#324dff] border-4 border-black my-5' >Claim All Wait!</button>
						}
					</div>
					:
					<></>
					}
					

					{sacs.map((sac,index) => (
						<div key={sac.name} className='w-full flex flex-col md:flex-row bg-white items-center justify-center pt-6'>
							<div>
								<div className='h-80 w-80 md:h-40 md:w-40 m-5'>
									<img src={sac.image}></img>
								</div>
								<div className='w-full flex justify-center'>
									<a className="w-full text-black text-center text-4xl font-sans font-thin my-6 justify-center">{sac.name}</a>
								</div>								
							</div>
							<div>
								<div className='w-full bg-white flex flex-col relative justify-center lg:flex-row gap-5'>
									<a className=" text-black text-center text-xl font-sans mx-16 my-6">If you participated in the {sac.name} sacrifice, you are eligible to claim free $WAIT tokens. You can claim your $WAIT for {sac.name} here.</a>
								</div>
								{sacs[index].in ?
									<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
										<button className='w-4/5 h-20 text-xl text-black text-center bg-blue-200 border-2 border-black my-5'>CLAIM $WAIT FOR {sac.name}</button>
									</div>
									:
									<div className='w-full bg-white flex flex-col relative justify-center items-center lg:flex-row gap-5'>
										<button className='w-4/5 h-20 text-xl text-black text-center bg-white border-2 border-black my-5'>Unable to claim for  {sac.name}</button>
									</div> 
								}
								
							</div>
						</div>
					))}
						

						
					
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
