function detokenize(data) {
    return Buffer.from(data, 'base64').toString('utf8');
}
module.exports = detokenize;
