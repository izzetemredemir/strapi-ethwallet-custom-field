# Strapi plugin strapi-ethwallet-custom-field

This Strapi plugin enables the addition of custom fields specifically designed for Ethereum network wallets, enhancing content types with secure and structured Ethereum wallet address fields.
![GMQdWIYWoAApeA9](https://github.com/izzetemredemir/strapi-ethwallet-custom-field-/assets/11755605/be22b232-1deb-4b7e-9057-23dcb0abf43e)


## Features

- **Ethereum Wallet Field**: Introduces a new field type to Strapi that accepts Ethereum ERC20 wallet addresses.
- **Automatic Validation**: Ensures that inputted addresses adhere to the Ethereum address format, enhancing data integrity.
- **Seamless Integration**: Easily integrates into your existing Strapi environment, allowing for quick setup and configuration.

## Installation

To install the plugin, run the following command in your Strapi project directory:

```bash
npm install strapi-ethwallet-custom-field
```

## Configuration

After installation, you need to add the Ethereum wallet address field to your desired content type:

1. Navigate to the Content-Type Builder in your Strapi admin panel.
2. Choose the content type you want to enhance.
3. Click on "Add new field" and select the Ethereum Wallet Address type provided by this plugin.
4. Save the changes and restart your Strapi server for the changes to take effect.

## Usage

Once the field is added to a content type, it can be used to store Ethereum wallet addresses in the configured content type. The field will automatically validate the data to ensure that it conforms to the standard Ethereum wallet address format.

## Contributing

Contributions to improve `strapi-ethwallet-custom-field` are always welcome. Whether it's enhancing the functionality, improving the documentation, or reporting issues, your feedback is highly appreciated!

To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
