import styled from 'styled-components';
import {AnimationControls, HTMLMotionProps, motion, useAnimation} from "framer-motion";
import Item from "./Item/Item";
import {
    AiOutlineMessage,
    AiOutlineQuestionCircle,
    FaCcApplePay,
    IoFileTrayStackedOutline,
    MdSystemUpdateAlt
} from "react-icons/all";
import {SettingGear} from "../Icons/Icons";
import React, {useEffect, useRef} from 'react';
import {drawerTransitionVariants} from "../Motion/Variants/Variants";
import useAppState from "../../../store/appState/useAppState";
import logger from "../../../utilities/logger/logger";
import {useDidMountEffect} from "../../../utilities/utilities";
import {LogoIcon, LogoText} from "../Logo/Logo";

type DrawerAnimations = 'enter' | 'exit'

type DrawerProps = {
    animationControls?: AnimationControls
} & HTMLMotionProps<'div'>

const StyledDrawer = styled(motion.div)`
  height: 100vh;
  width: 75%;
  background-color: ${props => props.theme.ui.backgroundAccent};
  color: ${props => props.theme.ui.text.textPrimary};
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
  height: calc(60px + env(safe-area-inset-top));
  width: 100%;
  content: '';
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  &:last-of-type {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
`

const Drawer = (props: DrawerProps) => {
    const {animationControls, dragControls} = props

    const {windowInnerSize: {width}, setIsDrawerOpen, isDrawerOpen} = useAppState()

    const drawerRef = useRef<HTMLDivElement>(null)

    const drawerWidth = width * 0.80

    const playAnimation = (animationName: DrawerAnimations) => {
        animationControls?.start(animationName).then()
    }

    useEffect(() => {
        animationControls?.start('setup').then(() => {
        })
    }, [])

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

    return (
        <StyledDrawer
            {...props}
            dragControls={dragControls}
            dragElastic={false}
            dragMomentum={false}
            dragConstraints={{
                right: 0,
                left: -(width * 0.80)
            }}
            transition={{
                x: {type: "just", duration: 0.3}
            }}
            onDragEnd={() => {
                drawerAnimation(drawerRef.current?.getBoundingClientRect().x)
            }}
            animate={animationControls}
            custom={drawerWidth}
            variants={
                drawerTransitionVariants
            }
            ref={drawerRef}
        >
            <StyledHeader>
                <LogoIcon size={24}/>
                <LogoText size={18}/>
            </StyledHeader>
            <StyledDrawerContents>
                <StyledSection>
                    <Item text='Messenger' icon={<AiOutlineMessage/>}/>
                    <Item text='File Storage' icon={<IoFileTrayStackedOutline/>}/>
                </StyledSection>
                <StyledSection>
                    <Item text='Settings' icon={<SettingGear/>}/>
                    <Item text='Updates' icon={<MdSystemUpdateAlt/>}/>
                    <Item text='Support' icon={<AiOutlineQuestionCircle/>}/>
                </StyledSection>
            </StyledDrawerContents>
        </StyledDrawer>
    )
}

export default Drawer