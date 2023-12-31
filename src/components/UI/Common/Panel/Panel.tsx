import styled from 'styled-components'
import {ReactNode} from "react"

export type PanelProps = {
    children: ReactNode
    className?: string
}

const StyledPanel = styled.div`
	height: 100%;
	width: 100%;
	content: '';
	background-color: ${props => props.theme.ui.colors.background.foundation};
	color: ${props => props.theme.ui.colors.text.primary};
	transition: width 150ms ease-in-out, opacity 150ms ease-in-out;

	// Don't change this!
	overflow: hidden;
`

export default StyledPanel
