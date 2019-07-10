define({"677":{i:0.000311311079119002,u:"../module_migration_guides/mg-companyuser.htm",a:"Upgrading from version 1.0.0 to 2.0.0 CompanyUser module version 2.0.0 brings one major change - new is_active column in spy_company_user database table. The main purpose of this field is to store information about company users and make it possible to enable/disable them. Also, CompanyUserTransfer ...",t:"Migration Guide - CompanyUser"},"678":{i:0.000311311079119002,u:"../module_migration_guides/mg-console.htm",a:" Upgrading from Version 3.* to Version 4.* \n            Console version 4 has been prepared for a standalone usage. Now you are able to use Console module\n            even without a DB configuration.\n         \n            Find or create ConsoleDependencyProvider in a project. Make sure it extends ...",t:"Migration Guide - Console  "},"679":{i:0.000311311079119002,u:"../module_migration_guides/mg-customer-reorder-widget.htm",a:"Migration Guide - CustomerReorderWidget Upgrading from version 4.* to 6.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - CustomerReorderWidget | Spryker"},"680":{i:0.000917988657132947,u:"../module_migration_guides/mg-currency.htm",a:" Upgrading from Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency    "},"681":{i:0.000311311079119002,u:"../module_migration_guides/mg-customer.htm",a:"   Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table ...",t:"Migration Guide - Customer  "},"682":{i:0.000443618557132958,u:"../module_migration_guides/mg-discount.htm",a:"Discount Module Migration guide contains instructions on how to migrate the Discoiunt module to major versions in Spryker Commerce OS.",t:"Migration Guide - Discount | Spryker"},"683":{i:0.000311311079119002,u:"../module_migration_guides/mg-discount-promotion.htm",a:"Migration Guide - DiscountPromotion Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - DiscountPromotion | Spryker"},"684":{i:0.000311311079119002,u:"../module_migration_guides/mg-discount-promotion-widget.htm",a:"Migration Guide - DiscountPromotionWidget Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - DiscountPromotionWidget | Spryker"},"685":{i:0.000443618557132958,u:"../module_migration_guides/mg-discount-calculator-connector.htm",a:" Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to the separate repository in spryker/calculation-migration. To learn how to migrate to the new structure see,  Migration Guide - Calculation ...",t:"Migration Guide - DiscountCalculatorConnector  "},"686":{i:0.000311311079119002,u:"../module_migration_guides/mg-discount-sales-aggregator-connector.htm",a:" Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.   See also: Learn how to migrate Discount Learn how to migrate DiscountCalculatorConnector Get a general idea about Discount Learn how to apply a discount ...",t:"Migration Guide - DiscountSalesAggregatorConnector  "},"687":{i:0.000311311079119002,u:"../module_migration_guides/mg-environment-config.htm",a:" The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of the configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration  "},"688":{i:0.000311311079119002,u:"../module_migration_guides/mg-manual-order-entry-gui.htm",a:"Migration Guide - ManualOrderEntryGui Upgrading from version 0.5.* to 0.7.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ManualOrderEntryGui | Spryker"},"689":{i:0.000311311079119002,u:"../module_migration_guides/mg-monitoring.htm",a:"Upgrading from Version 1.* to Version 2.* For BC reasons the initial version of this module had dependencies to spryker/new-relic and the spryker/new-relic-api modules. In this version we removed this hard dependency. If you still want to use NewRelic as monitoring service you can use the ...",t:"Migration Guide - Monitoring"},"690":{i:0.000311311079119002,u:"../module_migration_guides/mg-multi-cart-page.htm",a:"The guide will walk you through the process of migrating the MultiCartPage module to the new version.",t:"Migration Guide - MultiCartPage | Spryker"},"691":{i:0.00381670105943464,u:"../module_migration_guides/mg-multi-currency.htm",a:"Migration Guide - Multi-Currency  Migrating System to Multi-Currency \n          This article provides a whole overview of what needs to be done to have the multi-currency feature running in your Spryker shop. The multi-currency feature affects many Spryker modules so we split it into smaller parts.\n ...",t:"Migration Guide - Multi Currency"},"692":{i:0.00207533934060626,u:"../module_migration_guides/mg-navigation.htm",a:" Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module  "},"693":{i:0.00207533934060626,u:"../module_migration_guides/mg-navigation-gui.htm",a:" Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module  "},"694":{i:0.000311311079119002,u:"../module_migration_guides/mg-offer.htm",a:"Migration Guide - Offer Upgrading from version 0.1.* to 0.3.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - Offer | Spryker"},"695":{i:0.000311311079119002,u:"../module_migration_guides/mg-offer-gui.htm",a:"Migration Guide - OfferGui Upgrading from version 0.1.* to 0.3.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - OfferGui | Spryker"},"696":{i:0.000575926035146914,u:"../module_migration_guides/mg-oms.htm",a:" Upgrading from version 8.* to 10.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 7.* to Version 8.* \n            With the new OMS version, detail lock logging has been ...",t:"Migration Guide - OMS    "},"697":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-packaging-unit-storage.htm",a:"Migration Guide - ProductPackagingUnitStorage Upgrading from version 2.* to 4.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 1.* to 2.* The only one major change of ...",t:"Migration Guide - PackagingUnitStorage | Spryker"},"698":{i:0.000311311079119002,u:"../module_migration_guides/mg-payment.htm",a:" Upgrading from Version 3.* to Version 4.* In the Payment module version 4 we have added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer ...",t:"Migration Guide - Payment    "},"699":{i:0.000311311079119002,u:"../module_migration_guides/mg-persistent-cart.htm",a:"Migration Guide - PersistentCart Upgrading from version 1.* to 3.0.0\n \nThis module release has been created for internal reasons and does not require migration efforts. Please contact us if you have any questions.",t:"Migration Guide - PersistentCart | Spryker"},"700":{i:0.00354113402900775,u:"../module_migration_guides/mg-price.htm",a:"Upgrading from Version 4.* to Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"701":{i:0.000543040886569764,u:"../module_migration_guides/mg-price-cart-connector.htm",a:"Upgrading from version 4.* to 6.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 3.* to Version 4.* \n            In version 4 we have added support for multi-currency. First of ...",t:"Migration Guide - Price Cart Connector"},"702":{i:0.000311311079119002,u:"../module_migration_guides/mg-priceproduct.htm",a:"This topic covers the information related to the migration procedure for PriceProduct module when upgrading from Version 1.* to Version 2.*.",t:"Migration Guide - PriceProduct | Spryker"},"703":{i:0.000311311079119002,u:"../module_migration_guides/mg-price-product-storage.htm",a:"Migration Guide - PriceProductStorage Upgrading from version 2.* to 4.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - PriceProductStorage | Spryker"},"704":{i:0.000311311079119002,u:"../module_migration_guides/mg-price-product-volume.htm",a:"Migration Guide - PriceProductVolume Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - PriceProductVolume | Spryker"},"705":{i:0.000311311079119002,u:"../module_migration_guides/mg-price-product-volume-gui.htm",a:"Migration Guide - PriceProductVolumeGui Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - PriceProductVolumeGui | Spryker"},"706":{i:0.00187282373451469,u:"../module_migration_guides/mg-product.htm",a:"Upgrading from Version 5.* to Version 6.* This version defines connection between abstract products and stores, allowing users to manage abstract product appearance per store. Update/install spryker/collector to at least 6.0.0 version. You can find additional help for feature migration  here . ...",t:"Migration Guide - Product"},"707":{i:0.000832190799669851,u:"../module_migration_guides/mg-product-bundle.htm",a:"Upgrading from version 4.* to 6.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 3.* to Version 4.* \n             In version 4 we have added support for multi-currency. First of ...",t:"Migration Guide - Product Bundle"},"708":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-details-page.htm",a:"Migration Guide - ProductDetailPage Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductDetailPage | Spryker"},"709":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-discount-connector.htm",a:"Migration Guide - ProductDiscountConnector Upgrading from version 3.* to 5.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductDiscountConnector | Spryker"},"710":{i:0.000651622434850273,u:"../module_migration_guides/mg-product-label.htm",a:"Upgrading from Version 1.* to Version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product Label Rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"711":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-label-discount-connector.htm",a:"Migration Guide - ProductLabelDiscountConnector Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductLabelDiscountConnector | Spryker"},"712":{i:0.000832190799669851,u:"../module_migration_guides/mg-product-label-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . \n          We have changed ZED tables to use PriceProductFacade instead of the database join to get price, because that requires ...",t:"Migration Guide - Product Label GUI"},"713":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-list-search.htm",a:"Migration Guide - ProductListSearch Upgrading from Version 1.* to Version 2.* The main goal of ProductListSearch 2.x.x is to add support of Concrete Products search introduced in ProductPageSearch 3.x.x. To complete the migration, follow the steps below: Update spryker/product-page-search ^3.2.0 ...",t:"Migration Guide - ProductListSearch | Spryker"},"714":{i:0.00113983047780586,u:"../module_migration_guides/mg-product-management.htm",a:"Upgrading from version 0.* to 0.18.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 0.9.* to Version 0.10.* The new version provides support to manage \"abstract product-store\" ...",t:"Migration Guide - ProductManagement"},"715":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-measurement-unit.htm",a:"Migration Guide - ProductMeasurementUnit Upgrading from version 2.* to 4.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductMeasurementUnit | Spryker"},"716":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-measurement-unit-widget.htm",a:"Migration Guide - ProductMeasurementUnitWidget Upgrading from version 0.6.* to 0.8.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductMeasurementUnitWidget | Spryker"},"717":{i:0.00132333618052037,u:"../module_migration_guides/mg-product-option.htm",a:"Upgrading from version 6.* to 8.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 5.* to Version 6.* Update spryker/product-option to at least version 6.0.0. Install/Update ...",t:"Migration Guide - Product Option"},"718":{i:0.000917988657132947,u:"../module_migration_guides/mg-product-option-cart-connector.htm",a:"Upgrading from version 5.* to 7.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 4.* to Version 5.* Update spryker/product-option to at least version 6.0.0. You can find ...",t:"Migration Guide - Product Option Cart Connector"},"719":{i:0.000355413571790321,u:"../module_migration_guides/mg-product-option-discount-connector.htm",a:"Upgrading from Version 2.* to Version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product Label Gui  ",t:"Migration Guide - ProductOptionDiscountConnector"},"720":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-option-exporter.htm",a:"Upgrading from version 2.* to version 3.* The ProductOptionExporter  module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate  Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product ...",t:"Migration Guide - ProductOptionExporter"},"721":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-packaging-unit.htm",a:"Migration Guide - ProductPackagingUnit Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductPackagingUnit | Spryker"},"722":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-packaging-unit-widget.htm",a:"Migration Guide - ProductPackagingUnitWidget Upgrading from version 0.2.* to 0.4.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductPackagingUnitWidget | Spryker"},"723":{i:0.000840540991174826,u:"../module_migration_guides/mg-product-page-search.htm",a:"Migration Guide - ProductPageSearch Upgrading from Version 2.* to 3.* ProductPageSearch 3.0.0 got separate search index for Concrete Products. It includes database table and ElasticSearch index. To perform the migration, follow the steps: Run the database migration: vendor/bin/console propel:install ...",t:"Migration guide - ProductPageSearch | Spryker"},"724":{i:0.000773834362194791,u:"../module_migration_guides/mg-product-relation.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . We have changed Zed table to use PriceProductFacade for retrieving product prices. We have also changed ...",t:"Migration Guide - Product Relation"},"725":{i:0.000543040886569764,u:"../module_migration_guides/mg-product-relation-collector.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we added support for multi-currency. \n          First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Relation Collector"},"726":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-search.htm",a:"Upgrading from Version 3.* to Version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"727":{i:0.00067534836458372,u:"../module_migration_guides/mg-product-set-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we have support multi-currency. First of all make sure you  have migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you overwrote ...",t:"Migration Guide - Product Set GUI"},"728":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-validity.htm",a:"Installing Version 1.* The Product Validity module is responsible for (de)activation of products for (or starting from) a certain period of time. Follow the instructions below to have the module up and running in your shop. Database Changes \n            We have added a new  spy_product_validity ...",t:"Migration Guide - Product Validity"},"729":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-quantity.htm",a:"Migration Guide - ProductQuantity Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductQuantity | Spryker"},"730":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-quantity-data-import.htm",a:"Migration Guide - ProductQuantityDataImport Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductQuantityDataImport | Spryker"},"731":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-quantity-storage.htm",a:"Migration Guide - ProductQuantityStorage Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductQuantityStorage | Spryker"},"732":{i:0.000311311079119002,u:"../module_migration_guides/mg-product-search-widget.htm",a:"Migration Guide - ProductSearchWidget Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ProductSearchWidget | Spryker"},"733":{i:0.000311311079119002,u:"../module_migration_guides/mg-quick-order.htm",a:"Migration Guide - QuickOrder Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - QuickOrder | Spryker"},"734":{i:0.000311311079119002,u:"../module_migration_guides/mg-quick-order-page.htm",a:"The guideline provides the steps how to migrate QuickOrder module from version 1.0.0 to version 2.0.0.",t:"Migration Guide - QuickOrderPage  | Spryker"},"735":{i:0.00278242090892015,u:"../module_migration_guides/mg-quote.htm",a:" Upgrading from Version 1.* to Version 2.* The new version of Quote module provides the ability to save customer quote into the database and get it. Quote storage strategy (session, database) can be changed in Spryker\\Shared\\Quote\\QuoteConfig::getStorageStrategy. If you’re migrating the Quote module ...",t:"Migration Guide - Quote  "},"736":{i:0.000311311079119002,u:"../module_migration_guides/mg-rabbitmq.htm",a:" Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module  Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: bindingQueue ...",t:"Migration Guide - RabbitMQ  "},"737":{i:0.000311311079119002,u:"../module_migration_guides/mg-refund.htm",a:" Upgrading from Version 4.* to Version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund    "},"738":{i:0.00618745859522676,u:"../module_migration_guides/mg-sales.htm",a:" Upgrading from version 8.* to 10.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions. Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multi-currency ...",t:"Migration Guide - Sales    "},"739":{i:0.000311311079119002,u:"../module_migration_guides/mg-sales-quantity.htm",a:"Migration Guide - SalesQuantity Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - SalesQuantity"},"740":{i:0.000311311079119002,u:"../module_migration_guides/mg-sales-split.htm",a:"Migration Guide - SalesSplit Upgrading from version 3.* to 5.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - SalesSplit | Spryker"},"741":{i:0.00241178264510813,u:"../module_migration_guides/mg-sales-aggregator.htm",a:" Upgrading from Version 4.* to Version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator    "},"742":{i:0.000311311079119002,u:"../module_migration_guides/mg-search.htm",a:"Upgrading from Version 7.* to Version 8.* \n                    With this version of the Search module we have migrated to Elasticsearch 5.6. Please read the\n                     Elasticsearch\n                    Breaking Changes in 5.0  official documentation to adjust your custom implementation ...",t:"Migration Guide - Search"},"743":{i:0.000311311079119002,u:"../module_migration_guides/mg-session.htm",a:"Upgrading from Version 3.* to Version 4.* The previous version made use of the deprecated spryker/new-relic and the spryker/new-relic-api modules. To be able to use this version you need to install the spryker/monitoring module if you haven\u0027t done already by running: composer require ...",t:"Migration Guide - Session"},"744":{i:0.000311311079119002,u:"../module_migration_guides/mg-setup.htm",a:" Upgrading from Version 3.* to Version 4.* With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n \nThe setup:install command utilizes two new commands for cleaning up ...",t:"Migration Guide - Setup"},"745":{i:0.000543040886569764,u:"../module_migration_guides/mg-shipment.htm",a:"Upgrading from Version 5.* to Version 6.* In version 6, multi-currency prices are introduced for shipment methods, allowing to set up different net and gross price per shipment method for each preconfigured currency. The spy_shipment_method.default_price database column becomes deprecated. Shipment ...",t:"Migration Guide - Shipment"},"746":{i:0.000311311079119002,u:"../module_migration_guides/mg-shipment-discount-connector.htm",a:"Migration Guide - ShipmentDiscountConnector Upgrading from version 1.* to 3.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ShipmentDiscountConnector | Spryker"},"747":{i:0.000311311079119002,u:"../module_migration_guides/mg-shopping-list.htm",a:"Migration Guide - ShoppingList Upgrading from version 2.* to 4.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ShoppingList | Spryker"},"748":{i:0.000311311079119002,u:"../module_migration_guides/mg-shopping-list-page.htm",a:"The guide will walk you through the process of upgrading ShoppingListPage from version 1.0.0 to 2.0.0.",t:"Migration Guide - ShoppingListPage | Spryker"},"749":{i:0.000311311079119002,u:"../module_migration_guides/mg-shopping-list-widget.htm",a:"Migration Guide - ShoppingListWidget Upgrading from version 0.4.* to 0.6.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - ShoppingListWidget | Spryker"},"750":{i:0.000311311079119002,u:"../module_migration_guides/mg-shared-cart-page.htm",a:"The guide will walk you through the process of migrating SharedCartPage from version 1.0.0 to 2.0.0.",t:"Migration Guide - SharedCartPage | Spryker"},"751":{i:0.000311311079119002,u:"../module_migration_guides/mg-step-engine.htm",a:" Upgrading from Version 2.* to Version 3.* \nIf you\u0027re migrating the StepEngine module from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine  "},"752":{i:0.000311311079119002,u:"../module_migration_guides/mg-stock.htm",a:"Migration Guide - Stock Upgrading from version 5.* to 7.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - Stock | Spryker"},"753":{i:0.000311311079119002,u:"../module_migration_guides/mg-stock-sales-connector.htm",a:"Migration Guide - StockSalesConnector Upgrading from version 3.* to 5.0.0 This module release has been created for internal reasons and does not require migration efforts. Please  contact us  if you have any questions.",t:"Migration Guide - StockSalesConnector | Spryker"},});