import styled from 'styled-components'
import ProfileImage from "../../../Common/Profile/Image/Image"
import {Checkmark, Copy} from "../../../Icons/Icons"
import {toast} from "../../../Toaster/Toaster"
import {useIntl} from "react-intl"
import {CopyToClipboard} from "../../../../../utilities/utilities"
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import React from "react"
import {ProfileData} from "../../../../../store/appState/appStateReducer"

type StyledProfileItemProps = {
    isactive?: boolean
}


type ListItemProps = {
    active?: boolean,
    onSwitchProfile: (keyId: string) => void
} & ProfileData

const StyledProfileItem = styled.div<StyledProfileItemProps>`
	display: flex;
	align-items: center;
	padding: 12.5px 24px;
	cursor: pointer;
	background-color: ${props => props.isactive && props.theme.ui.colors.border.light};
	min-height: 70px;

	&:hover {
	background-color: ${props => props.theme.ui.colors.primary};
	color: #FFF
	}
`

const StyledProfileDetails = styled.div`
	margin: 0 15px;
	flex: 1;
`

const StyledProfileName = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	font-weight: bold;
`

const StyledProfileKeyId = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
`

const StyledProfileKeyIdCopy = styled.button`
	background-color: transparent;
	border: none;
	margin-left: 15px;

	& > * {
	transition: color 0ms ease-in-out;
	}

	${StyledProfileItem}:hover & > * {
	color: #FFF
	}
`

const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ListItem = ({profileImg, keyID, nickName, active, onSwitchProfile}: ListItemProps) => {

	
    const copyDeviceCode = (event: React.MouseEvent<HTMLButtonElement>, code: string) => {
        const intl = useIntl()
        event.stopPropagation()
        toast({
            toastIcon: <Checkmark size={18}/>,
            event: intl.formatMessage({id:'toaster.action.copyDeviceCode'}),
            duration: 'sm'
        })
        CopyToClipboard(code)
    }

    return (
        <StyledProfileItem onClick={
			() => {
				onSwitchProfile(keyID)
			}} 
			isactive={ active }>
            <ProfileImage src={profileImg || AnonymousProfile} size={45}/>
            <StyledProfileDetails>
                <StyledProfileName>{nickName || 'Anonymous User'}</StyledProfileName>
                <RowWrapper>
                    <StyledProfileKeyId>{keyID}</StyledProfileKeyId>
                    <StyledProfileKeyIdCopy onClick={
						(event) => {
							copyDeviceCode(event, keyID)
						}}>
                        <Copy/>
                    </StyledProfileKeyIdCopy>
                </RowWrapper>
            </StyledProfileDetails>
        </StyledProfileItem>
    )
}

export default ListItem
