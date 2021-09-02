import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styled from 'styled-components'
import {pageTransitionVariants} from "../../../Motion/Variants/Variants";

type StyledSectionProps = {
    flex?: number
}

export type PageTransitionProps = {
    pageTransition: {
        key: number,
        direction: -1 | 1
    }
}

type PageProps = {
    title?: string | ReactNode,
    contentComponents: ReactNode,
    buttonComponents?: ReactNode
} & PageTransitionProps

const StyledAnimatedContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  background-color: ${props => props.theme.ui.backgroundColor};
`

const StyledAnimatedSection = styled(motion.div)<StyledSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  flex: ${props => props.flex || 1};
  padding: 10px 0;
`

const StyledTitle = styled.h1`
    
`



const Page = ({title, contentComponents, buttonComponents, pageTransition}: PageProps) => {
    return (
        <StyledAnimatedContainer
            key={pageTransition.key}
            custom={pageTransition.direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={pageTransitionVariants}
            transition={{
                x: { type: "just" },
                opacity: { duration: 0.2 }
            }}
        >
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledAnimatedSection flex={1}>
                {contentComponents}
            </StyledAnimatedSection>
            <StyledAnimatedSection flex={0.05}>
                {buttonComponents}
            </StyledAnimatedSection>
        </StyledAnimatedContainer>
    )
}

export default Page