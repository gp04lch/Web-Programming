# NEM - Nano Wallet

## How to use Nano Wallet?

No installation or local server is needed.

Click on NanoWallet.exe to start the app.

## How to import NCC wallet?

Open NCC and your wallet, clicking on user icon should reveal a drop-down menu with "Export to ligthwallet". Once your have your wallet (.json format), open Nano and import it from the login page. It'll ask for an upgrade and trigger the download of your updated wallet. Do not delete your old NCC wallet and keep it safe somewhere.

## Imported accounts that are already harvesting using NCC:

NCC is using a different way to generate the remote associated with an account. Nano Wallet uses BIP32 to generate it deterministically and make everything easier. In order to manage and monitor harvesting, you'll need to deactivate the old remote account from NCC and activate your new remote account from Nano. Alternatively you can use a custom delegated public key in Nano Wallet importance transaction page.

/!\ Main network: Please note that if you are part of the Supernodes program you'll need to re-enroll your node using your new delegated public key.

## How to update Nano Wallet?

Before you update Nano Wallet to a newer version make sure you don't have any wallets stored in the NanoWallet folder (you can place them anywhere you want). Then, just delete old version and unzip new version.

## Dashboard is empty and no balance is showing:

It is probably that the node you are connected to is down. Look at the navigation bar, at the top of the page. If the circle next to Node is red, click on it and select another node from the list.

## Developers:

https://github.com/NemProject/NanoWallet for more information

##  Known issues:

- Sometimes, depending on the used node, unconfirmed data to sign is not incoming from websocket.
