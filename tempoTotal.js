// Função para atualizar o contador de tempo
function updateTime() {
    const startDate = new Date("2022-10-02"); // Defina a data de início
    const now = new Date();
    const diff = now - startDate;

    // Calcula a diferença em milissegundos
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Cálculo preciso de anos, meses e dias
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    
    // Ajusta os anos e meses se o mês atual for menor que o mês da data inicial
    if (months < 0) {
        years--;
        months += 12;
    }

    // Ajusta os dias
    let daysInCurrentPeriod = now.getDate() - startDate.getDate();
    
    if (daysInCurrentPeriod < 0) {
        // Se o dia atual for menor que o dia da data inicial, precisamos pegar o último mês
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Último dia do mês anterior
        daysInCurrentPeriod += lastMonth.getDate(); // Adiciona os dias do último mês
        months--; // Decrementa o mês
        if (months < 0) {
            months += 12; // Ajusta se o mês ficar negativo
            years--; // Decrementa o ano se necessário
        }
    }

    // Atualiza o conteúdo HTML
    document.getElementById("years").textContent = years + " Anos";
    document.getElementById("months").textContent = months + " Meses";
    document.getElementById("days").textContent = daysInCurrentPeriod + " Dias";
    document.getElementById("hours").textContent = now.getHours() + " Horas";
    document.getElementById("minutes").textContent = now.getMinutes() + " Minutos";
    document.getElementById("seconds").textContent = now.getSeconds() + " Segundos";
}

// Atualiza o contador a cada segundo
setInterval(updateTime, 1000);

// Chama a função uma vez para inicializar imediatamente
updateTime();