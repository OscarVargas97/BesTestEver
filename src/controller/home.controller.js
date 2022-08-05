const Home = {
    home: (req, res) => {
        res.sendFile(`/home/oscar/Repos/OscarVargas97/BesTestEver/src/views/home/index.html`)
    }
}
module.exports = Home