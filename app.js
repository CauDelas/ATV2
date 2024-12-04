const scrapeWebsite = require('./scraper');  
const sendEmail = require('./emailConfig');  

const url = 'https://news.ycombinator.com';

const runApp = async () => {
    console.log("Aplicação iniciada...");

    const data = await scrapeWebsite(url);

    if (data.length > 0) {
        const subject = "Títulos do Hacker News";
        const body = `Aqui estão os títulos mais recentes:\n\n${data.join('\n')}`;

        const emailStatus = await sendEmail('seuemail@gmail.com', subject, body)
        if (emailStatus) {
            console.log("E-mail enviado com sucesso!");
        } else {
            console.log("Falha ao enviar o e-mail."); 
            //SEMPRE VAI APARECER ISTO, VISTO QUE ESTOU UTILIZANDO UM EMAIL E DADOS FICTICIOS NO .ENV
        }
    } else {
        console.log("Nenhum dado encontrado para enviar por e-mail.");
    }
};

runApp();
