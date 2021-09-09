import styled from 'styled-components';
import {motion, AnimatePresence} from "framer-motion"
import {ReactNode, useEffect, useState} from "react";
import useAppState from "../../../store/appState/useAppState";
import {Locale} from "../../../localization/types";
import SelectLanguagePage from "./SelectLanguagePage/SelectLanguagePage";
import {useOnboardingPageNavigator} from "../../../contexts/onboarding/OnboardingContext";
import PasscodePage from './PasscodePage/PasscodePage';
import {FormattedMessage} from 'react-intl';
import onboardingActions from "../../../contexts/onboarding/onboardingActions";

type Languages = {
    name: string,
    englishName: string,
    locale: Locale
}

type CurrentPage = [number, -1 | 1]

type SavedPasscodes = {
    [id: string]: string
}

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.backgroundColor};
  color: ${props => props.theme.ui.textColor};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AnimatedContent = styled(motion.div)`
  min-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const AnimatedTitle = styled(motion.h1)`
  font-size: 30px;
  color: ${props => props.theme.ui.textColor};
  font-family: 'Lato Bold', sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const OnboardingScreen = () => {
    const appState = useAppState()
    const {state, dispatch} = useOnboardingPageNavigator()
    const {currentPage, onboardingPageData} = state
    const [savedPasscodes, setSavedPasscodes] = useState<SavedPasscodes>({})

    const setLocale = (locale: Locale) => {
        return appState.setLocale(locale)
    }

    const confirmationHandler = () => {
        return state.onboardingPageData?.passcode == state.onboardingPageData?.confirmPasscode
    }

    return (
        <StyledContainer>
            <AnimatePresence custom={currentPage[1]}>
                {currentPage[0] === 'language' &&
                <SelectLanguagePage
                    key={currentPage[0]}
                    locale={appState.locale}
                    selectLocale={setLocale}
                />}

                {currentPage[0] === 'setPasscode' &&
                <PasscodePage
                    key={currentPage[0]}
                    title={<FormattedMessage id='onboarding.setPasscode'/>}
                    passcode={onboardingPageData?.passcode || ''}
                    setPasscode={(passcode) => {
                        dispatch(onboardingActions.setPasscode(passcode))
                    }}
                />}
                {currentPage[0] === 'confirmPasscode' &&
                <PasscodePage
                    key={currentPage[0]}
                    title={<FormattedMessage id='onboarding.confirmPasscode'/>}
                    passcode={onboardingPageData?.confirmPasscode || ''}
                    setPasscode={(passcode) => {
                        dispatch(onboardingActions.setConfirmPasscode(passcode))
                    }}
                    confirmationAction={confirmationHandler}
                />}
            </AnimatePresence>

            {/*<AnimatePresence>*/}
            {/*    <StyledContent>*/}
            {/*        {number === 1 && (*/}
            {/*            <AnimatedTitle initial={{ opacity: 0 }}*/}
            {/*                           animate={{ opacity: 1 }}*/}
            {/*                           exit={{ opacity: 0 }}>*/}
            {/*                ONE*/}
            {/*            </AnimatedTitle>*/}
            {/*        )}*/}

            {/*        {number === 2 && (*/}
            {/*            <AnimatedTitle initial={{ opacity: 0 }}*/}
            {/*                           animate={{ opacity: 1 }}*/}
            {/*                           exit={{ opacity: 0 }}>*/}
            {/*                TWO*/}
            {/*            </AnimatedTitle>*/}
            {/*        )}*/}
            {/*    </StyledContent>*/}
            {/*</AnimatePresence>*/}
        </StyledContainer>
    )
}

export default OnboardingScreen;