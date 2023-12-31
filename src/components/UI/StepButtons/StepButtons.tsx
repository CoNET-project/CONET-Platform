import styled from 'styled-components'
import StepButton from "./StepButton/StepButton"
import {
    CgArrowLongLeft,
    CgArrowLongRight,
} from "react-icons/cg"
import {FormattedMessage} from "react-intl"
import React from "react"

export type StepButtonsClickActions = {
    previousButton?: {
        text?: React.ReactNode | string,
        action: () => void
    },
    nextButton?: {
        text?: React.ReactNode | string,
        action: () => void
    }
}


export type StepButtonsProps = {
    actionHandler: StepButtonsClickActions
}

const StyledStepButtons = styled.div`
	width: 100%;
	min-width: 15rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const StepButtons = ({actionHandler}: StepButtonsProps) => {

    return (
        <StyledStepButtons>
            {
                !actionHandler.previousButton && (
                    <div/>
                )
            }
            {
                actionHandler.previousButton && (
                    <StepButton
                        text={actionHandler.previousButton.text || <FormattedMessage id='button.back'/>}
                        onClick={actionHandler.previousButton.action}
                        iconLeft={<CgArrowLongLeft/>}/>
                )
            }
            {
                actionHandler.nextButton && (
                    <StepButton
                        text={actionHandler.nextButton.text || <FormattedMessage id='button.next'/>}
                        onClick={actionHandler.nextButton.action}
                        iconRight={<CgArrowLongRight/>}/>
                )
            }
        </StyledStepButtons>
    )
}

export default StepButtons
