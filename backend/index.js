/**
 * The entry server file. This file should be run from the command line.
 * It handles command arguments and starts the server.
 */


const servers = require('./servers/servers');
const yargs = require('yargs');


/**
 * Set up command line.
 */
const argv = yargs
    .usage('$0 [options]')
    .version(function() {
        return require('../package').version;
    })
    .help('help')
    .option('app', {
        describe: 'port for the app',
        type: 'number',
        default: 3000
    })
    .option('webhooks', {
        describe: 'port for incoming webhooks',
        type: 'number',
        default: 4000
    })
    .alias('v', 'version')
    .alias('h', 'help')
    .alias('a', 'app')
    .alias('w', 'webhooks')
    .wrap(null)
    .argv;


/**
 * Start the express servers.
 */
servers.startAll(argv);
