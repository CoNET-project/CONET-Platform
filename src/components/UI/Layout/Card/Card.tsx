import styled from 'styled-components';
import React, {ReactNode} from "react";

export type CardProps = {
    visual: ReactNode | string,
    contentTitle?: ReactNode | string,
    contentComponent: ReactNode
}

const StyledCard = styled.div`
  max-width: 70rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

const StyledImage = styled.img`
  width: 100%;
`

const StyledVisualContainer = styled.div`
  width: 75%;
  min-width: 16rem;
  max-width: 30rem;
`

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledContentTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const StyledContentComponent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.ui.text.textPrimary};
  margin: 20px 0;
  font-size: 16px;
  width: 100%;
  line-height: 28px
`

const Card = ({visual, contentTitle, contentComponent}: CardProps) => {
    return (
        <StyledCard>
            <StyledVisualContainer>
                {typeof visual === 'string' ? <StyledImage src={visual}/> : visual}
            </StyledVisualContainer>
            <StyledContents>
                <StyledContentTitle>
                    {contentTitle}
                </StyledContentTitle>
                <StyledContentComponent>
                    {contentComponent}
                </StyledContentComponent>
            </StyledContents>
        </StyledCard>
    )
}

export default Card