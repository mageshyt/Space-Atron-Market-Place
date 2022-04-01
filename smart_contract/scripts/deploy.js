// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MintNftFactory = await hre.ethers.getContractFactory('MintNft')
  const MintNftImageContainer = await MintNftFactory.deploy()
  await MintNftImageContainer.deployed() //! deploys the contract
  console.log('Greeter deployed to:', MintNftFactory.address)
  console.log(
    ' image minter contract is deployed to 👉 ',
    MintNftImageContainer.address
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
;(async () => {
  try {
    await main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
