import { client } from './client'

export const fetchUserDetails = async (userId) => {
  try {
    const userDetails = await client.fetch(
      `*[_type == "users" && _id == "${userId}"]{
            name,
            profileImage,
            walletAddress
        }[0]`
    )

    return userDetails
  } catch (err) {
    console.log(err)
  }
}
