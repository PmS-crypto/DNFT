const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczZDJhZWNjLWFjNWMtNGZmNS05ZGJiLTczOGRmZTdkNzNhNyIsImtleSI6InNqNzUwaGE0IiwiaWF0IjoxNjcwMTE4NzEyfQ.0gijV7dWjX-2O72FwLFicUMvFu_gLLztoTdFImODxu8";
const revise = new Revise({auth: AUTH_TOKEN});

const API = async function() {
  const options = [
    {day: 'best', image: "https://freeimage.host/i/HBOt2jI"},
    {day: 'best', image: "https://freeimage.host/i/HBeRj8g"}
// https://revise-testing.fra1.cdn.digitaloceanspaces.com/players/silver.png"}

  ]
  const randomIndex =  Math.floor(Math.random() * 2)
  return options[randomIndex];
}

async function run() {

  revise.every('2s').listenTo(API).start(async (data) => {
    const user = await revise.fetchNFT("ff785d00-cbc4-4f89-9c76-ac121245ca35")
    revise.nft(user)
      .setImage(data.image)
      .save()

			console.log(`Today is the ${data.day} day`)
  })

}
run()

// https://freeimage.host/i/HBOt2jIhttps://freeimage.host/i/HBeROAJ
// https://freeimage.host/i/HBeRj8g