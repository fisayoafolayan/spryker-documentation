define({"912":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_direct_debit/dd-shared-implementation.htm",a:" This procedure will help us to identify the new payment type through some unique constants. We are going to define those constants under the Shared namespace, since they’re needed both by Yves and Zed.\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define ...",t:"Direct Debit Shared Implementation   "},"913":{i:0.000381434048859191,u:"../tutorials/howtos/how_to_implement_direct_debit/dd-test-implementation.htm",a:" When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\n  This is the last step for this tutorial.\n\n All you need to do is to submit a new order from Yves. After that you can control the flow of ...",t:"Testing the Direct Debit Implementation   "},"914":{i:0.000326011910009442,u:"../tutorials/howtos/how_to_implement_invoice_payment/ht-implement-invoice-payment.htm",a:" Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment   "},"915":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_invoice_payment/ht-invoice-payment-fe.htm",a:" Form creation\n In Yves, the starting point is to build a form. Add a new module in Yves Add a Form folder where we will place the implementation for building the form 1. Adding the data provider The first step is to add the data provider, inside the Form/DataProvider/ folder: \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End   "},"916":{i:0.000381434048859191,u:"../tutorials/howtos/how_to_implement_invoice_payment/ht-invoice-payment-checkout.htm",a:" The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from in Yves add the CheckoutDependencyInjector that will inject the invoice form and handler into the Checkout module:\n Click here to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Invoice Payment into Checkout"},"917":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_invoice_payment/ht-invoice-payment-be.htm",a:" Checkout Plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Perform the following procedure: Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout/ folder of the new ...",t:"HowTo - Implement Invoice Payment Back End   "},"918":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_invoice_payment/ht-invoice-payment-fe-be-shared.htm",a:" This procedure will help us to identify the new payment type through some unique constants. We are going to define those constants under the Shared namespace, since they’re needed both by Yves and Zed.\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define ...",t:"HowTo - Implement Invoice Payment - Shared Implementation   "},"919":{i:0.000381434048859191,u:"../tutorials/howtos/how_to_implement_invoice_payment/ht-invoice-payment-test.htm",a:" When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\n  This is the last step for this tutorial.\n\n All you need to do is to submit a new order from Yves. After that you can control the flow of ...",t:"HowTo - Implement Invoice Payment - Test   "},"920":{i:0.000326011910009442,u:"../tutorials/howtos/how_to_implement_prepayment/ht-implement-prepayment.htm",a:" Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment   "},"921":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_prepayment/ht-prepayment-fe.htm",a:" Form creation\n In Yves, the starting point is to build a form. Add a new module in Yves Add a Form folder where we will place the implementation for building the form 1. Adding the data provider The first step is to add the data provider, inside the Form/DataProvider/ folder: \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End   "},"922":{i:0.000381434048859191,u:"../tutorials/howtos/how_to_implement_prepayment/ht-prepayment-checkout.htm",a:" The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout   "},"923":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_prepayment/ht-prepayment-be.htm",a:" To integrate the prepayment method into the checkout, we need to provide implementations for these 2 plugins:\n\n CheckoutPreCondition PaymentSaveOrder Perform the following procedure: Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout/ folder of the new added module.\n\t\t\t ...",t:"HowTo - Implement Prepayment Back End   "},"924":{i:0.000489507260247911,u:"../tutorials/howtos/how_to_implement_prepayment/ht-prepayment-shared.htm",a:" This procedure will help us to identify the new payment type through some unique constants. We are going to define those constants under the Shared namespace, since they’re needed both by Yves and Zed.\n Create the PaymentMethodsConstants interface under the Shared namespace, where you’ll define ...",t:"HowTo - Implement Prepayment Shared   "},"925":{i:0.000381434048859191,u:"../tutorials/howtos/how_to_implement_prepayment/ht-prepayment-test.htm",a:" When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\n  This is the last step for this tutorial.\n\n All you need to do is to submit a new order from Yves. After that you can control the flow of ...",t:"HowTo - Test Prepayment Implementation   "},"926":{i:0.000311311079119002,u:"../tutorials/advanced/advanced-tutorials.htm",a:"Advanced Tutorials Advanced tutorials describe advanced Spryker OS activities. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"advanced_tutorials"},"927":{i:0.000311311079119002,u:"../tutorials/advanced/t-add-button-table.htm",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"928":{i:0.0010361270342955,u:"../tutorials/advanced/t-add-new-bundle.htm",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New Module"},"929":{i:0.000311311079119002,u:"../tutorials/advanced/t-calculator-plugin.htm",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  module. First, there are some data ...",t:"Tutorial - Calculator Plugin"},"930":{i:0.000311311079119002,u:"../tutorials/advanced/t-console-commands.htm",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"931":{i:0.000311311079119002,u:"../tutorials/advanced/t-create-table-view.htm",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new  module . Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p src/Pyz/Zed/HelloWorld/Persistence/\ntouch ...",t:"Tutorial - Creating a Table View"},"932":{i:0.000311311079119002,u:"../tutorials/advanced/t-customer-import.htm",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data File In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"933":{i:0.000311311079119002,u:"../tutorials/advanced/t-database-transactions.htm",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"934":{i:0.000311311079119002,u:"../tutorials/advanced/t-extend-db-schema.htm",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"935":{i:0.000311311079119002,u:"../tutorials/advanced/t-extend-spryker.htm",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker Commerce OS. The project consists of two parts : Spryker Core and Project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"936":{i:0.000311311079119002,u:"../tutorials/advanced/t-internationalization.htm",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"937":{i:0.00207533934060626,u:"../tutorials/advanced/t-widgets-widget-plugins.htm",a:"Depending on your version of spryker/kernel module, learn how to implement widgets or widget plugins.",t:"Tutorial - Implement Widgets and Widget Plugins"},"938":{i:0.000311311079119002,u:"../tutorials/advanced/t-new-relic-monitoring.htm",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"939":{i:0.000771512078267587,u:"../tutorials/advanced/t-transfer-data-yves-zed.htm",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"940":{i:0.000311311079119002,u:"../tutorials/advanced/t-twig-extensions.htm",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"941":{i:0.000311311079119002,u:"../tutorials/advanced/t-using-translations.htm",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"942":{i:0.000311311079119002,u:"../tutorials/advanced/t-working-filter-facets.htm",a:" A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets "},"943":{i:0.00383936760209352,u:"../tutorials/advanced/t-working-forms.htm",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"944":{i:0.00207533934060626,u:"../tutorials/advanced/t-working-tables.htm",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"945":{i:0.000311311079119002,u:"../tutorials/advanced/t-yves-bootstrap.htm",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"946":{i:0.00756014758016295,u:"../capabilities/payment/refund/refund-2-0.htm",a:" The latest version of this module can be found here  Refund     The Refund module manages the retours refund process. Overview Using  Refund  Extending  Refund  Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates ...",t:"Refund 2.0    "},"947":{i:0.00273369362896847,u:"../feature_integration_guides/shopping_lists_+_product_options_-_outdated/shopping-lists-product-options-feature-integration-2018-11-outdated.htm",a:" This is an old version of the integration guide. The latest version can be found  here . Install Feature Core Prerequisites To start feature integration, overview ad install the necessary features. 1) Install the Required Modules by Using Composer Run the following command to install the required ...",t:"Shopping Lists Product Options Feature Integration "},"948":{i:0.000612311023114213,u:"../feature_integration_guides/glue_api/product_api_feature_integration/product-api-feature-integration-201812.htm",a:"This guide will navigate you through the process of installing and configuring the Product API feature in Spryker OS.",t:"Product API Feature Integration | Spryker"},"949":{i:0.000367096972803564,u:"../capabilities/development/zed_api/zed-api-resources.htm",a:" Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources    "},"950":{i:0.00151813495253017,u:"../administration_interface_guide/sales/orders-2018_11.htm",a:"This tutorial provides step-by-step instructions for shop owners on how to manage, view all orders created by your customers, as well as create order claims.",t:"Orders v.2018_11 | Spryker"},"951":{i:0.00302839398320892,u:"../capabilities/product_management/product_options/product-option-module-2.htm",a:"This module manages the product options. The product options are product additions that can be sold with the actual product. ",t:"Product Option Module | Spryker"},"952":{i:0.00216791504624066,u:"../capabilities/cms/cms_block/cms-block-multistore.htm",a:" MS Multi-store Overview The multi-store CMS block feature enables you to manage CMS blocks display per stores through a store toggle element on CMS Block management pages in the Administration Interface. By default CMS Blocks are available in all stores. This feature provides additional ...",t:"Multi-store CMS Block   "},"953":{i:0.000364234070324584,u:"../capabilities/product_management/product/product-domain-model.htm",a:" The following domain model shows abstract product and concrete product. One abstract product has at least one up to n different products. A product belongs exactly to one abstract product. Both abstract and concrete product can have 0 to n product attributes. Remember a product attribute table ...",t:"Product Domain Model    "},"954":{i:0.000967223008200365,u:"../capabilities/search_and_filter/configure-search-features.htm",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting. ",t:"Configure Search Features  | Spryker"},"955":{i:0.0016092580915715,u:"../capabilities/company_account/business_on_behalf/business-on-behalf-feature-overview.htm",a:" The latest version of this feature can be found at  Business On Behalf Feature Overview  Business unit includes a number of company users that have certain permissions within the business unit. For more information about business units, see  Business Unit Management . This feature allows having ...",t:"Business on Behalf Feature Overview "},"956":{i:0.000694513393347183,u:"../feature_integration_guides/glue_api/category-api-feature-integration.htm",a:"This guide will navigate you through the process of installing and configuring the Category API feature in Spryker OS.",t:"Category API Feature Integration"},"957":{i:0.000575926035146914,u:"../feature_integration_guides/glue_api/store_api/store-api-feature-integration.htm",a:"This guide will navigate through the process of installing and configuring of the Store API feature used in Spryker OS.",t:"Store API Feature Integration | Spryker"},"958":{i:0.00285241375658484,u:"../capabilities/tax/tax-2-0.htm",a:"Spryker allows to define different tax sets that include one to many different tax rates.\r\n",t:"Tax Version 2.0 | Spryker"},"959":{i:0.00207533934060626,u:"../capabilities/order_management/step_engine/step-engine-breadcrumb.htm",a:" To set up breadcrumb navigation for a step collection, first you’ll need to mark which steps you would like to have in your breadcrumb. To mark a step available for breadcrumb just implement \\Spryker\\Yves\\StepEngine\\Dependency\\Step\\StepWithBreadcrumbInterface in all the necessary steps. The ...",t:"Breadcrumb Navigation - Step Engine    "},"960":{i:0.00347976365705338,u:"../capabilities/checkout/multi-step_checkout/checkout-steps.htm",a:"This topic provides information about all checkout steps available for the customers.",t:"Checkout Steps | Spryker"},"961":{i:0.00144044970307809,u:"../industry_partners/payment/arvato/v1_0/arvato-risk-check-1-0.htm",a:" \n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Arvato 1.0 - Risk Check"},"962":{i:0.0024253505282004,u:"../capabilities/order_management/state_machine/state-machine-implementing-plugin.htm",a:"To start using state machine, create a new plugin by implementing the StateMachineHandlerInterface. You will find the interface methods to implement.",t:"Implementing the Plugin - State Machine | Spryker"},"963":{i:0.0024253505282004,u:"../capabilities/order_management/state_machine/state-machine-zed-presentation.htm",a:"To add manual trigger button or history for items, add some implementation. State machine provides methods for triggering events and retrieving history.",t:"Updating Presentation in Zed - State Machine | Spryker"},"964":{i:0.000575926035146914,u:"../capabilities/product_management/product_group/product-group-under-the-hood.htm",a:" Database Schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Product Group - Under The Hood    "},"965":{i:0.000328151637409753,u:"../capabilities/development/logger.htm",a:" Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger    "},"966":{i:0.000596934267804517,u:"../capabilities/product_management/product_options/product-options.htm",a:"Product options can be used to create product additions that can be sold with the actual product. ",t:"Product Options | Spryker"},"967":{i:0.000575926035146914,u:"../feature_integration_guides/glue_api/product_tax_sets/product-tax-sets-api-feature-integration.htm",a:"This guide will navigate you through the process of installing and configuring the Product Tax Sets API feature in Spryker OS.",t:"Product Tax Sets API Feature Integration | Spryker"},"968":{i:0.00207533934060626,u:"../feature_integration_guides/product_label/product-label-feature-integration-1-0.htm",a:"The Product Label feature allows highlighting specific products in your online shop. The guide describes how to integrate the feature in the project.",t:"Product Label Feature Integration | Spryker"},"969":{i:0.000408558957267583,u:"../capabilities/search_and_filter/search-multi-currency.htm",a:" MC Multi-currency \n            If you don\u0027t have the multi-currency feature in you current project yet and want to migrate, you have to follow certain steps to migrate your system.\n\n            First  migrate Price  and  modules related to multi-currency  before proceeding with the search for ...",t:"Multi-Currency - Search  "},"970":{i:0.0024253505282004,u:"../capabilities/order_management/state_machine/state-machine-cronjob.htm",a:"This topic provides and overview of thre console commands dedicated for the state machine.",t:"Cron Jobs - State Machine | Spryker"},"971":{i:0.000328151637409753,u:"../capabilities/development/installer.htm",a:" ML Multi-language MS Multi-store MC Multi-currency The Installer module is responsible of managing the installment process of required database data  in any environment. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: ...",t:"Installer    "},"972":{i:0.00207533934060626,u:"../feature_integration_guides/shared_carts/shared-carts-feature-integration-201811.htm",a:"The Shared Carts Feature allows sharing shopping carts within an entire business unit. The guide describes how to integrate the feature into your project. ",t:"Shared Carts Feature Integration | Spryker"},"973":{i:0.000575926035146914,u:"../feature_integration_guides/glue_api/product_labels_api_feature_integration/product-labels-api-feature-integration.htm",a:"This guide will navigate you through the process of installing and configuring the Product Labels API feature in Spryker OS.",t:"Product Labels API Feature Integration | Spryker"},"974":{i:0.00300420371548402,u:"../capabilities/order_management/reclamations/reclamations-feature-overview.htm",a:"With the reclamations in place, you can do three things: create a new connected order, return money paid for the order, or close the reclamation.",t:"Reclamations Feature Overview | Spryker"},"975":{i:0.00207533934060626,u:"../capabilities/order_management/step_engine/step-engine-workflow.htm",a:" When you need to define a multi-step process using the StepEngine feature, you need to implement the following interfaces: StepInterface - here you implement the logic that needs to get executed when the defined step takes place SubFormInterface - defines the name of the form and the pathProperty ...",t:"Step Engine Workflow    "},"976":{i:0.000710538973619996,u:"../capabilities/search_and_filter/search-4-0.htm",a:" The latest version of this module can be found in  Search      section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant ...",t:"Search 4.0"},"977":{i:0.000399516064461639,u:"../capabilities/product_management/product_reviews/product-review-filter-and-sort.htm",a:" Prerequisites \n                Configure your product collector query which provides the product data for your product page map and add the required average rating value.\n             \n                Amend product page map to make it possible to filter and sort by rating value. Normalize the ...",t:"Filter \u0026 Sort by Average Rating - Product Reviews  "},"978":{i:0.00295735347134989,u:"../feature_integration_guides/glue_api/customer-api-feature-integration.htm",a:"This guide will navigate through the process of installing and configuring of the Customer API feature used in Spryker OS.",t:"Customer API Feature Integration"},"979":{i:0.000328151637409753,u:"../capabilities/development/zed-request.htm",a:" This module is used to handle requests from Yves to Zed and the responses from Zed. Internally it makes use of the well known  Guzzle  library. HandlerStackContainer Guzzle provides a way to add a so called middleware. It makes use of a handler stack where you can push a middleware to. For more ...",t:"Zed Request  "},"980":{i:0.00259871690604172,u:"../capabilities/order_management/sales/sales-5-0.htm",a:" The latest version of this module can be found here  Sales     Getting Totals for Order Spryker does not store order grand total or subtotal amounts; all amounts are stored before calculation, order items store single item gross amounts, discounts store single item discount amount. To get the ...",t:"Sales 5.0    "},"981":{i:0.00193806081278759,u:"../capabilities/development/collector/collector-sched-collector-jobs.htm",a:" The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs "},"982":{i:0.000617931720089623,u:"../capabilities/product_management/product_options/product-options-1.htm",a:"\n\t\t\t ML Multi-language MS Multi-store MC Multi-currency \n            Product options allow configuring a product further. You can define option types and each option type can have 1 to n option values.\n            Each option value has an associated price.\n             Example \n                    ...",t:"Product Options - Version 1 \n\t\t\t  "},"983":{i:0.000694513393347183,u:"../feature_integration_guides/glue_api/product_price_api/product-price-api-feature-integration.htm",a:"This guide will navigate you through the process of installing and configuring the Product Price API feature in Spryker OS.",t:"Product Price API Feature Integration | Spryker"},"984":{i:0.00248717492406228,u:"../capabilities/development/collector/collector-development.htm",a:"The Collector module provides mechanisms to manage data consumed by front-end application. This article covers steps required to populate the data stores.",t:"Development - Collector | Spryker"},"985":{i:0.00115851351860882,u:"../industry_partners/payment/arvato/v1_0/arvato-1-0.htm",a:" The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato 1.0   "},"986":{i:0.000443618557132958,u:"../feature_integration_guides/glue_api/alternative_products_api_feature_integration/alternative-products-api-feature-integration-201810.htm",a:"This guide will navigate you through the process of installing and configuring the Alternative Products API feature in Spryker OS.",t:"Alternative Products API Feature Integration | Spryker"},});