define({"465":{i:0.000849348471206747,u:"../industry_partners/payment/payone/scos/payone-paypal-express-checkout-scos.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, they have to authorize and after that either cancel or validate the transaction. A concern regarding payment flows that require redirection to third party website pages is that you ...",t:"PayPal Express Checkout Payment Through Payone "},"466":{i:0.000434480036418312,u:"../industry_partners/payment/payone/scos/payone-risk-check-address-check-scos.htm",a:" Risk Check and Address Check - Payone On the project level, you should override execute and postCondition methods of SprykerShop\\Yves\\CheckoutPage\\Process\\Steps\\AddressStep. src/Pyz/Yves/CheckoutPage/Process/Steps/AddressStep.php\n                 \n\u003c?php\n \nnamespace ...",t:"Payone - Risk Check and Address Check"},"467":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-state-machine-cmd-cond-evnt.htm",a:"PayOne - State Machine Commands, Conditions and Events ",t:"PayOne - State Machine Commands, Conditions and Events"},"468":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-authorization-and-preauthorization-capture-flows.htm",a:" Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"PayOne - Authorization and Preauthorization-Capture Flows"},"469":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-facade.htm",a:"PayOne - Facade   ",t:"PayOne - Facade"},"470":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-direct-debit.htm",a:"Payone - Direct Debit Payment  Front-End Integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"PayOne - Direct Debit Payment"},"471":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-invoice.htm",a:" Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"PayOne - Invoice Payment"},"472":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-paypal.htm",a:" PayOne - Paypal Payment  The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on ...",t:"PayOne - Paypal Payment"},"473":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-credit-card.htm",a:" PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"PayOne - Credit Card Payment"},"474":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-prepayment.htm",a:"Payone - Pre-payment  Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the ...",t:"PayOne - Prepayment"},"475":{i:0.000571897320305877,u:"../industry_partners/payment/payone/legacy_demoshop/v1_0/payone-online-trans.htm",a:" Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL, Przelewy24, and Bancontact. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method ...",t:"PayOne - Online Transfer Payment"},"476":{i:0.0013710589872934,u:"../industry_partners/payment/payone/legacy_demoshop/v1_1/payone-integration-security-invoice.htm",a:"Front-End Integration\n\t\t To adjust the frontend appearance, provide the following templates in your theme directory:\n\t\tsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/security_invoice.twig State Machine Integration\n\t\t Payone module provides a demo state machine for the Security Invoice ...",t:"Security Invoice Payment - Payone"},"477":{i:0.000973626138948911,u:"../industry_partners/payment/payone/legacy_demoshop/v1_1/payone-paypal-express-checkout.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayOne - PayPal Express Checkout Payment"},"478":{i:0.0019779874016261,u:"../industry_partners/payment/computop/computop.htm",a:" Partner Information \n            We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n         \n            Implementation details:\n         API details OMS details\n            \n \n ...",t:"Payment Integration - Computop"},"479":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-api-details.htm",a:"Computop API  Authorization Call: \n        Authorize money.\n     \n        There is no partial authorization. Please make one API call to make authorization for all items in the order.\n     \n        It is not possible to Authorize a higher amount than in the ORDER.\n     Inquire Call: Status inquiries ...",t:"Computop - API details"},"480":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-credit-card.htm",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/credit_card.twig\n     State Machine Integration The Computop provides a demo state ...",t:"Computop - Credit Card  "},"481":{i:0.00192231729463169,u:"../industry_partners/payment/computop/computop-direct-debit.htm",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/direct_debit.twig\n     State Machine Integration The Computop provides a demo state ...",t:"Computop - Direct Debit  "},"482":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-easy-credit.htm",a:" Computop - Easy Credit  Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/easy_credit.twig\n     State Machine Integration The Computop ...",t:" Computop - Easy Credit  "},"483":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-ideal.htm",a:" Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/ideal.twig\n     State Machine Integration The Computop provides a demo state machine for ...",t:"Computop - iDeal  "},"484":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-oms-details.htm",a:" The following plugins are used for performing calls to Paygate during OMS operation. Authorize Plugin: \n        Make an Authorize call to Computop.\n     Cancel Plugin: Follow these steps to cancel the item in the order in case all the items or the last possible one got canceled: Inquire a call to ...",t:"Computop - OMS  "},"485":{i:0.00178440924443929,u:"../industry_partners/payment/computop/computop-paydirekt.htm",a:" Computop - Paydirekt  Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paydirekt.twig\n     State Machine Integration The Computop ...",t:" Computop - Paydirekt  "},"486":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-paynow.htm",a:" Example State Machine Front-end Integration To adjust the frontend appearance, provide the following templates in your theme directory:  src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paynow.twig   State Machine Integration The Computop provides a demo state machine for the PayNow ...",t:"Computop - PayNow"},"487":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-paypal.htm",a:" Computop - PayPal  Example State Machine Front-End Integration \n    To adjust frontend appearance, provide following templates in your theme directory:\n src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paypal.twig State Machine Integration The Computop provides a demo state machine for ...",t:" Computop - PayPal  "},"488":{i:0.00193610809965093,u:"../industry_partners/payment/computop/computop-sofort.htm",a:" Example State Machine: Front-End Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/sofort.twig\n     State Machine Integration The Computop provides a demo state machine ...",t:"Computop - Sofort  "},"489":{i:0.0020857406522909,u:"../industry_partners/payment/computop/computop-crif.htm",a:" General Information About CRIF Popular with customers, risky for the merchant: Payment methods such as direct debit or purchase on account involve a high level of default risk. Computop Paycontrol, an automated credit rating with all standard credit agencies, combines flexibility and payment ...",t:"Computop - CRIF"},"490":{i:0.00402045845330321,u:"../industry_partners/payment/heidelpay/heidelpay.htm",a:"To use Heidelpay with Spryker, install Heidelpay, integrate Heidelpay into your project, configure selected payment methods (Paypal Authorize, Payal Debit, Credit Card, iDeal, Sofort, Easy Credit, Sofort), and build your own workflow by creating a new OMS which will use Hidelpay.\r\n",t:"Industry Partner Payment Integration - Heidelpay | Spryker"},"491":{i:0.00381556473943151,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-installation.htm",a:" To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and run the following console command: composer require spryker-eco/heidelpay   See ...",t:"Heidelpay - Installation  "},"492":{i:0.00381556473943151,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-integration.htm",a:"Heidelpay - Integration to Your Project\n Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n       The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n "},"493":{i:0.000434480036418312,u:"../industry_partners/payment/heidelpay/scos/heidelpai-integration-scos.htm",a:"Heidelpay Integration into SCOS contains two steps: back-end and front-end integration. To integrate Heidelpay into SCOs, follow the steps described in the article.",t:"Heidelpay - Integration into SCOS | Spryker"},"494":{i:0.000434480036418312,u:"../industry_partners/payment/heidelpay/scos/heidelpay-configuration-scos.htm",a:"Heidelpay Configuration for SCOS contains instructions necessary for configuration of Heidelpay module into SCOS. The configuration consists of several steps: the configuration of the base settings, the configuration of store sensitive settings, and ",t:"Heidelpay Configuration for SCOS | Spryker"},"495":{i:0.000922643963675252,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-authorize.htm",a:"Integrate Paypal Authorize payment through Heidelpay into Spryker Legacy Demoshop",t:"Heidelpay Partner Integration - Paypal Authorize | Spryker"},"496":{i:0.000434480036418312,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-split-payment-marketplace.htm",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example: // Heidelpay Split-payment marketplace logic\n$config[HeidelpayConstants::CONFIG_IS_SPLIT_PAYMENT_ENABLED_KEY] = true; Project Implementation A project level should set quote ...",t:"Heidelpay - Split-payment Marketplace"},"497":{i:0.00409418896629548,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-credit-card.htm",a:"Integrate Credit Card Secure payment through Heidelpay into Spryker Legacy Demoshop.",t:"Heidelpay Partner Integration - Credit Card Secure | Spryker"},"498":{i:0.00409418896629548,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-paypal-debit.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027; This value should be taken from HEIDELPAY ...",t:"Heidelpay - Paypal Debit Workflow  "},"499":{i:0.00321559185094892,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-error-workflow.htm",a:"Workflow for Errors article describes",t:"Heidelpay Partner Integration - Workflow for Errors | Spryker"},"500":{i:0.00365090129814649,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-sofort.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027; \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)  "},"501":{i:0.00365090129814649,u:"../industry_partners/payment/heidelpay/v1_0/heidelpay-ideal.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): $config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027; This value should be taken from HEIDELPAY. ...",t:"Hedelpay - iDeal  "},"502":{i:0.000479595572654719,u:"../industry_partners/payment/klarna/klarna.htm",a:" Partner Information Klarna Invoice The option to pay after delivery makes buying quicker and easier for customers. With Klarna’s Pay Later, shoppers do not need to fill out lengthy personal details or enter card numbers at the online point of sale. The transaction can be completed with only name, ...",t:"Payment Integration  - Klarna"},"503":{i:0.00289656933009326,u:"../industry_partners/payment/payolution/payolution.htm",a:"Payment Integration - Payolution  Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and configuration data then could be obtained from Payolution. There are two types of ...",t:"Payment Integration — Payolution"},"504":{i:0.00285800922353688,u:"../industry_partners/payment/payolution/payolution-configuration.htm",a:" \n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution - Configuration  "},"505":{i:0.00285800922353688,u:"../industry_partners/payment/payolution/payolution-installment.htm",a:" Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution - Installment Payment  "},"506":{i:0.00285800922353688,u:"../industry_partners/payment/payolution/payolution-invoice.htm",a:" Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Integrating Payolution Invoice Payment To integrate invoice payments, two simple steps are needed: setting Payolution invoice payment ...",t:"Payolution - Invoice Payment  "},"507":{i:0.00285800922353688,u:"../industry_partners/payment/payolution/payolution-requests.htm",a:" In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and ...",t:"Payolution - Performing Requests  "},"508":{i:0.00334383437938917,u:"../industry_partners/payment/payolution/payolution-workflow.htm",a:" Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution - Workflow  "},"509":{i:0.000479595572654719,u:"../industry_partners/payment/ratepay/ratepay.htm",a:"Payment Integration - RatePAY  Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of payment:\n\n Invoice ...",t:"Payment Integration - Ratepay"},"510":{i:0.000536396878343207,u:"../industry_partners/payment/ratepay/ratepay-direct-debit.htm",a:"(ELV)  Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct ...",t:"RatePAY - Direct Debit"},"511":{i:0.000434480036418312,u:"../industry_partners/payment/ratepay/ratepay-disable-address-updates.htm",a:" To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"RatePAY - How to Disable Address Updates from the Backend Application"},"512":{i:0.000434480036418312,u:"../industry_partners/payment/ratepay/ratepay-facade.htm",a:"RatePAY - Facade\n",t:"RatePAY - Facade"},"513":{i:0.000536396878343207,u:"../industry_partners/payment/ratepay/ratepay-installment.htm",a:" The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the ...",t:"RatePAY - Installment"},"514":{i:0.000536396878343207,u:"../industry_partners/payment/ratepay/ratepay-invoice.htm",a:" Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"RatePAY - Invoice"},"515":{i:0.000434480036418312,u:"../industry_partners/payment/ratepay/ratepay-payment-workflow.htm",a:" RatePAY - Payment Workflow  Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a ...",t:"RatePAY - Payment Workflow"},"516":{i:0.000536396878343207,u:"../industry_partners/payment/ratepay/ratepay-prepayment.htm",a:" Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"RatePAY - Prepayment"},"517":{i:0.00180233052884204,u:"../industry_partners/payment/ratepay/ratepay-state-machine.htm",a:" Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY - State Machine Commands and Conditions"},"518":{i:0.000434480036418312,u:"../industry_partners/payment/ratepay/ratepay-structure-diag.htm",a:"RatePAY- Core Module Structure Diagram  The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY- Core Module Structure Diagram"},"519":{i:0.000434480036418312,u:"../industry_partners/performance/performance-partners.htm",a:"Choose our partners to boost your performance: Akeneo Akeneo is the next-generation PIM - a PIM that quickly integrates with the existing IT environment through a powerful API, and is a great fit with Spryker\u0027s technologies. Also, Akeneo is uncomplicated, flexible, scalable, easy to use and not ...",t:"Performance Integration Partners"},"520":{i:0.00297667739526798,u:"../industry_partners/performance/akeneo/akeneo.htm",a:" Partner Information Installation To install AkeneoPim add the AkeneoPimMiddlewareConnector run this command in the console: composer require spryker-eco/akeneo-pim-middleware-connector:1.0.0   See also: Join us at Internet World Expo! Configure Akeneo module Integrate Akeneo module\n            \n ...",t:"Product Information Management - Akeneo"},"521":{i:0.00294849911791382,u:"../industry_partners/performance/akeneo/akeneo-milti-select-attributes.htm",a:" The Akeneo attribute pim_catalog_multiselect will be imported as the concatenated string. The following attribute types from Akeneo will be skipped and not imported: pim_assets_collection pim_reference_data_multiselect pim_catalog_price_collection At the project level, you can change ...",t:"Akeneo - Multi-select Attributes"},"522":{i:0.00294849911791382,u:"../industry_partners/performance/akeneo/akeneo-integration.htm",a:" Add Middleware Process console command to ConsoleDependencyProvider in your project: \n\t…\n\tuse SprykerMiddleware\\Zed\\Process\\Communication\\Console\\ProcessConsole;\n\t…\n\tprotected function getConsoleCommands(Container $container)\n\t{\n\t\t$commands = [\n\t\t\t… \n\t\t\tnew ProcessConsole(),\n\t\t];\n\t\t…\n\t\treturn ...",t:"Akeneo - Integration"},"523":{i:0.00294849911791382,u:"../industry_partners/performance/akeneo/akeneo-configuration.htm",a:" Add SprykerMiddleware to your project’s core namespaces: \n\t$config[KernelConstants::CORE_NAMESPACES] = [\n\t\t\u0027SprykerShop\u0027,\n\t\t\u0027SprykerMiddleware\u0027,\n\t\t\u0027SprykerEco\u0027,\n\t\t\u0027Spryker\u0027,\n\t]; To set up the Akeneo initial configuration, use the credentials you received from your PIM: ...",t:"Akeneo - Configuration"},"524":{i:0.000470642411975246,u:"../industry_partners/performance/channelpilot.htm",a:"Performance Monitoring - Channel Pilot  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 5th, 2018",t:"Performance Monitoring - Channel Pilot "},"525":{i:0.000470642411975246,u:"../industry_partners/performance/datavirtuality.htm",a:"Performance Monitoring - Data Virtuality  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Performance Monitoring - Data Virtuality "},"526":{i:0.00297667739526798,u:"../industry_partners/performance/econda/econda.htm",a:"Integrate Econda performance monitoring service into Spryker Legacy Demoshop",t:"Econda Partner Integration | Spryker"},"527":{i:0.00294849911791382,u:"../industry_partners/performance/econda/econda-cross-sell.htm",a:"Econda - Cross Sell  Cross sell is highly customizable and it depends on your setup. Please refer to  Econda offical documentation . All necessary JS files are already integrated into the module, the only thing you need to do is to add your API key inside the econda_crosssell.twig template: \u003cinput ...",t:"Econda - Cross Sell | Spryker"},"528":{i:0.00294849911791382,u:"../industry_partners/performance/econda/econda-export-csvs.htm",a:"Spryker Commerce OS offers ",t:"Econda - Exporting CSVs | Spryker"},"529":{i:0.00294849911791382,u:"../industry_partners/performance/econda/econda-tracking.htm",a:"Add Econda tracking code to your Spryker project.",t:"Econda - Tracking | Spryker"},"530":{i:0.00295687695309792,u:"../industry_partners/performance/factfinder/factfinder.htm",a:"Search Integration - FACT-Finder  Partner Information Prerequisites\n\n\t\t To integrate with FACT-Finder, you will need your FACT-Finder account. If you do not have a FACT-Finder account, please contact  FACT-Finder .\n Installation\n\t\t \n\t\t\tComposer dependency:\n\n\t\t To install Spryker\u0027s FactFinder module, ...",t:"Search Integration - Fact Finder"},"531":{i:0.00292520200714003,u:"../industry_partners/performance/factfinder/search-factfinder-campaigns.htm",a:" Prerequisites \n            The FACT-Finder Campaign Manager module allows you to target the management of search results in order to improve the customer lead process or deliberately highlight products.\n            Campaigns are activated according to the specific criteria and are then returned ...",t:"FACT-Finder - Campaigns  "},"532":{i:0.00292520200714003,u:"../industry_partners/performance/factfinder/search-factfinder-export-csv.htm",a:" Output Folder  Define an output folder where  the CSV files will be generated by adding the following line in your configuration file: \u003c?php\n$config[FactFinderSdkConstants::CSV_DIRECTORY] = APPLICATION_ROOT_DIR . \u0027/path/to/generated/csv/files\u0027; Zed must have Read / Write access to this folder ...",t:"FACT-Finder - Exporting CSVs"},"533":{i:0.00292520200714003,u:"../industry_partners/performance/factfinder/search-factfinder-recommendation.htm",a:" Prerequisites  The FACT-Finder recommendation engine analyzes product and category relationships. The results are rendered in recommendations widget, which can be displayed on product details pages, homepage or in the shopping cart. Usage   To add recommendations widget to product page, insert the ...",t:"FACT-Finder - Recommendation  "},"534":{i:0.00292520200714003,u:"../industry_partners/performance/factfinder/search-factfinder-search.htm",a:" Prerequisites  FACT-Finder suggests error-tolerant on-site search. The online shop’s search function is its most powerful sales tool. FACT-Finder delivers relevant results even when spelling errors and typos occur. Usage By default, you can use the /fact-finder route to see an example catalog page. ...",t:"FACT-Finder - Search  "},"535":{i:0.00292520200714003,u:"../industry_partners/performance/factfinder/search-factfinder-tracking.htm",a:" Prerequisites Tracking information lets the FACT-Finder Search tool automatically learn from the user behavior. The data provided through this interface can be used for a variety of purposes. They include the tracking of events such as users clicking on a detail page, placing a product into the ...",t:"FACT-Finder - Tracking  "},"536":{i:0.00292520200714003,u:"../industry_partners/performance/factfinder/search-factfinder-suggest.htm",a:" Prerequisites  The FACT-Finder Suggest module enables you to provide customers with suggested search terms while they are entering a search term. In this way, users do not necessarily have to enter the entire search term themselves but can choose a suggestion. As the users are presented with ...",t:"FACT-Finder - Suggest  "},"537":{i:0.000470642411975246,u:"../industry_partners/performance/inxmail.htm",a:" Partner Information Installation To install Inxmail run the command in the console: \n\tcomposer require spryker-eco/inxmail:1.0.0\n\t\t\t\t Configuration To set up the Inxmail initial configuration, use the credentials you received from your Inxmail server. Space id, key id and secret you can get from ...",t:"Email Provider - Inxmail"},});