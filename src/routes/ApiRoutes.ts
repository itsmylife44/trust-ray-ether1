import  * as express from "express";
import { TransactionController } from "../controllers/TransactionController";
import { EthoTokenController } from "../controllers/EthoTokenController";
import { StatusController } from "../controllers/StatusController";
import { Pusher } from "../controllers/PusherController";
import { DeviceRegistration } from "../controllers/DeviceRegistrationController";
import { PriceController } from "../controllers/PriceController";
import { EthoPriceController } from "../controllers/EthoPriceController";
import { TokenPriceController } from "../controllers/TokenPriceController";
import { AssetsController } from "../controllers/AssestsController";

const router = express.Router();

const transactionController = new TransactionController();
const ethoTokenController = new EthoTokenController();
const statusController = new StatusController();
const pusherController = new Pusher();
const deviceRegistration = new DeviceRegistration();
const priceController = new PriceController();
const ethoPriceController = new EthoPriceController();
const tokenPriceController = new TokenPriceController();
const assetsController = new AssetsController();

// URLs for transactions
router.get("/", statusController.getStatus);
router.get("/transactions", transactionController.readAllTransactions);
router.get("/transactions/:transactionId", transactionController.readOneTransaction);

// URLs for tokens
router.get("/tokens", ethoTokenController.readAllTokens);
router.get("/tokens/list", ethoTokenController.listTokens);
router.get("/tokens/list/new", ethoTokenController.listTokensNew);
router.get("/tokens/:address", ethoTokenController.readOneToken);
router.get("/tokenInfo/:tokenAddress", ethoTokenController.readTokenInfo);

router.get("/explorer_tokens", ethoTokenController.explorerTokens);

// URLs for push notifications
router.post("/push/register", deviceRegistration.register);
router.delete("/push/unregister", pusherController.unregister);
router.post("/push/unregister", deviceRegistration.unregister);

router.get("/prices", priceController.getPrices);
router.post("/tokenPrices", tokenPriceController.getTokenPrices);

// URLs for assets
router.get("/assets", assetsController.getAssets);


// All the end points below this point were added for the Android wallet, a fork of Lunary Ethereum wallet
// They do not apply to the fork of trust-wallet-ios
router.get("/returnChartData", ethoPriceController.getHistoricalPrices);
router.get("/currentPrice", ethoPriceController.getCurrentPrice);
router.get("/account_balancemulti", ethoPriceController.accountBalanceMulti);
router.get("/account_balance", ethoPriceController.accountBalance);
router.get("/raw_balance", ethoPriceController.rawBalance);
router.get("/estimateGas", ethoPriceController.estimateGas);
router.get("/gasPrice", ethoPriceController.gasPrice);
router.get("/getTransactionCount", ethoPriceController.getTransactionCount);
router.get("/sendRawTransaction", ethoPriceController.sendRawTransaction);

router.get("/txlist", ethoPriceController.txlist);
router.get("/txlistinternal", ethoPriceController.txlistinternal);

router.get("/getAddressInfo/:address", ethoTokenController.getAddressInfo);

export {
    router
};