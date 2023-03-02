const { ethers } = require("hardhat");

const main = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("deploying contract with the account:", deployer.address);
    console.log("account balance:", (await deployer.getBalance()).toString());

    const nftContractFactory = await hre.ethers.getContractFactory('MyNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log('contract deployed to: ', nftContract.address);
    
    let txn = await nftContract.makeNFT();
    await txn.wait();
};


const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();