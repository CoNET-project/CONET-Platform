import styled from 'styled-components'
import Step from './ProgressStep/Step'
import React, {Fragment, ReactNode} from "react"
import {AnimatePresence, motion} from 'framer-motion'
import {progressStepTransitionVariants} from "../../Motion/Variants/Variants"
import {screenWidth} from "../../screenSizes"

export type ProgressStepsProps = {
    currentStage: number,
    numberOfSteps: number,
    stepTexts?: Array<ReactNode | string>
}

type StyledProgressStepsProps = {
    steps: number
}

const StyledProgressContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const StyledProgressSteps = styled.div<StyledProgressStepsProps>`
	display: grid;
	grid-template-columns: repeat(${props => props.steps}, minmax(50px, 200px));
	grid-gap: 2px;
	align-items: center;
	box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	overflow: hidden;
`

const StyleProgressTextContent = styled.div`
	position: relative;
	width: 100%;
	height: 24px;
`

const StyledProgressText = styled(motion.p)`
	width: 100%;
	top: 10px;
	content: '';
	text-align: center;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm || '12px'};
	color: ${props => props.theme.ui.colors.text.primary};
	bottom: 0;
	position: absolute;

	@media (${screenWidth.mediumWidth}) {
		top: 15px;
		font-size: ${props => props.theme.ui.fontSizes.narrow.md || '12px'};
	}
`

const ProgressSteps = ({currentStage, numberOfSteps, stepTexts}: ProgressStepsProps) => {
    const getSteps = (): Array<ReactNode> => {
        const steps: Array<ReactNode> = []
        for (let i = 1; i <= numberOfSteps; i++) {
            steps.push(<Step stepReached={i <= currentStage}/>)
        }
        return steps
    }

    return (
        <StyledProgressContainer>
            <StyledProgressSteps steps={numberOfSteps}>
                {getSteps().map((step, idx) => (
                    <Fragment key={idx}>
                        {step}
                    </Fragment>
                ))}
            </StyledProgressSteps>
            <StyleProgressTextContent>
                {
                    stepTexts && (
                        <AnimatePresence>
                            {
                                stepTexts[currentStage - 1] && (
                                    <StyledProgressText
                                        key={currentStage}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        variants={progressStepTransitionVariants}
                                        transition={{
                                            x: {type: 'just'},
                                            opacity: {duration: 0.1}
                                        }}>
                                        {stepTexts[currentStage - 1]}
                                    </StyledProgressText>
                                )
                            }
                        </AnimatePresence>
                    )
                }
            </StyleProgressTextContent>
        </StyledProgressContainer>
    )
}

export default ProgressSteps
