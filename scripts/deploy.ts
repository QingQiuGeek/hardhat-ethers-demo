import { network } from "hardhat";

const { ethers } = await network.connect();



async function main() {
//   const ethers = hre.ethers	
 const [signer] = await ethers.getSigners();


  console.log("Counter deployed to:", signer.address);
  console.log("Counter balance:",  ethers.formatEther(await ethers.provider.getBalance(signer.address)));

  const Counter = await ethers.deployContract("Counter");


  await Counter.waitForDeployment();

  const address = await Counter.getAddress();

  console.log("Counter 合约部署地址 :", address);
  console.log("初始number 值 :", (await Counter.getNumber()).toString());
  return address
}


main().then((address) => {
    console.log("部署完成", address);
    process.exit(0);
}).catch((error) => {
    console.error(error);
    process.exit(1);
});