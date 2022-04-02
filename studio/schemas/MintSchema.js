export const MintSchema = {
  name: 'mintNft',
  Title: 'Mint NFT',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'users' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    },
  ],
}
