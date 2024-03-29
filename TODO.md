# TODO

You will be working for this to guide our users for about 2 weeks to 1 month of time span.

If you end it early, you might be able to still work for other tasks you like. Including

## Requirements

If you have other suggestions it will be included here.

- Tokenomics including the Onlycoin token, where they can trade, tax, total amount etc and purpose of it being a utiliy token
- Website features including profile, post, chat, wallet and others
- Multi language support including English, Spanish and Portuguese
- Deployment should be done at docs.onlycoiners.com

## Your first tasks

You might have a collaborlator that will work with you to support other languages. Consider that in mind.

1. Let us know which docs framework will be used. It is better to have multi language support from the beginning.
2. Find some utility token docs website examples that you might think that will fit for our docs website.
3. Set up the CI / CD env for the docs website first. It doesn't have to be working at docs.onlycoiners.com to start but there should be a link so we can see the progress.

## Important

1. You will not work on this repository yet until everything is confirmed and agreed.
2. The payment will be done weekly of $100 task separately, we will pay some amounts beforehand if we like the progress and you prefer that.
3. We have the max 2 month of expectation of this project. If you somehow liked this project and want to work with this project more, help us bring some users as well.

You can see a few folders with videos in it.

Please include them to the docs website. For wallet part, please include what we currently support in the list and we plan to support also.

## Currently supported crypto

- Bitcoin
- Ethereum

Please include this in the list with links to etherscan and logo and name and some descriptions etc below. Include also where they can buy Onlycoin

https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xeA575FB54D9455D408CfF5A1f9B1d1b2d1C964e8

They can do that with the link or in our swap UI.

```py
ONLYCOIN_MAINNET = "0xeA575FB54D9455D408CfF5A1f9B1d1b2d1C964e8"
USDC_MAINNET = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
USDT_MAINNET = "0xdAC17F958D2ee523a2206206994597C13D831ec7"

https://etherscan.io/token/{token}

ONLYCOIN_DATA = {
    "token": "ONLY",
    "logo": "https://www.onlycoiners.com/static/icons/blockchain/onlycoin.jpg",
    "contract": ONLYCOIN_MAINNET,
}

USDC_DATA = {
    "token": "USDC",
    "logo": "https://www.onlycoiners.com/static/icons/blockchain/usdc.png",
    "contract": USDC_MAINNET,
}

USDT_DATA = {
    "token": "USDT",
    "logo": "https://www.onlycoiners.com/static/icons/blockchain/usdt.png",
    "contract": USDT_MAINNET,
}
```

Other tokens can be included more and say that if they want their token included here, feel free to contact the support email.

Include also we plan to support the other Ethereum variants like BSC and others. When we support the other blockchain we will support USDC and USDT by default and we might include OnlyCoin suppor there as well. Please include that is one of our plans.

Include also we plan to support more blockchains like Solana, TON from Telegram etc.

Please also state that these wallets will all work and we are trustable.

Do we have a roadmap or something at the docs? If it hasn't yet please include that we will support other blockchains for wallets and will have community and group chat support.
