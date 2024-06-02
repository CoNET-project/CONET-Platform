
import logger from '../utilities/logger/logger'
import {postMessage, getContainer, WorkerCommand, initListenState} from './index'
import {v4} from 'uuid'

const workerReadyChannel = 'conet-platform'
const workerProcessChannel = 'workerLoader'
const channelWrokerListenName = 'toFrontEnd'

interface tokenHistory {

}
interface pgpKey {
	privateKeyArmor: string
	publicKeyArmor: string
}

interface profileNetwork {

}

interface token {
	balance: string
	history: tokenHistory[]
}

export interface profile {
	isPrimary: boolean			//
	keyID: string 				//		Wallet Address
	pgpKey: pgpKey
	referrer: string			
	tokens: token[]
	network: profileNetwork
	data?: any					//		for UI
}
const beforeunload = (event: BeforeUnloadEvent) => {
	
	if (typeof event.preventDefault === 'function') {
		event.preventDefault()
	}
	
	(event || window.event).returnValue = true
	
	return true
	
}
type command = 'profileVer'|'assets'|'purchaseStatus'|'miningStatus'
interface channelWroker {
	cmd: command,
	data: any[]
}

export type type_platformStatus = 'LOCKED'|'UNLOCKED'|'NONE'|''
const profileVerChannel = new BroadcastChannel(channelWrokerListenName)
const listeningPool: Map<string, (e: MessageEvent<any>) => void> = new Map()

const listeningManager = (key: string, fun: (e: MessageEvent<any>) => void) => {
	const listening = listeningPool.get (key)
	if (listening) {
		profileVerChannel.removeEventListener('message', listening)
	}
	listeningPool.set(key, fun)
	profileVerChannel.addEventListener('message', fun)

}
export const listeningVersionHook = (profileVerHook: React.Dispatch<React.SetStateAction<number>>) => {
	const fun = (e: MessageEvent<any>) => profileVerChannelListening(e, profileVerHook)
	return listeningManager ('listeningVersionHook', fun)
}

export const listeningAssetsHook = (assetsHook: React.Dispatch<React.SetStateAction<number>>) => {
	const fun = (e: MessageEvent<any>) => profileVerChannelListening(e, null, assetsHook)
	return listeningManager('listeningAssetsHook', fun)
}

export const listeningGuardianPurchaseHook = (purchaseHook: React.Dispatch<React.SetStateAction<number>>) => {
	const fun = (e: MessageEvent<any>) => profileVerChannelListening(e, null, null, purchaseHook)
	return listeningManager('listeningGuardianPurchaseHook', fun)
}

interface mining {
    blockNumber: number
    CCNTP_total_balance: string
    Updated_balace: string                //    CCNTP_total_balance - Last_balance
    status: 'mining'|'stoped'
    profile: profile
}

export const listeningMiningHook = (miningHook: React.Dispatch<React.SetStateAction<mining>>) => {
	profileVerChannel.addEventListener('message', e => profileVerChannelListening(e, null, null, null, miningHook))
}

const profileVerChannelListening = (e: MessageEvent<any>, 
	profileVerHook: React.Dispatch<React.SetStateAction<number>>|null = null,
	assetsHook:React.Dispatch<React.SetStateAction<number>>|null = null, 
	purchaseHook:React.Dispatch<React.SetStateAction<number>>|null = null,
	miningHook: React.Dispatch<React.SetStateAction<mining>>|null = null
) => {
	let cmd: channelWroker
	try {
		cmd = JSON.parse(e.data)
	} catch (ex) {
		return console.log(`profileVerChannel JSON.parse(e.data[${e.data}]) Error!`)
	}
	
	switch (cmd.cmd) {
		case 'profileVer' : {
			
			if (profileVerHook) {
				return profileVerHook(cmd.data[0])
			}
			return 
		}

		case 'assets': {
			if (assetsHook) {
				return assetsHook(cmd.data[0])
			}
			return 
		}

		case 'purchaseStatus': {
			if (purchaseHook) {
				return purchaseHook(cmd.data[0])
			}
			return 
		}

		case 'miningStatus': {
			if (miningHook) {
				return miningHook(cmd.data[0])
			}
			return console.log('purchaseStatus miningStatus === null', `miningStatus =[${cmd.data[0]}]`)
		}

		default : {
			return console.log(`profileVerChannelListening unknow command [${ cmd.cmd }] from backend [${ cmd.data }]`)
		}
	}
}

