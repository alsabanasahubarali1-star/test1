const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Your GitHub username
const owner = "alsabanasahubarali1-star";

// Route to receive GitHub webhook
app.post("/webhook", async (req, res) => {
    console.log("▶️ Webhook Received!");

    const payload = req.body;

    // Extract commit SHA + repo name
    const commit_sha = payload.after;
    const repo_name = payload.repository.name;

    console.log("Repo:", repo_name);
    console.log("Commit SHA:", commit_sha);

    try {
        const patch = await getPatch(commit_sha, repo_name);
        console.log("\n===== PATCH START =====\n");
        console.log(patch);
        console.log("\n===== PATCH END =====\n");

        res.status(200).send("Patch logged successfully!");
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).send("Error fetching patch");
    }
});

// Function to call GitHub API
async function getPatch(commit_sha, repo_name) {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        throw new Error("GITHUB_TOKEN not set");
    }

    const url = `https://api.github.com/repos/${owner}/${repo_name}/commits/${commit_sha}`;

    const response = await axios.get(url, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "User-Agent": "webhook-server"
        }
    });

    let fullPatch = "";

    response.data.files.forEach(file => {
        fullPatch += `\n----- FILE: ${file.filename} -----\n`;
        fullPatch += file.patch + "\n";
    });

    return fullPatch;
}

// Run server
app.listen(3000, () => {
    console.log("🚀 Webhook server running on port 3000");
});
console.log('hello');
// webhook test
