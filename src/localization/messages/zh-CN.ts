import {Messages} from '../types'

const zh_CN: Messages = {
    'main.greeting': '你好世界!',
    'onboarding.selectLanguageTitle': '选择您的语言',
    'onboarding.selectLanguageSubtitle': '选择您的语言...',
    'onboarding.setPasscodeTitle': '设置密码',
    'onboarding.setPasscodeSubtitle': '输入最少 6 个字符的密码',
    'onboarding.confirmPasscodeTitle': '确认密码',

    'onboarding.verificationTitle': '验证邀请码',
    'onboarding.verificationInputLabel': '输入您的邀请码',
    'onboarding.verificationText': '请输入您收到的邀请码以开始验证过程。 此邀请码确保您在 Seguro 平台上的体验质量是最好的',
    'onboarding.verification.connecting': '正在链接IMAP...',
    'onboarding.verification.sending': '正在向 Seguro 发送验证请求...',
    'onboarding.verification.waiting': '等待 Seguro 的验证响应...',
    'onboarding.verification.finished': '验证完成!',

    'onboarding.verification.error.incorrect': '您的验证码有误，请重试！',
    'onboarding.verification.error.internet': 'Seguro 无法连接到互联网 请再试一次！',
    'onboarding.verification.error.stripe': 'Seguro 无法连接到 STRIPE 请再试一次！',
    'onboarding.verification.error.email': 'Seguro 无法连接到电子邮件服务器，请重试！',
    'onboarding.verification.error.localserver': 'Seguro 无法连接到本地服务器，请重启 Seguro！',
    'onboarding.verification.error.timeout': 'Seguro 等待超时，请重试！',
    'onboarding.verification.error.authError': '请更新您的 Seguro 软件！',

    'onboarding.verification.modal.button.retry': '重试',
    'onboarding.verification.modal.button.update': '更新 Seguro',
    'onboarding.verification.modal.button.newCode': '输入新的验证码',

    'onboarding.carousel.title.seguro-platform': 'Seguro 平台',
    'onboarding.carousel.title.no-ip-tracking': '无 IP 跟踪',
    'onboarding.carousel.title.decentralized': '去中心化',
    'onboarding.carousel.title.anonymity': '匿名',
    'onboarding.carousel.content.seguro-platform': 'Seguro 通过创新技术解决数据泄露和信息不安全的问题',
    'onboarding.carousel.content.no-ip-tracking': '使用创新的电子邮件隧道技术，您可以从任何地方访问 Seguro，而无需担心 IP 跟踪或防火墙',
    'onboarding.carousel.content.decentralized': 'Seguro 在分散系统上运行，这意味着即使我们也无法访问您的信息',
    'onboarding.carousel.content.anonymity': '使用 Seguro 随心所欲地公开或匿名，无需个人信息',

    'passcodeInput.incorrect.error': '密码错误，请再试一次',
    'passcodeInput.confirm.error': '密码不对，请再输入一次',
    'passcodeInput.invalidLength': '密码最少需要6位数',

    'button.next': '下一步',
    'button.back': '退一步',

    'unlock.title': '输入您的 Seguro 密码',

    'keypad.cancel': '取消',
    'keypad.unlock': '解锁'
}

export default zh_CN