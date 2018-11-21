define({"592":{i:0.000451929828383488,u:"../content/feature_integration_guides/product-store-relation-feature-integration.htm",a:"General Information \n            By default abstract products are available in all stores. This feature provides additional configuration when:\n             you have multiple stores, and you want to manage the appearance of abstract products per store. Prerequisites To prepare your project to work ...",t:"Feature Integration - Multi-Store Products"},"593":{i:0.000579979868295677,u:"../content/updating_the_legacy_demoshop_with_scos/about-updating.htm",a:"If you use Spryker Legacy Demoshop, you can enhance it with specific components of SCOS or make the Legacy Demoshop compatible with them. For example, you can  configure the Legacy Demoshop to use spryker-shop modules, Atomic Design and Publish \u0026 Synchronization ,  set up ShopUiCompatibility module ...",t:"Updating the Legacy Demoshop with SCOS"},"594":{i:0.00383309240137132,u:"../content/updating_the_legacy_demoshop_with_scos/demoshop-to-atomic-frontend.htm",a:" The following guide will help migrating an existing Demoshop project to Atomic Frontend. Update assets/Yves/default/app/index.js Append the following lines to the end of the file: var app = require(\u0027ShopUi/app\u0027);\napp.bootstrap(); Update assets/Yves/default/vendor.entry.js Lines to remove: // es6 ...",t:"Migrating from the Legacy Demoshop to Atomic Frontend "},"595":{i:0.00383309240137132,u:"../content/updating_the_legacy_demoshop_with_scos/demoshop-with-shop-app-atomic-design-and-ps.htm",a:"Infrastructure Preparation This has to be done only once for Demoshop (not for every feature.)   Shop App These steps are required to install features which use the new  shop pages and widgets  i.e. the shop app.   Add infrastructure modules To use the spryker-shop modules, you need to add new ...",t:"Making Demoshop Compatible with Shop App, Atomic Design, P\u0026S"},"596":{i:0.00383309240137132,u:"../content/updating_the_legacy_demoshop_with_scos/setting-up-shopuicompatibility.htm",a:"The ShopUiCompatibility module is the main module necessary for the  Atomic Frontend . This module is provided in SCOS by default. The following guide describes how to set up the ShopUICompatibility in the Legacy Demoshop.   To install ShopUiCompatibility module in the Legacy Demoshop, follow the ...",t:"Setting up ShopUiCompatibility Module in the Legacy Demoshop"},"597":{i:0.00383309240137132,u:"../content/updating_the_legacy_demoshop_with_scos/twig-compatibility-mode-demoshop-vs-suite.htm",a:"In the SCOS, all variables available in the Twig templates can be accessed from the _view variable. In the Demoshop we used a different technique and passed the Twig variables to the global Twig namespace directly. The following code examples will help to understand the difference. Demoshop ...",t:"Twig Compatibility: Legacy Demoshop vs SCOS"},"598":{i:0.000451929828383488,u:"../content/tutorials/about-tutorials.htm",a:" Welcome to Spryker Tutorials, in this section of the documentation you will find instructions on how to perform all types of tasks with Spryker Commerce OS If you are a PHP developer who is new to Spryker, visit our free online Bootcamp Training for a crash introduction course to Spryker. Check out ...",t:"About Tutorials "},"599":{i:0.000451929828383488,u:"../content/tutorials/introduction/introduction-tutorials.htm",a:"Introduction Tutorials Introduction tutorials describe how to perform basic tasks with the Spryker Commerce OS.",t:"Introduction Tutorials"},"600":{i:0.000451929828383488,u:"../content/tutorials/introduction/architectural-walkthrough.htm",a:"This is an architecture walkthrough as a coding exercise. Challenge Description Build a HelloSpryker module in Zed that will render the Hello Spryker! string, in reverse order, on the screen. The string must be retrieved from the config. Build a HelloSpryker module in Yves that will render the Hello ...",t:"Tutorial - Architectural Walkthrough"},"601":{i:0.000451929828383488,u:"../content/tutorials/introduction/boosting-cart-based-search.htm",a:"Challenge Description Based on the colors of the products that are in the cart of the user, the catalog should first display products that have the same color. Let’s say for example that there’s a red product in the cart, then the top results in the catalog should also contain red products. ...",t:"Tutorial - Boosting Cart Based Search"},"602":{i:0.000451929828383488,u:"../content/tutorials/introduction/checkout.htm",a:"Challenge Description Integrate an additional step into the checkout process; a Voucher step where a customer enters a voucher code and gets a discount. Add the Voucher step after the Payment one. To explore further before starting, you can read about the  Checkout  and the  StepEngine  modules. ...",t:"Tutorial - Checkout"},"603":{i:0.000451929828383488,u:"../content/tutorials/introduction/dynamic-content-page.htm",a:"Challenge Description Create a CMS page that displays some (marketing) text and a list of personalized products as offers. Challenge Solving Highlights Static page For creating a CMS page, follow these steps: Create a CMS template called personalized_products.twig under ...",t:"Tutorial - Dynamic Content Page"},"604":{i:0.000451929828383488,u:"../content/tutorials/introduction/hello-world.htm",a:" Challenge Description Build a HelloWorld  module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker Code Generator console ...",t:"Tutorial - Hello World "},"605":{i:0.000451929828383488,u:"../content/tutorials/introduction/oms-state-machine.htm",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"606":{i:0.000451929828383488,u:"../content/tutorials/introduction/setup-hello-world-queue.htm",a:"This Tutorial demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"Tutorial - Set Up a \"Hello World\" Queue"},"607":{i:0.00163846819714648,u:"../content/tutorials/introduction/handling-data-publish-and-synchronization.htm",a:"Tutorial - Handling Data - Publish and Synchronization  Challenge Description Publish and Synchronization (P\u0026S) allows exporting data from Spryker backend (Zed) to external endpoints (by default, Redis and Elasticsearch). The endpoints are usually consumed by frontend applications (including Yves). ...",t:"Handling Data - Publish and Synchronization"},"608":{i:0.000451929828383488,u:"../content/tutorials/introduction/stores.htm",a:"Challenge Description Override a Zed core module on project level, and then override it on store level. You can also repeat the same challenge for a Yvesmodule Challenge Solving Highlights Project Level Let’s first override on the project level. Add an IndexController::indexAction() to ...",t:"Tutorial - Stores"},"609":{i:0.00054796735831763,u:"../content/tutorials/introduction/customizefrontend/t-customize-spryker-frontend.htm",a:"Spryker frontend user interface can be customized and extended to meet the needs of your business. You can change the layout, styles and behavior of existing components, as well as create components on your own. There are 3 aspects of Spryker user interface that can be extended: views, templates and ...",t:"Tutorial - Customize Spryker Frontend"},"610":{i:0.00122303872279459,u:"../content/tutorials/introduction/customizefrontend/t-create-component.htm",a:"  As Spryker Shop implements the  Component Model , adding new functionality to it usually means implementing a new component. In this document, we shall review creation of a new component on the example of a simple block that displays the count of DOM elements of a certain type. To implement it: 1. ...",t:"Tutorial - Frontend - Create a Component"},"611":{i:0.000703228909534797,u:"../content/tutorials/introduction/customizefrontend/t-override-component.htm",a:"  If the implementation of any of the components shipped with Spryker frontend does not suite your needs, you can override it with a component of your own. The following article shows how to override a molecule called simple-carousel. By default, the component is used, for example, to display ...",t:"Tutorial - Frontend - Override a Component"},"612":{i:0.00122303872279459,u:"../content/tutorials/introduction/customizefrontend/t-extend-component.htm",a:"  With the idea of  atomic design  implemented in Spryker frontend, you have the possibility to develop each functional element of user interface in a self-contained, isolated container called a component. The frontend design allows you not only to  create components  on your own, but also  replace  ...",t:"Tutorial - Frontend - Extend a Component"},"613":{i:0.000451929828383488,u:"../content/tutorials/howtos/how-tos.htm",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"614":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-case-sensitive-file-system-mac.htm",a:"By default Mac OS uses a case-insensitive file system to support compatibility to applications (e.g. Photoshop) provided for the operating system. The file-system itself is capable of working in a case-sensitive mode. There are a number of options on how to change case sensitivity: Re-partition the ...",t:"HowTo - Handling Case Sensitive File-System on Mac OS"},"615":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-data-import.htm",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"616":{i:0.0030118111406079,u:"../content/tutorials/howtos/ht-add-new-shipment-method-2.htm",a:" \nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method, without the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method 2.0"},"617":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-extend-inuse-core.htm",a:"This topic describes how to extend a core module that is used by another core module.\n\n Extra consideration must be taken when extending core modules that are already in use by another module. In the following example we will extend the Cart  -\u003e Calculation modules.\n\n Step 1: Modify the Interface ...",t:"HowTo - Extend a Core Module That is Used by Another"},"618":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-force-https.htm",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"619":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-mvp-project-structuring.htm",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"620":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-product-data-import-frontend.htm",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"621":{i:0.000451929828383488,u:"../content/tutorials/howtos/ht-setup-spryker-with-mysql.htm",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"622":{i:0.000451929828383488,u:"../content/tutorials/advanced/advanced-tutorials.htm",a:"Advanced Tutorials Advanced tutorials describe advanced Spryker OS activities. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"advanced_tutorials"},"623":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-add-button-table.htm",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"624":{i:0.00150418707961381,u:"../content/tutorials/advanced/t-add-new-bundle.htm",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New Module"},"625":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-calculator-plugin.htm",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  module. First, there are some data ...",t:"Tutorial - Calculator Plugin"},"626":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-console-commands.htm",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"627":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-create-table-view.htm",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new  module . Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p src/Pyz/Zed/HelloWorld/Persistence/\ntouch ...",t:"Tutorial - Creating a Table View"},"628":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-customer-import.htm",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data File In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"629":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-database-transactions.htm",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"630":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-extend-db-schema.htm",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"631":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-extend-spryker.htm",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker Commerce OS. The project consists of two parts : Spryker Core and Project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"632":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-internationalization.htm",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"633":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-new-relic-monitoring.htm",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"634":{i:0.00112003695987724,u:"../content/tutorials/advanced/t-transfer-data-yves-zed.htm",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"635":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-twig-extensions.htm",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"636":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-using-translations.htm",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"637":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-working-filter-facets.htm",a:" A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets "},"638":{i:0.00557169245283231,u:"../content/tutorials/advanced/t-working-forms.htm",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"639":{i:0.0030118111406079,u:"../content/tutorials/advanced/t-working-tables.htm",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"640":{i:0.000451929828383488,u:"../content/tutorials/advanced/t-yves-bootstrap.htm",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"641":{i:0.00090615827429914,u:"../content/capabilities/mailing_and_notifications/mail.htm",a:" Sending mail is a standard web application task. There are many cases where an action triggers an email to be sent. These actions can be newsletter subscriptions, order placement, refunds, customer account registration, etc. The Mail module helps you to create emails to be sent. To send an email ...",t:"Mail   "},"642":{i:0.00211972380803562,u:"../content/capabilities/search_and_filter/configure-search-features.htm",a:" In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features  "},"643":{i:0.00398140186328698,u:"../content/capabilities/order_management/state_machine/state-machine-persistence.htm",a:" To persist the state of the item and make the connection with the state machine, you need to store related data into the database. For example, you can create two fields (idStateMachineState(int) and idStateMachineProcess(int)) and store their id’s when itemStateUpdated is being triggered.   See ...",t:"Persistence - State Machine    "},"644":{i:0.00115966731216431,u:"../content/capabilities/promotions_and_discounts/discount-calculator-plugin.htm",a:" Once the discountable items are collected, there are 2 ways to calculate the discounted value. Depending on the calculator_plugin linked to the discount, we identify: PLUGIN_CALCULATOR_FIXED - fixed amount discount ( e.g. 10€ off) the currency in which the discount is calculated is the currency ...",t:"Discount Calculator Plugin    "},"645":{i:0.000790924995683821,u:"../content/capabilities/search_and_filter/search-configure-elasticsearch.htm",a:" Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch    "},"646":{i:0.00119590099182994,u:"../content/capabilities/navigation/t-add-navigation-zed.htm",a:" This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{moduleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed  "},"647":{i:0.000493516043444915,u:"../content/industry_partners/payment/payone/v1_0/payone-paypal-express-checkout.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayOne - PayPal Express Checkout Payment"},"648":{i:0.00208842969118786,u:"../content/industry_partners/payment/arvato/v1_0/arvato-risk-check-1-0.htm",a:" \n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Arvato 1.0 - Risk Check"},"649":{i:0.000556866393528923,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-checkout.htm",a:" The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout   "},"650":{i:0.00729794739984164,u:"../content/capabilities/payment/refund/refund-2-0.htm",a:" The latest version of this module can be found here  Refund     The Refund module manages the retours refund process. Overview Using  Refund  Extending  Refund  Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates ...",t:"Refund 2.0    "},"651":{i:0.000949420646322209,u:"../content/capabilities/cart/cart-functionality.htm",a:" Our Cart consists of a few components in Yves and Zed. The Yves components  create the cart requests and persist the cart into the session. The Zed components  persist the data into the database and expand the items with data obtained from plugins. Cart operations are invoked in CartClient, which ...",t:"Cart Functionality  "},"652":{i:0.00303165513596719,u:"../content/capabilities/development/queue/queue-workers.htm",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"653":{i:0.00195953473227843,u:"../content/capabilities/cms/cms_block/category-block.htm",a:"Category Block  MS Multi-store ,  ML Multi-language Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  ...",t:"CMS Block Category Connector"},"654":{i:0.000533435703915999,u:"../content/capabilities/development/zed_api/zed-api-crud-function.htm",a:" Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition Filtering\n For the ...",t:"CRUD Functionality - Zed API    "},"655":{i:0.00134681302273965,u:"../content/capabilities/cms/cms_page/cms-extension-points.htm",a:" \nThe CMS module provides an extension point for post activation and deactivation of CMS pages. The plugin interface set for this extension point is as follows:\n \nnamespace Spryker\\Zed\\Cms\\Communication\\Plugin;\n\nuse Generated\\Shared\\Transfer\\CmsPageTransfer;\n\ninterface ...",t:"CMS Extension Points   "},"656":{i:0.000479433918863724,u:"../content/capabilities/development/zed_api/zed-api.htm",a:" The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)    "},"657":{i:0.000533435703915999,u:"../content/capabilities/development/zed_api/zed-api-processor-stack.htm",a:" Request and Pre Processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API    "},"658":{i:0.00115966731216431,u:"../content/capabilities/promotions_and_discounts/discount-applying.htm",a:" There are two ways of applying a discount to an order : for cart rule discounts : these discounts are contained in the cart and are calculated automatically for voucher code discounts : these discounts must be added by the customer and they are calculated once they are entered Cart Rule Discounts ...",t:"Applying a Discount    "},"659":{i:0.000556866393528923,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-shared-implementation.htm",a:" \nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation   "},});