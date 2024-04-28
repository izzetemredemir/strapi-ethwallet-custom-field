import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-ethwallet-custom-field')
      .service('myService')
      .getWelcomeMessage();
  },
});
