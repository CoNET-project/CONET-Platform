import styled from 'styled-components'
import {AnimatePresence, motion} from "framer-motion"
import useAppState from "../../../store/appState/useAppState"
import {useOnboardingPageNavigator} from "../../../contexts/onboarding/OnboardingContext"
import {LogoIcon, LogoText} from "../../UI/Logo/Logo"
import {screenWidth} from "../../UI/screenSizes"
import SelectLanguagePage from "./SelectLanguagePage/SelectLanguagePage"
import onboardingActions from '../../../contexts/onboarding/onboardingActions'
import PasscodePage from './PasscodePage/PasscodePage'
import {FormattedMessage, useIntl} from 'react-intl'
import {ChevronLeft, ChevronRight} from "../../UI/Icons/Icons"
import ProgressNumberSteps from "../../UI/Progress/ProgressNumberSteps/ProgressNumberSteps"
import React, {ReactNode, useState} from "react"
import VerificationPage from "./VerificationPage/VerificationPage"
import SettingUpPage from "./SettingUpPage/SettingUpPage"

const StyledOnboardingContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background-color: ${props => props.theme.ui.colors.background.foundation};
	color: ${props => props.theme.ui.colors.text.primary};
	flex-direction: column;
	align-items: center;
	padding: 20px 0;

	@media (${screenWidth.mediumWidth}) {
		padding: 30px 0;
	}
`

const StyledLogoContainer = styled.div`
	display: none;
	align-items: center;
	font-size: 30px;

	@media (${screenWidth.narrowWidth}) {
		display: flex;
	}
`

const StyledOnboardingContent = styled.div`
	height: 70%;
	width: 100%;
	content: '';
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (${screenWidth.mediumWidth}) {
		padding: 20px 0;
		width: initial;
		min-width: 30rem;
		max-width: 60rem;
	}
`
const StyledOnboardingNavigation = styled.div`
	width: 100%;
	padding: 20px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (${screenWidth.narrowWidth}) {
		width: 30rem;
	}

	@media (${screenWidth.mediumWidth}) {
		padding: 20px 10px;
		width: initial;
		min-width: 40rem;
		max-width: 60rem;
	}
`

const StyledNavigationButton = styled.button`
	padding: 0 20px;
	display: flex;
	align-items: center;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	background-color: transparent;
	border: none;
	color: ${props => props.theme.ui.colors.text.primary};
`

const StyledNavigationButtonText = styled.p`
	margin: 0 10px;
`

const CustomProgressNumberSteps = styled(ProgressNumberSteps)`
	margin-bottom: 20px;
