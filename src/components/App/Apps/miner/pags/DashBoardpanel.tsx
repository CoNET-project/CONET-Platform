import React, {useState, useEffect} from "react"
import { useIntl } from "react-intl"
import { loadCSS } from 'fg-loadcss'
import {cntp_address, initListenState, scanAssets} from '../../../../../API/index'
import {Grid, CircularProgress, TextField, styled as materialStyled, TableContainer, Typography, SvgIcon, Icon,
Table, Box, TableHead, TableRow, TableCell, TableBody, IconButton, Paper, Stack} from '@mui/material'
import SyncProblemIcon from '@mui/icons-material/SyncProblem'
import {getWorkerService} from '../../../../../services/workerService/workerService'

const ItemStyle = materialStyled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',

    padding: '0.5rem',
	height: '4rem'
}))

const DashBoardpanel = () => {
	const currentProfile = () => {
		const workerService = getWorkerService()
		if (workerService.data.passcode.status === 'LOCKED') {
			return null
		}
		const index = workerService.data.profiles.findIndex((n:any) => {
			return n.isPrimary
		})
	
		return workerService.data.profiles[index]
	}
	const profile = currentProfile()
	const [showMetaMask, setShowMetaMask] = useState(false)
	const [cntp, setCntp] = useState(profile.tokens.cntp.balance)
	const [todayCNTP, setTodayCNTP] = useState("0")
	const [showLoading, setShowLoading] = useState(false)
	const [loadingError, setLoadingError] = useState(false)


	useEffect(() => {
        const fetchData = async () => {
			if (!active) {
				return
			}
			if (typeof 
				//@ts-ignore
				window.ethereum
			!== 'undefined') {  
				setShowMetaMask(true)
			}
			const node = loadCSS(
				'https://use.fontawesome.com/releases/v6.5.1/css/all.css',
				// Inject before JSS
				//@ts-ignore
				document.querySelector('#font-awesome-css') || document.head.firstChild
			)
			
			scanAssets()
			initListenState('cntp-balance', data => {
				setCntp(data.CNTP_Balance)
				setTodayCNTP(data.currentCNTP)
			})
			return () => { 
				active = false
				node.parentNode!.removeChild(node)
			}
        }

		let active = true
        fetchData()
    }, [])


	const intl = useIntl()

	const addMateMask = async() => {
		try {
			//	@ts-ignore
			const result = await window.ethereum
			.request({
				method: "wallet_addEthereumChain",
				params: [{
					chainId: "0x36CB1",
					rpcUrls: ["https://holeskyrpc1.conet.network"],
					chainName: "CONET Sebolia",
					nativeCurrency: {
						name: "CONET",
						symbol: "CONET",
						decimals: 18
					},
					blockExplorerUrls: ["https://scan.conet.network/"]
				}]
			})
			//	@ts-ignore
			const wasAdded = await ethereum.request({
					method: 'wallet_watchAsset',
					params: {
					type: 'ERC20', // Initially only supports ERC20, but eventually more!
					options: {
						address: cntp_address, // The address that the token is at.
						symbol: 'CNTP', // A ticker symbol or shorthand, up to 5 chars.
						decimals: 18, // The number of decimals in the token
						image: '', // A string url of the token logo
					},
				}
			})
			console.log (`window.ethereum.request success! result =`, result)
		} catch (ex) {
			console.log (`window.ethereum.request error`, ex)
		}
	}

	const reloading = () => {
		setShowLoading(true)
		setLoadingError(false)
	}

	return (
		<>
			<Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack direction="column" alignItems="center">
						<Typography variant="body1" sx={{ }}>
							{intl.formatMessage({id: 'platform.miner.register.totalRewards'})}
						</Typography>
						{
							showLoading && 
							<Icon baseClassName="fa-solid" className="fa-circle-notch fa-spin" sx={{ fontSize: 20, color: '#6e7b63' }} />
							
						}
							
						{
							!showLoading &&
							<Box>
								{
									!loadingError &&
									<Stack spacing={0} direction="row" alignItems="center">
										<Typography variant="body1" sx={{ fontWeight: '900'}}>
											{cntp} CNTP
										</Typography>
										{
											showMetaMask &&
											<IconButton color="default"
												onClick={ addMateMask }
											>
												<SvgIcon sx={{ width: '1rem', height: '1rem'}}>
													<path d="M21.004 2.61 13.2 8.432l1.443-3.434 6.36-2.386Z" fill="#E2761B"></path><path d="m2.988 2.61 7.741 5.876-1.372-3.489-6.369-2.386Zm15.208 13.492L16.117 19.3l4.447 1.229 1.279-4.356-3.647-.07Zm-16.032.071 1.271 4.356L7.882 19.3l-2.078-3.198-3.64.071Z" fill="#E4761B"></path><path d="m7.631 10.7-1.24 1.882 4.417.197-.157-4.765L7.63 10.7Zm8.73 0L13.3 7.959l-.101 4.82 4.408-.197-1.248-1.883Zm-8.479 8.6 2.651-1.3-2.29-1.795-.36 3.095ZM13.46 18l2.658 1.3-.368-3.095L13.459 18Z" fill="#E4761B"></path><path d="M16.117 19.3 13.458 18l.212 1.741-.023.733 2.47-1.174Zm-8.235 0 2.47 1.174-.015-.733.196-1.74-2.65 1.299Z" fill="#D7C1B3"></path><path d="M10.392 15.055 8.18 14.4l1.561-.717.65 1.37Zm3.208 0 .65-1.37 1.57.716-2.22.654Z" fill="#233447"></path><path d="m7.882 19.3.377-3.198-2.455.071L7.882 19.3Zm7.859-3.198.376 3.198 2.079-3.127-2.455-.07Zm1.867-3.52-4.408.197.408 2.276.65-1.37 1.57.716 1.78-1.82Zm-9.428 1.82 1.569-.718.643 1.37.416-2.275-4.416-.197 1.788 1.82Z" fill="#CD6116"></path><path d="m6.392 12.582 1.85 3.623L8.18 14.4l-1.788-1.82Zm9.435 1.82-.078 1.803 1.859-3.623-1.78 1.82Zm-5.02-1.623-.415 2.276.518 2.686.117-3.537-.22-1.425Zm2.393 0-.212 1.417.094 3.545.526-2.686-.408-2.276Z" fill="#E4751F"></path><path d="m13.608 15.055-.526 2.686.377.26 2.29-1.796.078-1.804-2.22.654ZM8.18 14.4l.063 1.804L10.533 18l.377-.26-.518-2.685L8.18 14.4Z" fill="#F6851B"></path><path d="m13.647 20.474.023-.733-.196-.173h-2.957l-.18.173.016.733-2.47-1.174.862.709 1.749 1.22h3.004l1.757-1.22.862-.709-2.47 1.174Z" fill="#C0AD9E"></path><path d="m13.459 18-.377-.26H10.91l-.377.26-.196 1.741.18-.173h2.957l.196.173-.211-1.74Z" fill="#161616"></path><path d="M21.333 8.81 22 5.595l-.996-2.985-7.545 5.623L16.36 10.7l4.102 1.206.91-1.064-.392-.283.628-.575-.487-.378.628-.48-.416-.316ZM2 5.595l.666 3.213-.423.315.627.48-.478.379.627.575-.392.283.902 1.064 4.102-1.206 2.902-2.465L2.988 2.61 2 5.596Z" fill="#763D16"></path><path d="M20.462 11.904 16.361 10.7l1.247 1.883-1.86 3.623 2.448-.032h3.647l-1.38-4.269ZM7.632 10.7l-4.103 1.205-1.365 4.27h3.64l2.439.03-1.851-3.622 1.24-1.883Zm5.568 2.08.259-4.545 1.192-3.237H9.357l1.176 3.237.275 4.545.094 1.433.008 3.529h2.172l.016-3.529.102-1.433Z" fill="#F6851B"></path>
												</SvgIcon>		
											</IconButton>
										}
									</Stack>
								}
								{
									loadingError &&
									<IconButton color='error' sx={{marginTop:'-0.5rem'}} onClick={reloading}>
										<SyncProblemIcon />
									</IconButton>
								}
							</Box>
								
						}
					
					</Stack>
				</ItemStyle>
			</Grid>
			
			<Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack spacing={0} alignItems="center">
						<Typography variant="body1" sx={{}}>
							{intl.formatMessage({id: 'platform.miner.register.previouslyClaimed'})}
						</Typography>
						
						{
							showLoading && 
							<Icon baseClassName="fa-solid" className="fa-circle-notch fa-spin" sx={{ fontSize: 20, color: '#6e7b63' }} />
						}
						{
							!showLoading &&
							<Box>
								{
									!loadingError &&
									<Typography variant="body1" sx={{ fontWeight: '900'}}>
										{todayCNTP} CNTP
									</Typography>
								}
								{
									loadingError &&
									<IconButton color='error' sx={{marginTop:'-0.5rem'}} onClick={reloading}>
										<SyncProblemIcon />
									</IconButton>
								}
							</Box>
						}
						
						
						
					</Stack>
				</ItemStyle>
			</Grid>
			<Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack spacing={0} alignItems="center">
						<Typography variant="body1" sx={{ }}>
							{intl.formatMessage({id: 'platform.miner.register.referrals'})}
						</Typography>
						{
							showLoading && 
							<Icon baseClassName="fa-solid" className="fa-circle-notch fa-spin" sx={{ fontSize: 20, color: '#6e7b63' }} />
						}
						{
							!showLoading &&
							<Box>
								{
									!loadingError &&
									<Typography variant="body1" sx={{ fontWeight: '900'}}>
										{0} CNTP
									</Typography>
								}
								{
									loadingError &&
									<IconButton color='error' sx={{marginTop:'-0.5rem'}} onClick={reloading}>
										<SyncProblemIcon />
									</IconButton>
								}
							</Box>
						}
					</Stack>
				</ItemStyle>
			</Grid>
		</>
	)
}  
export default DashBoardpanel