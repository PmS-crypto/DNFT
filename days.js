const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczZDJhZWNjLWFjNWMtNGZmNS05ZGJiLTczOGRmZTdkNzNhNyIsImtleSI6InNqNzUwaGE0IiwiaWF0IjoxNjcwMTE4NzEyfQ.0gijV7dWjX-2O72FwLFicUMvFu_gLLztoTdFImODxu8";
const revise = new Revise({auth: AUTH_TOKEN});

const API = async function() {
  const options = [
    {day: 'best', image: "https://iili.io/HBrX7ql.md.png"},
    {day: 'best', image: "https://iili.io/HBrwH57.png"},
    {day: 'best', image: "https://iili.io/HBrwodB.md.png"},
    {day: 'best', image: "https://iili.io/HBrwB0Q.md.png"},
    {day: 'best', image: "https://iili.io/HBrwB0Q.png"},
    {day: 'best', image: "https://iili.io/HBeRj8g.md.png"}
  ]
  const randomIndex =  Math.floor(Math.random() * 6)
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

