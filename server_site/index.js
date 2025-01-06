const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_NEWUSER}:${process.env.DB_NEWPASS}@cluster0.hwzxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const allData = client.db("CrowdDB").collection("Users");
    const campainData = client.db("CrowdDB").collection("CampaignData");
    const myCampaign = client.db("CrowdDB").collection("myCampaign");
    // Campaign Data
    app.get("/allcampaign", async (req, res) => {
      const result = await campainData.find().limit(6).toArray();
      res.send(result);
    });
    app.get("/allcampaigndata", async (req, res) => {
      const sort = req.query.sort === "asc" ? 1 : -1;
      const result = await campainData
        .find()
        .sort({ minDonation: sort })
        .toArray();
      res.send(result);
    });
    app.get("/allcampaign/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const result = await campainData.find(filter).toArray();
      res.send(result);
    });

    app.get("/update/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(id) };
      const result = await campainData.findOne(qurey);
      res.send(result);
    });
    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(id) };
      const result = await campainData.findOne(qurey);
      res.send(result);
    });
    app.put("/update/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCampaings = req.body;
      const newCampaing = {
        $set: {
          image: updateCampaings.image,
          title: updateCampaings.title,
          type: updateCampaings.type,
          description: updateCampaings.description,
          minDonation: updateCampaings.minDonation,
          deadline: updateCampaings.deadline,
        },
      };
      const result = await campainData.updateOne(filter, newCampaing, options);
      res.send(result);
    });
    app.post("/allcampaign", async (req, res) => {
      const newUser = req.body;
      console.log("Campaign data ", newUser);
      const result = await campainData.insertOne(newUser);
      res.send(result);
    });
    // my campign user ids satrt
    app.get("/donations", async (req, res) => {
      const cursor = myCampaign.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/mycampaign", async (req, res) => {
      const newUser = req.body;
      console.log("My Campaign data ", newUser);
      const result = await myCampaign.insertOne(newUser);
      res.send(result);
    });
    // my campign user ids end
    app.delete("/allcampaign/:id", async (req, res) => {
      const id = req.params.id;
      const qurey = { _id: new ObjectId(id) };
      const result = await campainData.deleteOne(qurey);
      res.send(result);
    });
    // Campaign Data end
    //  all users Start
    app.get("/users", async (req, res) => {
      const cursor = allData.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("Sign Up ", newUser);
      const result = await allData.insertOne(newUser);
      res.send(result);
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send(" A-10 Is Crowdcube");
});
app.listen(port, () => {
  console.log(`A-10  Is Running on :${port}`);
});
