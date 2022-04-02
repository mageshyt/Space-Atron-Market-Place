import { client } from './client'

export const fetchNftDetails = async (userId) => {
  const details = []
  try {
    const userDetails = await client.fetch(
      `*[_type == "users" && _id == "${userId}"]{
            Nfts
        }[0]`
    )
    if (userDetails.Nfts) {
      for (let i = 0; i < userDetails.Nfts.length; i++) {
        const { _ref: ref } = userDetails.Nfts[i]

        const nft = await client.fetch(
          `*[_type == "mintNft" && _id == "${ref}"]{
            title,
            description,
            image,
            price
            }
                `
        )
        details.push(await nft)
      }
    }
  } catch (err) {
    console.log(err)
  }
  return details
}
