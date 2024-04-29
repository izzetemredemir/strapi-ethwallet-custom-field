import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  getWelcomeMessage() {
    return "Welcome to the ETH Wallet Custom Field Plugin 🚀. Manage your Ethereum wallets efficiently!";
  },

  getGoodbyeMessage() {
    return "Thank you for using our ETH Wallet Custom Field Plugin 🌟. See you again!";
  },
});
