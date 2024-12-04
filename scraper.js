const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWebsite = async (url) => {
    try {
        console.log();
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const titles = [];
        $('span.titleline > a').each((_, element) => {
            titles.push($(element).text());
        });

        if (titles.length > 0) {
            console.log("Títulos encontrados:");
            console.log(titles.join('\n'));
        } else {
            console.log("Nenhum dado foi encontrado.");
        }

        return titles;
    } catch (error) {
        console.error("Erro no scraping:", error.message);
        return [];
    }
};

module.exports = scrapeWebsite;
