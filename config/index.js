const settings = {
    port: 54145,
    host: "http://localhost",
    domain: "https://rest.hxnrycz.xyz",
    useDomain: false
};

if (settings.useDomain === "false") var url = settings.host + ":" + settings.port;
if (settings.useDomain === "true") var url = settings.domain;

module.exports = {
    port: settings.port,
    host: settings.host,
    domain: settings.domain,
    url
};