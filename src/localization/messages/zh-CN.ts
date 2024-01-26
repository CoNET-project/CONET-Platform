import { Messages } from '../types';

const zh_CN: Messages = {
  'platform.app.browser.search.placeholder': '请输入检索关键字或网站',
  'platform.app.browser.tab.newTabName': '新标签',

  'main.greeting': '你好世界!',
  'LaunchScreen.loadFail': 'CoNET 平台加載失敗！ 請點擊重新加載。',
  'onboarding.selectLanguageTitle': '选择您的语言',
  'onboarding.selectLanguageSubtitle': '选择您的语言...',
  'onboarding.setPasscodeTitle': '请设置密码保护您的CONET钱包',
  'onboarding.setPasscodeSubtitle': '最少6个字符',
  'onboarding.confirmPasscodeTitle': '确认密码',

  'onboarding.verificationTitle': '验证邀请码',
  'onboarding.verificationInputLabel': '输入您的邀请码',
  'onboarding.verificationText': '请输入您收到的邀请码以开始验证过程。 此邀请码确保您在 Seguro 平台上的体验质量是最好的',
  'onboarding.verification.connecting': '正在链接IMAP...',
  'onboarding.verification.sending': '正在向 Seguro 发送验证请求...',
  'onboarding.verification.waiting': '等待 Seguro 的验证响应...',
  'onboarding.verification.finished': '验证完成!',

  'onboarding.verification.error.generic': 'Seguro 无法验证您的代码，请重试!',
  'onboarding.verification.error.incorrect': '您的验证码有误，请重试！',
  'onboarding.verification.error.internet': 'Seguro 无法连接到互联网 请再试一次！',
  'onboarding.verification.error.stripe': 'Seguro 无法连接到 STRIPE 请再试一次！',
  'onboarding.verification.error.email': 'Seguro 无法连接到电子邮件服务器，请重试！',
  'onboarding.verification.error.localserver': 'Seguro 无法连接到本地服务器，请重启 Seguro！',
  'onboarding.verification.error.timeout': 'Seguro 等待超时，请重试！',
  'onboarding.verification.error.authError': '请更新您的CoNET平台软件！',

  'onboarding.verification.modal.button.retry': '重试',
  'onboarding.verification.modal.button.update': '更新CoNET平台',
  'onboarding.verification.modal.button.newCode': '输入新的验证码',

  'onboarding.setup.create.container': '正在创建匿名帐户...',
  'onboarding.setup.verify.code': '正在创建加密通讯用密匙...',
  'onboarding.setup.enter.button': '进入CoNET平台',

  'onboarding.carousel.title.seguro-platform': 'CoNET 平台',
  'onboarding.carousel.title.no-ip-tracking': '匿名网络',
  'onboarding.carousel.title.decentralized': '去中心化',
  'onboarding.carousel.title.anonymity': '匿名',
  'onboarding.carousel.content.seguro-platform': 'CoNET通过创新技术解决数据泄露和信息不安全的问题',
  'onboarding.carousel.content.no-ip-tracking': '使用创新的无IP地址加密通讯基础设施，您可以从任何地方来访问CoNET网络，而无需担心被跟踪或被防火墙阻拦',
  'onboarding.carousel.content.decentralized': 'CoNET运行在去中心化基础设施上，这意味着没有人可以偷窥您的信息',
  'onboarding.carousel.content.anonymity': '使用CoNET让您自己完全控制您的个人信息',

  'passcodeInput.incorrect.error': '密码错误，请再试一次',
  'passcodeInput.confirm.error': '密码不对，请再输入一次',
  'passcodeInput.invalidLength': '密码最少需要6位数',

  'button.next': '下一步',
  'button.back': '退一步',
  'button.unlock': '开锁',

  'unlock.title': '输入您的 CoNET 平台密码',

  'platform.unlock.button.forgot': '忘记密码了？',
  'platform.dialog.delete.message': '删除，将失去您在CONET平台内的所有信息！',
  'platform.dialog.delete.button.cancel': '取消',
  'platform.dialog.delete.button.confirm': '删除密码',

  'keypad.cancel': '取消',
  'keypad.unlock': '解锁',

  'tabnavigator.tab.chats': '聊天',
  'tabnavigator.tab.contacts': '联系',
  'tabnavigator.tab.settings': '设置',

  'drawer.settings': '设置',
  'drawer.updates': '更新',
  'drawer.support': '支持',

  'platform.overlay.unlocking': '请解锁钱包',
  'platform.overlay.createProfile': '创建配置文件...',

  'platform.modal.verification.title': '需要验证',
  'platform.modal.verification.text': '请输入您的 36 字符邀请码以完成设置。',
  'platform.modal.verification.button': '开始验证',

  'platform.network.status.label': '当前状态：',
  'platform.network.status.low': '低',
  'platform.network.status.medium': '中',
  'platform.network.status.high': '高',

  'platform.network.status.description.low': '您与 Seguro 的连接似乎具有很高的延迟。请检查您的互联网连接是否稳定。数据可能比平时下降得更多。',
  'platform.network.status.description.medium': '您与 Seguro 的连接具有中等延迟。您的数据可能偶尔会丢失或无法发送，请检查您的互联网连接。',
  'platform.network.status.description.high': '您与 Seguro 的连接非常好，您应该能够快速接收和发送数据！',

  'platform.settings.settings': '平台设置',
  'platform.settings.language': '语言(Language)',
  'platform.settings.theme': '主题',
  'platform.settings.theme.light': '浅色',
  'platform.settings.theme.dark': '深色',
  'platform.settings.theme.auto': '自动',
  'platform.settings.passcode': '密码',
  'platform.settings.passcode.edit': '更改密码',

  'platform.settings.passcode.title.newPasscode': '新密码',
  'platform.settings.passcode.title.confirmPasscode': '确认密码',
  'platform.settings.passcode.button.next': '下一步',
  'platform.settings.passcode.button.back': '返回',

  'platform.settings.general': '一般',
  'platform.settings.myAccount': '我的账户',
  'platform.settings.profile': '资料',

  'platform.settings.devices': '设备',

  'platform.settings.devices.contextMenu.edit': '编辑',
  'platform.settings.devices.contextMenu.delete': '删除',

  'platform.settings.device.delete': '删除设备',
  'platform.settings.device.delete.confirmMessage': '你确定吗？',
  'platform.settings.device.delete.confirmSubmessage': '删除设备是永久操作',
  'platform.settings.device.delete.cancelButton': '取消',
  'platform.settings.device.delete.confirmButton': '确认',

  'platform.settings.deviceCodes': '设备代码',
  'platform.settings.activeCodes': '活动代码',
  'platform.settings.subscriptionPlan': '订阅计划',

  'toaster.action.copyDeviceCode': '复制的设备代码!',
  'toaster.action.passcodeChange': '密码已更改!',

  'platform.contextMenu.manage': '管理',
  'platform.contextMenu.delete': '删除',
  'platform.contextMenu.edit': '编辑',

  'platform.profile.changePicture': '更换图片',
  'platform.profile.walletAddr': '钱包地址',
  'platform.profile.nickName': '设置昵称',
  'platform.profile.privateKey': '导出私钥',
  'platform.profile.privateKeyWarning': '警告：切勿泄露此密钥给任何人。拥有此私钥，就可以任意支配，账户中所有的资产。',

  'globalBar.profile.dropdown.manageProfiles': '管理个人资料',
  'globalBar.profile.dropdown.addProfile': '添加配置文件',
  'globalBar.profile.dropdown.lockPlatform': '锁定平台',

  'platform.manageProfile': '管理个人资料',
  'platform.manageProfile.setAsPrimary': '设置为当前账户',
  'platform.manageProfile.saveButton': '保存',

  'platform.manageProfiles': '管理个人资料',
  'platform.manageProfiles.deleteProfile': '删除个人资料',
  'platform.manageProfiles.deleteProfile.confirmationTitle': '你确定吗？',
  'platform.manageProfiles.deleteProfile.confirmationSubtext': '删除个人资料是永久性的!',
  'platform.manageProfiles.deleteProfile.cancelButton': '取消',
  'platform.manageProfiles.deleteProfile.confirmButton': '确认',

  'platform.manageProfiles.deleteProfile.onlyProfileError': '你需要至少 1 个关于 Seguro 的个人资料！',
  'platform.manageProfiles.deleteProfile.returnButton': '返回个人资料',

  'platform.addProfile.setAsPrimary': '设置为主',
  'platform.addProfile.createButton': '创建',

  'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet': '水龙头',
  'platform.ProfileDropdown.CurrentProfileItem.actionSend': '转账',
  'platform.ProfileDropdown.CurrentProfileItem.buy': '购买',
  'platform.ProfileDropdown.Tablable.Assets': '加密资产',
  'platform.ProfileDropdown.Tablable.Activity': '历史记录',

  'platform.ProfileDropdown.send.receiver': '收款人地址',
  'platform.ProfileDropdown.send.amount': '转账数量',
  'platform.ProfileDropdown.history.sender': '付款人地址',
  'platform.ProfileDropdown.CoNETCash.amountError': 'CoNETCash只能在10～100USDC之间',

  'platform.ProfileDropdown.history.type.send': '转出',
  'platform.ProfileDropdown.history.type.receive': '接收',
  'platform.ProfileDropdown.history.gas.total': 'Gas费合计',
  'platform.ProfileDropdown.history.timestamp': '时间戳',
  'platform.ProfileDropdown.history.CoNETCash.mint': '鑄造',

  'platform.ProfileDropdown.send.confirm': '确认转账',
  'platform.ProfileDropdown.send.next': '下一步',
  'platform.ProfileDropdown.send.max': '最大值',
  'platform.ProfileDropdown.send.estimatedGas': '预估转账Gas费',
  'platform.ProfileDropdown.send.total': '合计',
  'platform.ProfileDropdown.faucet.limited': '24小时内仅限1次请求。',
  'platform.ProfileDropdown.faucet.lowBalance': 'CONET余额不足，无法支付转账GAS，请尝试水龙头获得CONET',
  'platform.ProfileDropdown.faucet.success': '已成功发送请求！',
  'platform.ProfileDropdown.faucet.error': '已拒绝您的请求，每天只能请求一次',
  'platform.ProfileDropdown.send.error': '网络错误，请稍后重试',
  'platform.ProfileDropdown.buy.usdcPrice': '预估价格: ',
  'platform.ProfileDropdown.spend': '花费',
  'platform.ProfileDropdown.Receive': '收到',

  'platform.ProfileDropdown.SI.network.title': 'CoNET-SI"隐形互联网"设定',
  'platform.ProfileDropdown.SI.network.loading': '正在获得CoNET-SI"隐形互联网"挖矿节点信息....',
  'platform.ProfileDropdown.SI.network.listError': '获取CoNET-SI"隐形互联网"节点信息失败,请稍后再试！',

  'platform.ProfileDropdown.CurrentProfileItem.AnonymousUser': '匿名用户',

  'tabnavigator.guide.title': '欢迎使用CONET',
  'tabnavigator.guide.createWallet': '创建钱包',
  'globalBar.application.home': 'CoNET 平台',
  'globalBar.application.SeguroMessage': 'Seguro 聊天',
  'globalBar.application.AppStore': 'CoNET 应用商店',

  'platform.ProfileDropdown.nodelist.title': '正在获取CoNET-SI节点列表...',
  'platform.ProfileDropdown.conet_si.nodes.title': '关于CoNET-SI "隐形互联网"节点',
  'platform.ProfileDropdown.conet_si.nodes.maxConfirm': '确认(已达最大值)',
  'platform.ProfileDropdown.conet_si.nodes.detail':
    'CoNET-SI的节点由分布在全球的CoNET-SI矿工组成。 他们向用户提供网络设备，以获得用户支付的匿名美元稳定币 CoNETCash 作为收入。 用户可以购买云计算存储和网络服务。',
  'platform.ProfileDropdown.conet_si.nodes.mining':
    'CoNET-SI欢迎任何人，提供多余的电脑设备，作为参与者挖矿，获取以美金为基准的加密稳定币的回报。请访问CoNET项目网站以获取更详细的信息。',
  'platform.ProfileDropdown.CoNET.website': '点击这里访问CoNET项目网站',

  'platform.ProfileDropdown.nodelist.registersRecipientTitle': '接收节点设定',
  'platform.ProfileDropdown.nodelist.registersRecipientDetail': '请选择一个节点，作为您的钱包接收方，以使用CoNET-SI来进行通信',
  'platform.ProfileDropdown.nodelist.registersRecipientInfo1':
    '客户端将匿名账号的钱包地址，注册到CoNET-SI网络中的一个节点，该钱包地址就可开始接收其他客户端发送的信息，节点会在客户端离线时，暂时保留收到的信息，客户端再次上线时，离线信息会被传送到客户端。客户需要通过CoNETCash-USDC支付存储费和网络传输费。',
  'platform.ProfileDropdown.nodelist.registersRecipientInfo2': `CoNET-SI 的节点都是中继节点。客户端通过入口节点发送的密文被路由到接收节点。由于加密只包含收件人注册的节点地址，因此入口节点不知道客户端正在与谁通信。接收节点接收到的加密消息，只包含收件人地址，不知道消息的发送者是谁。`,
  'platform.ProfileDropdown.nodelist.registersPayment.setupTitile': '支付设定',
  'platform.ProfileDropdown.nodelist.registersPayment.detail1': '请确认支付授权',
  'platform.ProfileDropdown.nodelist.registersPayment.detail2': '最小授权金额为 1 CoNETCash-USDC',
  'platform.ProfileDropdown.nodelist.registersPayment.insufficient_conetcash_balance': 'CoNETCash余额不足',
  'platform.ProfileDropdown.nodelist.registersPayment.CoNETCashBalance': 'CoNETCash-USDC 余额',
  'platform.ProfileDropdown.nodelist.registersPayment.authorizationAmount': '授权金额',
  'platform.ProfileDropdown.nodelist.registersPayment.registersRecipientloading': '正在注册您的通讯钱包地址',
  'platform.ProfileDropdown.nodelist.registersPayment.authorizationInformation':
    '这仅验证您的CoNETCash是否有效以及您的CoNETCash是否有足够的可用资金。该交易将在CoNETCash历史记录中标记为“保留”。CoNETCash上的资金将被搁置（待处理交易）。被授权方有权在你授权金额内，扣除你所购买的服务或产品。',
  'platform.ProfileDropdown.nodelist.registersPayment.registersfinished1': '已登记完毕，其他人可通过地址:',
  'platform.ProfileDropdown.nodelist.registersPayment.registersfinished2': '使用Seguro即時信息与您通讯。您也可通过该地址，在CONET-SI网络部署您的匿名服务器。',

  'platform.ProfileDropdown.nodelist.selectEntryNode': '请选择一个或多个结点，作为进入CoNET-SI的入口',
  'platform.ProfileDropdown.nodelist.entryNodeditail': 'CoNET-SI入口结点是，用户设备通过互联网，无IP地址，隐身连接到CoNET-SI网络的桥梁。',
  'platform.ProfileDropdown.nodelist.entryNodeTitle': `入口节点设定`,
  'platform.ProfileDropdown.nodelist.country': '节点所在地',
  'platform.ProfileDropdown.nodelist.ipAddress': '节点IP地址',
  'platform.ProfileDropdown.nodelist.registersDate': '上线日期',
  'platform.ProfileDropdown.nodelist.keep': '持续服務 分钟',
  'platform.ProfileDropdown.nodelist.outboundPrice': '网络 USDC 1GB',
  'platform.ProfileDropdown.nodelist.storagePrice': '存储 USDC 1GB/月',

  'platform.ProfileDropdown.nodelist.CoNET.SI': 'CoNET-SI "隐形互联网"',
  'platform.ProfileDropdown.nodelist.about': 'CoNET-SI为用户提供零元数据的私密互联网通信',
  'platform.ProfileDropdown.nodelist.about1': '传统互联网传输的数据包，包含发送方和接收方的IP地址和未经加密的内容。',
  'platform.ProfileDropdown.nodelist.about2':
    'CoNET-IS 与 Internet 完全不同，它不使用具有包含个人信息和地理位置的丰富元数据的IP地址。通讯双方使用一次性钱包地址，作为保持通信匿名的一种方式。 CoNET-SI的数据包不包含发件人地址，内容必须加密，才会被传输并送达收件人钱包地址。',

  'platform.country.de': '德国',
  'platform.country.us': '美国',
  'platform.country.gb': '英国',
  'platform.country.es': '西班牙',

  'tabnavigator.appStore.title': '欢迎來到CoNET应用商店',
  'platform.app.seguro.messenger.panels.addContact.info': '您可以在下方，通过他们的钱包地址添加联系人',
  'platform.app.seguro.messenger.panels.addContact.firstMessage': '您可以为此联系人设置昵称。 向他们发送自定义问候语，让他们知道您是谁！',
  'launchPage.HeaderArea.title1-1': 'CONET - 为隐私而生',
  'launchPage.HeaderArea.title1-2': '新互联网',
  'launchPage.HeaderArea.title2': `我们重建了整个互联网以抵抗审查`,
  'launchPage.HeaderArea.button': '加入CONET',
  'launchPage.HeaderArea.secondPart.1': 'CONET使用钱包地址而不是IP地址进行数据交换的抗审查方法，从而彻底改造了互联网',
  'launchPage.HeaderArea.secondPart.2': 'CONET通过技术革命实现了真正的隐私',
  'launchPage.HeaderArea.secondPart.3': 'CONET使用钱包地址, 取代有着丰富个人信息的IP地址',
  'launchPage.HeaderArea.secondPart.4': '来进行数据信息交换',

  'launchPage.FeatureArea1.1': '上网设备使用钱包地址来区分彼此',
  'launchPage.FeatureArea1.2': 'CONET区块链代表了互联网的全新网络层，不使用IP地址或无任何元数据。这是唯一能够实现完全匿名、隐私和普遍访问的路由方法。',

  'launchPage.FeatureArea2.1': '简单明了和高效',
  'launchPage.FeatureArea2.2': 'CONET帮助用户逃避无处不在的监控、通信过滤及大数据收集。CONET在技术上永不妥协',
  'launchPage.FeatureArea3.1': '世界首个匿名挖矿的公链项目',
  'launchPage.FeatureArea3.2':
    'CONET是一个無需許可、無需信任、由社区驱动共同建设的開源项目。区块链技术上首次实现了匿名挖矿。用戶可以使用CONET代幣支付Gas费、賺取獎勵、委託代幣、運行節點以及對治理計劃進行投票。',

  'launchPage.FeatureArea4.1': '傲立群雄',
  'launchPage.FeatureArea4.2': `CONET可以完成包括VPN、TOR、NYM、dVPN等，您所知的所有其他解决方案，无法完成的任务。`,
  'launchPage.FeatureArea5.1': '真正的私密',
  'launchPage.FeatureArea5.2': '中本聪解决了钱包地址的资产转移，CONET解决了钱包地址的信息高速高吞吐交换。CONET是实现Web3远景所不可缺的网路基础设施',
  'launchPage.FeatureArea6.1': '简单及军用级安全标准',
  'launchPage.FeatureArea6.2':
    'CONET平台运行在各种浏览器中，无需安装和获得系统授权。CONET在客户端创建了一个安全沙盒，进出沙盒所有数据均被加密。本地文件存储碎片化后加密保存，无元数据的碎片，即便电脑有监控程序，都无法进行拼图复原，客户记录不再可见',
  'launchPage.FeatureArea7.1': '轻松dAPP开发',
  'launchPage.FeatureArea7.2':
    'CONET的去中心化域名解释系统，解决了根服务器对互联网的控制。CONET平台允许开发者使用PWA技术开发Web3的dAPP，一套代码对应所有设备，低成本开发成为可能。去中心化的应用分发系统，解决了中心化应用商店的审查机制，保障了技术创新和投资回报',
  'launchPage.FeatureArea.1': 'CONET 是对整个隐私市场的彻底改造',
  'launchPage.FeatureArea.2': ' ',
  'launchPage.FeatureArea.3': '独创设计',

  'platform.home': 'CONET平台',
  'platform.proxy': '连结Web2和Web3的数据高速桥梁',
  'platform.proxy-1': '使用钱包地址，去访问Youtube，靜悄悄無影無蹤！',
  'platform.proxy.title': '最隐私的高速代理',
  'platform.proxy.FeatureArea.title.1': 'CONET代理，重新定義隐私VPN市场',
  'platform.proxy.FeatureArea.title.2': ' ',
  'platform.proxy.FeatureArea5.1': '实现真正的隐私',
  'platform.proxy.FeatureArea5.2':
    'CONET代理技术重写了VPN隐私定义。碎片化通信让数据完美地隐藏在数据海洋中。钱包地址通讯路由网络，让客户在去中心化代理服务商面前完全匿名',
  'platform.proxy.FeatureArea5.moreDetail': '更多信息',
  'platform.proxy.issueReport': '报告问题',

  'platform.proxy.FeatureArea6.1': '流量混淆技术',
  'platform.proxy.FeatureArea6.2': `CONET代理最大特点是没有特殊协议，碎片化通讯让流量隐身不可见`,
  'platform.proxy.FeatureArea7.1': '并发流量的威力',
  'platform.proxy.FeatureArea7.2': `CONET代理業界首創可同時使用多個代理伺服器並發通訊技術`,
  'platform.proxy.FeatureArea.start': '开始使用',

  'platform.proxy.step1.title': '免费用户',
  'platform.proxy.subscription.user': '订阅用户',

  // 选择国家
  'platform.proxy.featureArea8Item.selectCountry': '选择国家',
  'platform.proxy.featureArea8Item.randomCountry': '隐私重视随机国家',
  'platform.proxy.featureArea8Item.random': '随机',
  'platform.proxy.featureArea8Item.optionalCountry': '可选国家',
  // 重新加载
  'platform.proxy.featureArea8Item.refresh': '重新加载',

  'platform.proxy.featureArea8Item.step1': '第一步：帐户充值',
  'platform.proxy.featureArea8Item.step1.CONETbalance': 'CONET余额',
  'platform.proxy.featureArea8Item.step1.transferQuote': '计费 1MB/1$CONET',
  'platform.proxy.featureArea8Item.step2': '第二步：开始使用代理',
  'platform.proxy.featureArea8Item.step2.cant': '余额不足',
  'platform.proxy.featureArea8Item.step2.random': ' ', //'多重选择，通讯数据将碎片化随机使用',
  'platform.proxy.featureArea8Item.step3': '火狐浏览器设置',
  'platform.proxy.featureArea8Item.chrome': 'Chromium内核类浏览器设置',
  'platform.proxy.featureArea8Item.chrome.extensions': '谷歌应用商店下载',
  'platform.proxy.chrome.detail': '本机通过Chrome类浏览器使用CONET代理详细设定',
  'platform.proxy.firefox.detail': '本机通过火狐浏览器使用CONET代理详细设定',

  'platform.proxy.featureArea8Item.minerSetup.title': '请选择挖矿类型',
  'platform.proxy.featureArea8Item.minerSetup.saas': 'SaaS算力挖矿',
  'platform.proxy.featureArea8Item.minerSetup.bandwidth': '带宽挖矿',
  'platform.proxy.setup.allOther': '高级代理设置',
  'platform.proxy.setup.iOS': '苹果手机',
  'platform.proxy.setup.iOSOther': '其他iOS设备可通过本电脑使用代理',
  'platform.proxy.setup.android': '安卓手机',
  'platform.proxy.setup.andOther': '其他安卓类设备可通过本电脑使用代理',
  'platform.proxy.setup.macos': '苹果系统',
  'platform.proxy.setup.macosOther': '其他苹果系统类设备可通过本电脑使用代理',
  'platform.proxy.setup.win': 'Windows',
  'platform.proxy.setup.winOther': '其他Windows系统类设备可通过本电脑使用代理',

  'platform.joinUS.miner.title': '安全优先的挖矿设计',
  'platform.joinUS.miner.detail':
    '基于非信任前提下，最大限保护网络资源提供者的安全，是CONET网络设计的最优先考虑：安全沙盒内独立空间，独创的无IP地址隐私矿工，是CONET傲立群雄的技术优势。',
  'launchPage.FeatureArea9.title': 'CONET测试网正式运行',
  'platform.joinUS.header.title.1': '空余计算机资源',
  'platform.joinUS.header.title.2': '公平交易市场',
  'platform.joinUS.header.detail': 'CONET是Layer Minus隐私基础设施',
  'platform.joinUS.header.whatConet': `CONET是什么`,
  'platform.joinUS.miner.Bandwidth': '带宽挖矿',
  'platform.joinUS.miner.BandwidthDetail': '分享未使用网络IP地址，带宽资源获取奖励。',
  'platform.joinUS.miner.SaaS': '算力挖矿',
  'platform.joinUS.miner.SaaSDetail': '分享未使用CPU算力资源获取奖励。',
  'platform.joinUS.miner.storage': '存储空间挖矿',
  'platform.joinUS.miner.storageDetail': '分享未使用硬盘空间获取奖励。',

  'platform.joinUS.miner.cloudTitle': '云节点',
  'platform.joinUS.miner.cloud.table.title1': '种子节点',
  'platform.joinUS.miner.cloud.table.title2': '超级节点',
  'platform.joinUS.miner.cloud.table.item1': '预售价',
  'platform.joinUS.miner.cloud.table.item2': '挖矿速率',
  'platform.joinUS.miner.cloud.table.item2-seed': '分享总产量32.3%',
  'platform.joinUS.miner.cloud.table.item2-super': '分享总产量60.3%',
  'platform.joinUS.miner.cloud.table.item3': '限定数量',
  'platform.joinUS.miner.cloud.table.item4': '运行持续性',
  'platform.joinUS.miner.cloud.table.item5': '维护费用',
  'platform.joinUS.miner.cloud.table.item5-1': '项目组承担',
  'platform.joinUS.miner.cloud.table.item6': '空投',
  'platform.joinUS.miner.cloud.table.item7': '限量版超炫迷你WiFi矿机',
  'platform.joinUS.miner.cloud.table.item7-2': '1台',
  'platform.joinUS.miner.cloud.table.item8': '独特福利',
  'platform.joinUS.miner.cloud.table.item8-2': 'Blast空投，矿机利润红利',
  'platform.joinUS.miner.cloud.table.itemAvailable': '剩余数量',

  'platform.joinUS.joinMiner.button': '加入CONET挖矿',
  'platform.joinUS.forUser.Title1': 'Web3应用程序', //'去中心化隐私增强',
  'platform.joinUS.forUser.Title2': '无需信任Web3应用程序',
  'platform.joinUS.forUser.detail': '用户驱动的验证模型，消除了中心化中介机构，增强了生态系统安全性和信任度',

  'platform.joinUS.forDeveloper.Title1': '使用CONET基础设施',
  'platform.joinUS.forDeveloper.Title2': '开发去中心化应用',
  'platform.joinUS.forDeveloper.detail': '让您的dAPP拥有天然隐私增强功能',
  'platform.joinUS.forDeveloper.button': '即将推出',

  'platform.api.daemon.title': '未检测到CONET守护程序',
  'platform.api.daemon.detail': '请启动CONET，或下载启动它',
  'platform.api.daemon.verLow': '您的CONET守护程序已过时。点击下载最新',
  'platform.api.daemon.mobileNotSupport': '目前只支持电脑',
  'platform.api.daemon.testButton': '测试守护进程',
  'platform.api.daemon.openSource': 'CONET是开源代码',

  'platform.api.daemon.httpsiteError': '本APP不支持CONET跨Web2代理，请点击切换APP',
  'platform.api.daemon.switchAPP': '切换 APP',

  'platform.miner.header.title': '欢迎您CONET参与者',
  'platform.miner.header.title.detial': '为何CONET需要您的参与',
  'platform.miner.header.title.smartContract': 'CNTP ERC20合约',

  'platform.miner.register.title': '成为节点矿工',
  'platform.miner.register.button': '开始挖矿',
  'platform.miner.register.boost': '加码',
  'platform.miner.register.boost.detail': '锁定 ? $COENT 90天',

  // 排名表
  'platform.miner.register.rank.title': '排名',
  'platform.miner.register.rank.table.title1': '排名',
  'platform.miner.register.rank.table.walletAddr': '钱包地址',
  'platform.miner.register.rank.table.points': '点数',


  'platform.miner.register.MinerAni.reward': '当前获得的奖励',
  'platform.miner.register.MinerAni.pause': '暂停',
  'platform.miner.register.MinerAni.resume': '开始',
  'platform.miner.register.MinerAni.claim': '转帐奖励到钱包',
  'platform.miner.register.totalRewards': '获得总奖励',
  'platform.miner.register.pendingRewards': '等待转帐的奖励',

  'platform.miner.register.previouslyClaimed': '当前奖励',
  'platform.miner.register.MinerAni.stop': '停止DePIN',

  'platform.miner.register.referrals': '推荐',
  'platform.miner.register.referralsList': '推荐一览表',
  'platform.miner.register.referralsEmpty': '您暂无推荐',
  'platform.miner.community.referral.detail': '通过推荐传播获得加速的奖励',
  'platform.conet.cotp.Symbol': 'CNTP',
  'platform.conet.cotp.name': 'CONET积分',
  'platform.miner.community.referral.detail1': '直接推荐',
  'platform.miner.community.referral.detail1-1':
    '如果有人使用您的连结参与挖矿，您将获得他赚取积分的20%额外奖励（这部分是额外奖励，不影响您的收入）这是持续进行的，意味着只要您推荐的用户，不断赚取积分，您的奖金就会持续成长。',
  'platform.miner.community.referral.detail2': '间接推荐',
  'platform.miner.community.referral.detail2-1':
    '当被推荐人推荐另外其他人（次要推荐人），您也会获得次要推荐人所获得奖励的10%。这种情况会无限期地持续下去，只要次要推荐人获得额外积分，同时也将让使您受益。',
  'platform.miner.community.referral.link': '您的推荐专用链接',

  'platform.miner.community.title': '社區建设激勵',
  'platform.miner.community.liveness.title': '活力',
  'platform.miner.community.liveness.detail': '随时随地在线关注活跃即可获得奖励',
  'platform.miner.community.liveness.sameIPError': '错误！ 您的IP地址已被占用，请稍后重试',
  'platform.miner.community.liveness.Timeout1': 'CONET服务器超时',
  'platform.miner.community.liveness.Timeout2': '目前可能处于繁忙阶段，请稍后再试',
  'platform.miner.community.liveness.onInternet': '连接不上服务器，是由于没有网络',
  'platform.miner.community.liveness.disconnect': '连接被断开',
  'platform.miner.community.liveness.chainDelayInfo': 'CONET Holesky公链交易繁忙，您收到的CNTP可能会延迟大约30分钟',
  'platform.miner.community.liveness.sameMinerError': '错误！您正在运行另一个实例，请稍后再试',
  'platform.miner.nwteork.Slashing': 'CONET主鏈正執行升級，請等待完成！',
  'platform.miner.community.liveness.yourReferrer': '您的推荐人',
  'platform.miner.community.liveness.referrer': '请输入您的推荐人钱包地址',
  'platform.miner.community.liveness.registerReferrer': '注册推荐人',
  'platform.miner.community.liveness.onlineMiners': '当前在线矿工数',
  'platform.miner.community.liveness.rewordRate': 'CNTP速率',
  'platform.miner.community.liveness.eachMin': ' CNTP/每秒',
  'platform.miner.community.liveness.ErrorButton': '错误发生！',

  'platform.conet.explorer.title': 'CONET 网络探索',
  'platform.conet.explorer.lastBlock': '區塊高度 / 总账户数',
  'platform.conet.explorer.nodes': 'CONET节点数 / 正在运行数',
  'platform.conet.explorer.CNTP': 'CNTP发行总量',
  'platform.conet.explorer.CNTP.mint': '已产矿CNTP',
  'platform.conet.explorer.CNTP.balance': '剩余CNTP',
  'platform.conet.explorer.CNTP.relayNodes': 'CONET网络中继节点',

  'platform.miner.cloudnode.orderButton': '订购云节点',
  'platform.miner.cloudnode.orderInfo': '正在开售中',

  'platform.miner.cloudnode.orderForm.Title': 'CONET云节点订购表',
  'platform.miner.cloudnode.orderForm.detail': 'CONET Layer Minus网络骨干节点，提供CONET用户高吞吐网络数据转发，不间断独享CNTP云节点奖励份额',
  'platform.miner.cloudnode.orderForm.pie.freeuser': '免费用户共享百分比',
  'platform.miner.cloudnode.orderForm.pie.seednode': '种子节点共享百分比',
  'platform.miner.cloudnode.orderForm.pie.supernode': '超级节点共享百分比',
  'platform.miner.cloudnode.orderForm.walletAddr': '您的钱包地址(多个地址请用逗号分隔)',
  'platform.miner.cloudnode.orderForm.seednodeAmount': '订购种子节点数',
  'platform.miner.cloudnode.orderForm.supernodeAmount': '订购超级节点数',
  'platform.miner.cloudnode.orderForm.tx': 'USDT转账TX',
  'platform.miner.cloudnode.orderForm.CONETWalletAddress': 'CONET钱包地址(以太坊): 0xF832ac957988150368714f7AF254C4108917bD18',
  'platform.miner.cloudnode.orderForm.email': '您的Email',
  'platform.miner.cloudnode.orderForm.node': '节点将在转账确认后24小时内部署',

  'platform.cantbeclose': 'CONET平台客戶端正执行数据写入，为防止数据丢失，请稍等片刻再退出',

  'platform.button.error': '错误',
};

export default zh_CN;
