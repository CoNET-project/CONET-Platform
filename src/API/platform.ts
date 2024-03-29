
import {postMessage, getContainer, WorkerCommand, initListenState} from './index'
import {v4} from 'uuid'
const workerReadyChannel = 'conet-platform'
const workerProcessChannel = 'workerLoader'
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

export type type_platformStatus = 'LOCKED'|'UNLOCKED'|'NONE'|''
export class platform {
	private referrals = ''

	public passcode: () => Promise<type_platformStatus> = () => new Promise(async resolve=> {
		const [success, data] = await getContainer()
		if (!success) {
			return resolve ('')
		}
		const result = data[0]
		return resolve (result.passcode)
	})
	
	constructor(private setPlatformStatus: React.Dispatch<React.SetStateAction<type_platformStatus>>, setWorkerLoading: null|React.Dispatch<React.SetStateAction<number>>) {
		const search = window.location.search
		this.referrals = search ? search.split('=')[1]: ''
		const channelStatus = new BroadcastChannel(workerReadyChannel)
		const workerProcess = new BroadcastChannel(workerProcessChannel)
		
		channelStatus.addEventListener('message', (e) => {
			
			setPlatformStatus(e.data)
		})

		initListenState('beforeunload', result => {
			if (result) {
				return window.addEventListener('beforeunload', beforeunload)
			}
			return window.removeEventListener('beforeunload', beforeunload)
		})
		
		if (setWorkerLoading) {
			workerProcess.addEventListener('message', (e) => {
				setWorkerLoading(e.data)
				console.log(`workerProcess: [${e.data}]`)
			})
		}
	
	}

	public createAccount: (passcode: string) => Promise<string> = (passcode) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'createAccount',
            uuid: v4(),
            data: [passcode, this.referrals]
        }
        return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ('')
			}
		
			return resolve (data[0])
		})
	})

	public testPasscode: (passcode: string) => Promise<[boolean, string]> = (passcode) => new Promise(async resolve=> {

		const cmd: WorkerCommand = {
            cmd: 'testPasscode',
            uuid: v4(),
            data: [passcode, this.referrals]
        }
        return postMessage (cmd, false, null, (err, data) => {
			if (err) {
				return resolve ([false, ''])
			}
			const authorization_key = data[0]
			
			this.setPlatformStatus('UNLOCKED')
			
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
			
			this.setPlatformStatus('UNLOCKED')
			
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
			
			this.setPlatformStatus('UNLOCKED')
			
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
}