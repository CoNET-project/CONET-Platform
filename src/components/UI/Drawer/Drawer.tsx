import styled from 'styled-components'
import {AnimationControls, HTMLMotionProps, motion} from "framer-motion"
import Item from "./Item/Item"
import {AiOutlineMessage, AiOutlineQuestionCircle} from "react-icons/ai"
import {MdSystemUpdateAlt} from "react-icons/md"
import {IoFileTrayStackedOutline} from "react-icons/io5"
import {Gear} from "../Icons/Icons"
import React, {useEffect, useRef} from 'react'
import {drawerTransitionVariants} from "../Motion/Variants/Variants"
import useAppState from "../../../store/appState/useAppState"
import logger from "../../../utilities/logger/logger"
import {LogoIcon, LogoText} from "../Logo/Logo"
import { SeguroLogoIcon} from "../Logo/Seguro"
import {FormattedMessage} from "react-intl"
import {useDidMountEffect} from "../../../utilities/hooks"

type DrawerAnimations = 'enter' | 'exit'

type DrawerProps = {
    CoNETanimationControls?: AnimationControls
} & HTMLMotionProps<'div'>

const StyledDrawer = styled(motion.div)`
	height: 100vh;
	width: 75%;
	background-color: ${props => props.theme.ui.colors.background.elevationOne};
	color: ${props => props.theme.ui.colors.text.primary};
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
	z-index: 2000;
	transform: translateX(-375px);
	border-right: 1px solid rgba(0, 0, 0, 0.05);
	padding-top: calc(env(safe-area-inset-top));
`

const StyledHeader = styled.div`
	height: 60px;
	width: 100%;
	content: '';
	border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
	padding: 0 25px;
	display: flex;
	align-items: center;
`

const StyledDrawerContents = styled.div`
	height: calc(100% - calc(60px + env(safe-area-inset-top)));
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const StyledSection = styled.div`
	&:first-of-type {
		border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
	}

	&:last-of-type {
		border-top: 1px solid ${props => props.theme.ui.colors.border.light};
	}
`

const Drawer = (props: DrawerProps) => {
	
	if (props === undefined) {
		return (
			<StyledDrawer></StyledDrawer>
		)
	}
	const divProps = Object.assign({}, props)
	

    const {windowInnerSize: {width}, setIsDrawerOpen, isDrawerOpen, setIsModalOpen, setShowGuide, setShowAppStore} = useAppState()

    const drawerRef = useRef<HTMLDivElement>(null)

    const drawerWidth = width * 0.80

    const playAnimation = (animationName: DrawerAnimations) => {
        props.CoNETanimationControls?.start(animationName).then()
    }

    useEffect(() => {
        //setIsDrawerOpen(!isDrawerOpen)
        props.CoNETanimationControls?.start('setup').then(() => {
        })
    }, [width])

    useDidMountEffect(() => {
        logger.log('Drawer.tsx', 'Drawer is open: ', isDrawerOpen)
        if (isDrawerOpen) {
            playAnimation('enter')
        } else {
            playAnimation('exit')
        }
    }, [isDrawerOpen])

    const drawerAnimation = (offset: number | undefined) => {
        const currentDrawerState = isDrawerOpen
        let nextDrawerState: boolean = false
        if (offset === undefined) {
            return
        }

        nextDrawerState = Math.abs(offset) <= (drawerWidth / 2);

        if (nextDrawerState !== currentDrawerState) {
            setIsDrawerOpen(nextDrawerState)
        } else {
            playAnimation(currentDrawerState ? 'enter' : 'exit')
        }
    }
	
	delete divProps.CoNETanimationControls
    return (
        <StyledDrawer
            {...divProps}
            dragControls={divProps.dragControls}
            dragElastic={false}
            dragMomentum={false}
            dragConstraints={{
                right: 0,
                left: -(width * 0.80)
            }}
            transition={{
                x: {type: "just", duration: 0.3},
                opacity: {type: false}
            }}
            onDragEnd={() => {
                drawerAnimation(drawerRef.current?.getBoundingClientRect().x)
            }}
            animate={props.CoNETanimationControls}
            custom={drawerWidth}
            variants={
                drawerTransitionVariants
            }
            ref={drawerRef}
			onClick={()=> {
				setIsDrawerOpen(false)
			}}
        >
            <StyledHeader>
                <LogoIcon size={24}/>
                <LogoText size={18}/>
            </StyledHeader>
            <StyledDrawerContents>
                <StyledSection>
                    <Item text={<FormattedMessage id = 'globalBar.application.home'/>} icon={<LogoIcon/>}
						onClick={() => {
							setShowAppStore (false)
							setShowGuide(true)
						}}
					/>
					<Item text={<FormattedMessage id = 'globalBar.application.AppStore'/>} icon={<LogoIcon/>}
						onClick={() => {
							setShowAppStore (true)
							setShowGuide(false)
						}}
					/>
                    <Item text={<FormattedMessage id = 'globalBar.application.SeguroMessage'/>} icon={<SeguroLogoIcon/>}
						onClick={() => {
							setShowGuide(false)
							setShowAppStore (false)
						}}
					/>
                </StyledSection>
                <StyledSection>
                    <Item text={<FormattedMessage id='drawer.settings'/>} icon={<Gear size={16}/>}
						onClick={() => {
							setIsModalOpen('settings')
						}}/>
                    <Item text={<FormattedMessage id='drawer.updates'/>} icon={<MdSystemUpdateAlt size={16}/>}/>
                    <Item text={<FormattedMessage id='drawer.support'/>} icon={<AiOutlineQuestionCircle size={16}/>}/>
                </StyledSection>
            </StyledDrawerContents>
        </StyledDrawer>
    )
}

export default Drawer