`


const OnboardingScreen = () => {
	
    const {locale, isTouchDevice, setLocale, setIsUnlocked, setHasContainer, hasContainer} = useAppState()

    const pages = ['setPasscode', 'confirmPasscode', 'verification']

    const {state, dispatch} = useOnboardingPageNavigator()

    const {currentPage, onboardingPageData} = state
    const currentStep = pages.indexOf(state.currentPage[0]) + 1

    const [error, setError] = useState<ReactNode | null>(null)
    const intl = useIntl()
    const previousPageHandler = () => {
        switch (true) {
            case currentPage[0] === 'setPasscode':
                dispatch(onboardingActions.setPasscode(''))
                break;
            case currentPage[0] === 'confirmPasscode':
                dispatch(onboardingActions.setConfirmPasscode(''))
                break;
        }
        dispatch(onboardingActions.previousPage())
    }

    const nextPageHandler = () => {
        setError(null)
        switch (currentPage[0]) {
            case 'setPasscode':{
                const uuu = locale
                if (state.onboardingPageData?.passcode.length < 6) {
                    return setError(intl.formatMessage({id: 'passcodeInput.invalidLength'}))
                }
                break
            }
                
            case 'confirmPasscode':{
                if (state.onboardingPageData?.confirmPasscode.length < 6) {
                    return setError(intl.formatMessage({id: 'passcodeInput.invalidLength'}))
                }
                if (!state.onboardingPageData?.passcode || !state.onboardingPageData?.confirmPasscode)
                    return setError(intl.formatMessage({id: 'passcodeInput.invalidLength'}))

                if (state.onboardingPageData?.passcode !== state.onboardingPageData?.confirmPasscode) {
                    return setError(intl.formatMessage({id: 'passcodeInput.confirm.error'}))
                }
                break
            }
                
            case 'verification':{
                if (
                    !state.onboardingPageData.verificationCode ||
                    state.onboardingPageData.verificationCode.length < 36 ||
                    state.onboardingPageData.verificationCode.length > 36
                ) {
                    return dispatch(onboardingActions.setVerificationCodeError(true))
                }
                break
                
            }
            default:
            case 'settingUp':{
                break
            }
                
        }
        return dispatch(onboardingActions.nextPage())
    }

    return (
        <StyledOnboardingContainer>
            <StyledLogoContainer>
                <LogoIcon size={30}/>
                <LogoText size={26}/>
            </StyledLogoContainer>
            {
                currentPage[0] === 'settingUp' ? (
                    <SettingUpPage/>
                ) : (
                    <>
                        <StyledOnboardingContent>
                            <AnimatePresence custom={currentPage[1]}>
                                {/* {currentPage[0] === 'language' &&
								(
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<SelectLanguagePage
											key={currentPage[0]}
											locale={locale}
											selectLocale={setLocale}
										/>
									</motion.div>
								)
                                    
                                } */}

                                {currentPage[0] === 'setPasscode' &&
									(
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											 <PasscodePage
                                                info=''
												key={currentPage[0]}
												title={intl.formatMessage({id: 'onboarding.setPasscodeTitle'})}
												passcode={onboardingPageData?.passcode || ''}
												setPasscode={(passcode: string) => {
													setError(null)
													dispatch(onboardingActions.setPasscode(passcode))
												}}
												nextPageHandler={nextPageHandler}
												error={error}
											/>
										</motion.div>
									)}

                                {currentPage[0] === 'confirmPasscode' &&
								(
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
									>
										<PasscodePage
                                            info=''
											key={currentPage[0]}
											title={intl.formatMessage({id: 'onboarding.confirmPasscodeTitle'})}
											passcode={onboardingPageData?.confirmPasscode || ''}
											setPasscode={(passcode: string) => {
												setError(null)
												dispatch(onboardingActions.setConfirmPasscode(passcode))
											}}
											nextPageHandler={nextPageHandler}
											error={error}
										/>
									</motion.div>
								)}

                                {/* {currentPage[0] === 'verification' &&
									(
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											
											<VerificationPage
												key={currentPage[0]}
											/>
										</motion.div>
									)} */}
                            </AnimatePresence>
                        </StyledOnboardingContent>
                        <CustomProgressNumberSteps steps={pages.length} currentActiveStep={currentStep}/>
                        <StyledOnboardingNavigation>
                            <StyledNavigationButton onClick={previousPageHandler}
                                                    disabled={currentPage[0] === 'language'}>
                                {
                                    currentPage[0] !== 'language' && (
                                        <>
                                            <ChevronLeft/>
                                            <StyledNavigationButtonText>
                                                {intl.formatMessage({id: 'button.back'})}
                                                
                                            </StyledNavigationButtonText>
                                        </>
                                    )
                                }
                            </StyledNavigationButton>
                            <StyledNavigationButton onClick={nextPageHandler}>
                                <StyledNavigationButtonText>
                                    {intl.formatMessage({id: 'button.next'})}
                                    
                                </StyledNavigationButtonText>
                                <ChevronRight/>
                            </StyledNavigationButton>
                        </StyledOnboardingNavigation>
                    </>
                )
            }
            {/*{currentPage[0] === 'language' &&*/}
            {/*<SelectLanguagePage*/}
            {/*    key={currentPage[0]}*/}
            {/*    locale={locale}*/}
            {/*    selectLocale={setLocale}*/}
            {/*/>}*/}

            {/*{currentPage[0] === 'setPasscode' &&*/}
            {/*<PasscodePage*/}
            {/*    key={currentPage[0]}*/}
            {/*    title={<FormattedMessage id='onboarding.setPasscodeTitle'/>}*/}
            {/*    passcode={onboardingPageData?.passcode || ''}*/}
            {/*    setPasscode={(passcode) => {*/}
            {/*        dispatch(onboardingActions.setPasscode(passcode))*/}
            {/*    }}*/}
            {/*/>}*/}
            {/*{currentPage[0] === 'confirmPasscode' &&*/}
            {/*<PasscodePage*/}
            {/*    key={currentPage[0]}*/}
            {/*    title={<FormattedMessage id='onboarding.confirmPasscodeTitle'/>}*/}
            {/*    passcode={onboardingPageData?.confirmPasscode || ''}*/}
            {/*    setPasscode={(passcode) => {*/}
            {/*        dispatch(onboardingActions.setConfirmPasscode(passcode))*/}
            {/*    }}*/}
            {/*    confirmationAction={confirmationHandler}*/}
            {/*/>}*/}
            {/*{currentPage[0] === 'verification' &&*/}
            {/*<VerificationPage*/}
            {/*    key={currentPage[0]}*/}
            {/*/>}*/}
            {/*{currentPage[0] === 'verificationProcess' &&*/}
            {/*<ProcessingPage*/}
            {/*    key={currentPage[0]}*/}
            {/*    hasTouch={isTouchDevice}*/}
            {/*    onSetupComplete={setShowMain}*/}
            {/*/>}*/}
        </StyledOnboardingContainer>
    )
}

export default OnboardingScreen
