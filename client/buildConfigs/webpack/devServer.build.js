const devServerBuild = ({ port }) => {
    return {
        port,
        open: true,
    }

}

module.exports = { devServerBuild };