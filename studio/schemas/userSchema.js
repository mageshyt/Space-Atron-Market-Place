export const UserSchema = {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'walletAddress',
      title: 'Wallet Address',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'url',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'Nfts',
      title: 'Nfts',
      type: 'array',
      of: [{ type: 'mintNft' }],
    },
  ],
}
