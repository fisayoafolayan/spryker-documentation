define({"594":{i:0.000500115933561678,u:"../content/tutorials/introduction/hello-world.htm",a:" Challenge Description Build a HelloWorld  module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker Code Generator console ...",t:"Tutorial - Hello World "},"595":{i:0.000500115933561678,u:"../content/tutorials/introduction/oms-state-machine.htm",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"596":{i:0.000500115933561678,u:"../content/tutorials/introduction/setup-hello-world-queue.htm",a:"This Tutorial demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"Tutorial - Set Up a \"Hello World\" Queue"},"597":{i:0.00181264720586755,u:"../content/tutorials/introduction/handling-data-publish-and-synchronization.htm",a:"Tutorial - Handling Data - Publish and Synchronization  Challenge Description Publish and Synchronization (P\u0026S) allows exporting data from Spryker backend (Zed) to external endpoints (by default, Redis and Elasticsearch). The endpoints are usually consumed by frontend applications (including Yves). ...",t:"Handling Data - Publish and Synchronization"},"598":{i:0.000500115933561678,u:"../content/tutorials/introduction/stores.htm",a:"Challenge Description Override a Zed core module on project level, and then override it on store level. You can also repeat the same challenge for a Yvesmodule Challenge Solving Highlights Project Level Let’s first override on the project level. Add an IndexController::indexAction() to ...",t:"Tutorial - Stores"},"599":{i:0.000500115933561678,u:"../content/tutorials/howtos/how-tos.htm",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"600":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-case-sensitive-file-system-mac.htm",a:"By default Mac OS uses a case-insensitive file system to support compatibility to applications (e.g. Photoshop) provided for the operating system. The file-system itself is capable of working in a case-sensitive mode. There are a number of options on how to change case sensitivity: Re-partition the ...",t:"HowTo - Handling Case Sensitive File-System on Mac OS"},"601":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-data-import.htm",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"602":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-extend-inuse-core.htm",a:"This topic describes how to extend a core module that is used by another core module.\n\n Extra consideration must be taken when extending core modules that are already in use by another module. In the following example we will extend the Cart  -\u003e Calculation modules.\n\n Step 1: Modify the Interface ...",t:"HowTo - Extend a Core Module That is Used by Another"},"603":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-force-https.htm",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"604":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-mvp-project-structuring.htm",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"605":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-product-data-import-frontend.htm",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"606":{i:0.000500115933561678,u:"../content/tutorials/howtos/ht-setup-spryker-with-mysql.htm",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"607":{i:0.000500115933561678,u:"../content/tutorials/advanced/advanced-tutorials.htm",a:"Advanced Tutorials Advanced tutorials describe advanced Spryker OS activities. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"advanced_tutorials"},"608":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-add-button-table.htm",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"609":{i:0.00129486950706692,u:"../content/tutorials/advanced/t-add-new-bundle.htm",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New Module"},"610":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-calculator-plugin.htm",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  module. First, there are some data ...",t:"Tutorial - Calculator Plugin"},"611":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-console-commands.htm",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"612":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-create-table-view.htm",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new  module . Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p src/Pyz/Zed/HelloWorld/Persistence/\ntouch ...",t:"Tutorial - Creating a Table View"},"613":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-customer-import.htm",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data File In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"614":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-database-transactions.htm",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"615":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-extend-db-schema.htm",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"616":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-extend-spryker.htm",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker Commerce OS. The project consists of two parts : Spryker Core and Project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"617":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-internationalization.htm",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"618":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-new-relic-monitoring.htm",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"619":{i:0.000869769512857047,u:"../content/tutorials/advanced/t-transfer-data-yves-zed.htm",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"620":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-twig-extensions.htm",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"621":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-using-translations.htm",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"622":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-working-filter-facets.htm",a:" A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets "},"623":{i:0.00333386056749856,u:"../content/tutorials/advanced/t-working-forms.htm",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"624":{i:0.00333386056749856,u:"../content/tutorials/advanced/t-working-tables.htm",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"625":{i:0.000500115933561678,u:"../content/tutorials/advanced/t-yves-bootstrap.htm",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"626":{i:0.00497420903298671,u:"../content/capabilities/tax/mg-tax.htm",a:" Upgrading from Version 4.* to Version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax  "},"627":{i:0.0015377257504462,u:"../content/capabilities/shipment/shipment-methods-plugins.htm",a:" The main concerns regarding shipping services are : availability : is the shipping method available to deliver the order? price : how is the delivery price calculated ? delivery time : when will the order be delivered ? For each of these concerns, an optional plugin is linked to each shipping ...",t:"Shipment Methods Plugins  "},"628":{i:0.00179911449373944,u:"../content/capabilities/cms/cms_widget/enabling-cms-widget.htm",a:" \n\t\t\tCMS content widgets is a CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update composer.json ...",t:"Enabling the Content Widget  "},"629":{i:0.00228265637070172,u:"../content/capabilities/order_management/sales/mg-sales.htm",a:" Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multi-currency support, this release added two new fields to spy_sales table to persist \"currency\" and \"store\". Also Order saver now stores currency and store where order is placed.\n\n            Run the ...",t:"Migration Guide - Sales    "},"630":{i:0.00301058739801289,u:"../content/capabilities/inventory_management/availability.htm",a:" For most of the e-commerce platforms stock does not reflect real availability of products, since stock is just the physical number of products in your warehouse which does not take reserved products into account. In contrast to stock, availability considers not just number of products in the ...",t:"Availability    "},"631":{i:0.00225757084639022,u:"../content/capabilities/search_and_filter/configure-search-features.htm",a:" In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features  "},"632":{i:0.00440769637630517,u:"../content/capabilities/order_management/state_machine/state-machine-persistence.htm",a:" To persist the state of the item and make the connection with the state machine, you need to store related data into the database. For example, you can create two fields (idStateMachineState(int) and idStateMachineProcess(int)) and store their id’s when itemStateUpdated is being triggered.   See ...",t:"Persistence - State Machine    "},"633":{i:0.0012307541119167,u:"../content/capabilities/promotions_and_discounts/discount-calculator-plugin.htm",a:" Once the discountable items are collected, there are 2 ways to calculate the discounted value. Depending on the calculator_plugin linked to the discount, we identify: PLUGIN_CALCULATOR_FIXED - fixed amount discount ( e.g. 10€ off) the currency in which the discount is calculated is the currency ...",t:"Discount Calculator Plugin    "},"634":{i:0.00083818719850518,u:"../content/capabilities/search_and_filter/search-configure-elasticsearch.htm",a:" Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch    "},"635":{i:0.00132391878816427,u:"../content/capabilities/navigation/t-add-navigation-zed.htm",a:" This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{moduleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed  "},"636":{i:0.00315051931445362,u:"../content/capabilities/development/mg-availability.htm",a:" Upgrading from Version 5.* to Version 6.* \n         In Availability module version 6 we have added support for multi-store. Administrtion Interface has undergone some changes to allow selecting stores and update database tables to store relations to store. To upgrade, first you need to run database ...",t:"Migration Guide - Availability  "},"637":{i:0.000616257512760378,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-checkout.htm",a:" The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout   "},"638":{i:0.00947457478568072,u:"../content/capabilities/payment/refund/refund-2-0.htm",a:" The latest version of this module can be found here  Refund     The Refund module manages the retours refund process. Overview Using  Refund  Extending  Refund  Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates ...",t:"Refund 2.0    "},"639":{i:0.00122786972645405,u:"../content/capabilities/cart/cart-functionality.htm",a:" Our Cart consists of a few components in Yves and Zed. The Yves components  create the cart requests and persist the cart into the session. The Zed components  persist the data into the database and expand the items with data obtained from plugins. Cart operations are invoked in CartClient, which ...",t:"Cart Functionality  "},"640":{i:0.00355323467194997,u:"../content/capabilities/development/queue/queue-workers.htm",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"641":{i:0.00163436122625109,u:"../content/capabilities/cms/cms_block/category-block.htm",a:"Category Block  MS Multi-store ,  ML Multi-language Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  ...",t:"CMS Block Category Connector"},"642":{i:0.001736601553417,u:"../content/capabilities/development/mg-collector.htm",a:" Upgrading from Version 5.* to Version 6.* The general concept of collectors, and collector queries are enhanced to support multi-store. The following classes were altered to support the multi-store concept: AbstractCollector AbstractDatabaseCollector AbstractPdoCollector AbstractPropelCollector ...",t:"Migration Guide - Collector   "},"643":{i:0.000590311933839798,u:"../content/capabilities/development/zed_api/zed-api-crud-function.htm",a:" Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition Filtering\n For the ...",t:"CRUD Functionality - Zed API    "},"644":{i:0.000924127766166612,u:"../content/capabilities/cms/cms_page/cms-extension-points.htm",a:" \nThe CMS module provides an extension point for post activation and deactivation of CMS pages. The plugin interface set for this extension point is as follows:\n \nnamespace Spryker\\Zed\\Cms\\Communication\\Plugin;\n\nuse Generated\\Shared\\Transfer\\CmsPageTransfer;\n\ninterface ...",t:"CMS Extension Points   "},"645":{i:0.00615854300862572,u:"../content/capabilities/cms/cms_block/mg-cms-block-gui.htm",a:" Upgrading from Version 1.* to Version 2.* This version adds support to manage CMS Block-store relation through the dedicated CMS Block Administration Intrerface. Installl/update spryker/cms-block to at least Version 2.0.0. You can find additional guide to migration  here . Upgrade ...",t:"Migration Guide - CMS Block GUI"},"646":{i:0.000530562867851623,u:"../content/capabilities/development/zed_api/zed-api.htm",a:" The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)    "},"647":{i:0.000590311933839798,u:"../content/capabilities/development/zed_api/zed-api-processor-stack.htm",a:" Request and Pre Processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API    "},"648":{i:0.00231704866926535,u:"../content/capabilities/internationalization/mg-currency.htm",a:" Upgrading from Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency    "},"649":{i:0.00116282250905387,u:"../content/capabilities/promotions_and_discounts/discount-applying.htm",a:" There are two ways of applying a discount to an order : for cart rule discounts : these discounts are contained in the cart and are calculated automatically for voucher code discounts : these discounts must be added by the customer and they are calculated once they are entered Cart Rule Discounts ...",t:"Applying a Discount    "},"650":{i:0.000616257512760378,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-shared-implementation.htm",a:" \nAs you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define these constants.\n ...",t:"Direct Debit Shared Implementation   "},"651":{i:0.00132391878816427,u:"../content/capabilities/navigation/module-navigation.htm",a:" Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation Module  "},"652":{i:0.00246962058959697,u:"../content/capabilities/internationalization/currency.htm",a:" \nThe Currency module provides an easy way to retrieve information about a currency given as an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by its ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency    "},"653":{i:0.000590311933839798,u:"../content/capabilities/development/zed_api/zed-api-resources.htm",a:" Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources    "},"654":{i:0.00869985362332167,u:"../content/capabilities/order_management/sales/sales.htm",a:" The Sales module provides the order management functionality. The functionality is obtained through the ZED UI that renders orders with orders details and the Client API to get customer orders. Getting Totals for Order To get the Order with totals, the facade method ...",t:"Sales    "},"655":{i:0.000590311933839798,u:"../content/capabilities/development/zed_api/zed-api-project-implementation.htm",a:" For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API    "},"656":{i:0.00355323467194997,u:"../content/capabilities/development/queue/queue-engine.htm",a:"The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI for Demoshop: Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg Click ...",t:"Default Queue Engine"},"657":{i:0.0021068142019894,u:"../content/capabilities/search_and_filter/search-4-0.htm",a:" The latest version of this module can be found in  Search      section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant ...",t:"Search 4.0"},"658":{i:0.00136566783789285,u:"../content/capabilities/order_management/url-handling-new-entity.htm",a:" The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs "},"659":{i:0.000616257512760378,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-checkout.htm",a:" The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the invoice form and handler into the Checkout module:\n Click here to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Invoice Payment into Checkout"},"660":{i:0.00355323467194997,u:"../content/capabilities/development/queue/queue-benefits.htm",a:" The following is a list of the Queus System’s benefits:\n \nAsynchronous: Message processing can be offloaded to different times to prevent bottlenecks and run when necessary.\n Decoupling: The queue provides separate layers for data and processing\n Scalability: Adding more processes for receiving and ...",t:"Queue Benefits   "},"661":{i:0.00464885313089136,u:"../content/capabilities/development/collector/collector-types.htm",a:" Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types "},});