const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczZDJhZWNjLWFjNWMtNGZmNS05ZGJiLTczOGRmZTdkNzNhNyIsImtleSI6InNqNzUwaGE0IiwiaWF0IjoxNjcwMTE4NzEyfQ.0gijV7dWjX-2O72FwLFicUMvFu_gLLztoTdFImODxu8";
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {

    const collection = await revise.addCollection({name: "Good Vibes", uri: "govo"})

	const nft = await revise.addNFT({
    image: 'https://freeimage.host/i/HBOt2jI',
    name: 'Good Day',
    tokenId: '1',
    description: 'Forward with exceptional abilities. Legend to have on your team'
  }, [
    {goodness: "100%"}, {hope: "100%"}
  ], collection.id)

console.log(nft)

}
run()