export class platform {

	public passcode: () => Promise<type_platformStatus> = () => new Promise(async resolve=> {
		const [success, data] = await getContainer()
		if (!success) {
			return resolve ('')
		}
		const result = data[0]
		return resolve (result.passcode)
	})

	
	constructor(private setPlatformStatus?: React.Dispatch<React.SetStateAction<type_platformStatus>>, setWorkerLoading?: React.Dispatch<React.SetStateAction<number>>) {
		
		
		
		

		if (setPlatformStatus) {
			const channelStatus = new BroadcastChannel(workerReadyChannel)
			channelStatus.addEventListener('message', (e) => {
			
				setPlatformStatus(e.data)
			})
		}

		initListenState('beforeunload', result => {
			if (result) {
				return window.addEventListener('beforeunload', beforeunload)
			}
			return window.removeEventListener('beforeunload', beforeunload)
		})
		
		if (setWorkerLoading) {
			const workerProcess = new BroadcastChannel(workerProcessChannel)
			workerProcess.addEventListener('message', (e) => {
				setWorkerLoading(e.data)
				console.log(`workerProcess: [${e.data}]`)
			})
		}
	
	}

	public createAccount: (passcode: string, preferences: any) => Promise<string> = (passcode, preferences) => new Promise(async resolve=> {
		const search = window.location.search
		const referrals = search ? search.split('=')[1]: ''
		const cmd: WorkerCommand = {
            cmd: 'createAccount',
            uuid: v4(),
            data: [passcode, referrals, preferences]
        }
        return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ('')
			}
		
			return resolve (data[0])
		})
	})

	public testPasscode: (passcode: string, profileVerHook: React.Dispatch<React.SetStateAction<number>>|undefined) => Promise<[boolean, string]> = (passcode, profileVerHook) => new Promise(async resolve=> {
		const search = window.location.search
		const referrals = search ? search.split('=')[1]: ''
		const cmd: WorkerCommand = {
            cmd: 'testPasscode',
            uuid: v4(),
            data: [passcode, referrals]
        }
		if (profileVerHook) {
			const profileVerChannel = new BroadcastChannel(channelWrokerListenName)
			profileVerChannel.addEventListener('message', e => profileVerChannelListening(e, profileVerHook))
		}
        return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([false, ''])
			}
			const authorization_key = data[0]
			
			return resolve ([true, authorization_key])
		})
	})

	public showSRP: (authorizationkey: string) => Promise<string> = (authorizationkey) => new Promise(async resolve=> {
		if (!authorizationkey) {
			return resolve('')
		}
		const cmd: WorkerCommand = {
            cmd: 'showSRP',
            uuid: v4(),
            data: [authorizationkey]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ('')
			}
			return resolve (data[0])
		})
	})

	public getAllProfiles: (authorizationkey: string) => Promise<profile[]> = (authorizationkey) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'getAllProfiles',
            uuid: v4(),
            data: [authorizationkey]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([])
			}
			const _data = data[0] as profile[]
			return resolve (_data)
		})
	})

	public importWallet: (authorizationkey: string, privateKey: string) => Promise<profile[]> = (authorizationkey, privateKey) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'importWallet',
            uuid: v4(),
            data: [authorizationkey, privateKey]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([])
			}
			const _data = data[0] as profile[]
			return resolve (_data)
		})
	})

	public updateProfile: (authorizationkey: string, profile: profile) => Promise<profile[]> = (authorizationkey, profile) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'updateProfile',
            uuid: v4(),
            data: [authorizationkey, profile]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([])
			}
			const _data = data[0] as profile[]
			return resolve (_data)
		})
	})

	public addProfile: (authorizationkey: string, data: any) => Promise<profile[]> = (authorizationkey, data) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'addProfile',
            uuid: v4(),
            data: [authorizationkey, data]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([])
			}
			const _data = data[0] as profile[]
			return resolve (_data)
		})
	})

	public getRefereesList: (authorizationkey: string, wallet_public_key: string) => Promise<profile[]> = (authorizationkey, wallet_public_key) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'getRefereesList',
            uuid: v4(),
            data: [authorizationkey, wallet_public_key]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([])
			}
			const _data = data[0]
			return resolve (_data)
		})
	})

	public resetPasscode: (oldPasscode: string, newPasscode: string) => Promise<[boolean, string]> = (oldPasscode, newPasscode) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'resetPasscode',
            uuid: v4(),
            data: [oldPasscode, newPasscode]
        }

        return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([false, ''])
			}
			const authorization_key = data[0]

			return resolve ([true, authorization_key])
		})
	})

	public recoverAccount: (SRP: string, passcode: string) => Promise<[string|null]> = (SRP, passcode) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'recoverAccount',
            uuid: v4(),
            data: [SRP, passcode]
        }
        return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([null])
			}
			const authorization_key = data[0]
			
			return resolve ([authorization_key])
		})
	})

	public getAssetsPrice: () => Promise<type_platformStatus> = () => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'getAssetsPrice',
            uuid: v4(),
            data: []
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ('')
			}
			const _data = data[0]
			return resolve (_data)
		})
	})

	public CONETFaucet: (walletPublicAddress: string) => Promise<type_platformStatus> = (walletPublicAddress) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'CONETFaucet',
            uuid: v4(),
            data: [walletPublicAddress]
        }
		return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ('')
			}
			const _data = data[0]
			return resolve (_data)
		})
	})

	public prePurchase: (modes: number, amount: string, purchaseProfile: profile, payAssetName: string) => Promise<type_platformStatus> = (modes, amount, purchaseProfile: profile, payAssetName: string) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'prePurchase',
            uuid: v4(),
            data: [modes, amount, purchaseProfile, payAssetName]
        }
		return postMessage (cmd, false, null, (err, data: any) => {
			if (err) {
				return resolve ('')
			}
			
			return resolve (data)
		})
	})

	public guardianPurchase: (modes: number, amount: string, purchaseProfile: profile, payAssetName: string) => Promise<type_platformStatus> = (modes, amount, purchaseProfile: profile, payAssetName: string) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'guardianPurchase',
            uuid: v4(),
            data: [modes, amount, purchaseProfile, payAssetName]
        }
		return postMessage (cmd, false, null, (err, data: any) => {
			if (err) {
				return resolve ('')
			}
			
			return resolve (data)
		})
	})

	public fx168PrePurchase: (modes: number) => Promise<type_platformStatus> = (modes) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'fx168PrePurchase',
            uuid: v4(),
            data: [modes]
        }
		return postMessage (cmd, false, null, (err, data: any) => {
			if (err) {
				return resolve ('')
			}
			
			return resolve (data[0])
		})
	})

	public startMining: (authorizationKey: string, profile: profile) => Promise<type_platformStatus> = (authorizationKey, profile) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'startMining',
            uuid: v4(),
            data: [authorizationKey, profile]
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public stopMining: () => Promise<type_platformStatus> = () => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'stopMining',
            uuid: v4(),
            data: []
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public unlock_cCNTP: (profile: profile) => Promise<type_platformStatus> = (profile) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'unlock_cCNTP',
            uuid: v4(),
            data: [profile]
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public preBurnCCNTP: (profile: profile, total: string) => Promise<type_platformStatus> = (profile, total) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'preBurnCCNTP',
            uuid: v4(),
            data: [profile, total]
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public burnCCNTP: (profile: profile, total: string) => Promise<type_platformStatus> = (profile, total) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'burnCCNTP',
            uuid: v4(),
            data: [profile, total]
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public getGuardianRegion: () => Promise<type_platformStatus> = () => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'getGuardianRegion',
            uuid: v4(),
            data: []
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public claimToken: (profile: profile, assetName: string) => Promise<type_platformStatus> = (profile, assetName) => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'claimToken',
            uuid: v4(),
            data: [profile, assetName]
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})

	public getAllOtherAssets: () => Promise<type_platformStatus> = () => new Promise(async resolve=> {
		const cmd: WorkerCommand = {
            cmd: 'getAllOtherAssets',
            uuid: v4(),
            data: []
        }
		return postMessage (cmd, false, null, (err: any, data: any) => {
			if (err) {
				return resolve (err)
			}
			
			return resolve (data[0])
		})
	})
}