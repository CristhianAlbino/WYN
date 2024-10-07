// Gráfico de Solicitações de Serviços
var ctx = document.getElementById('servicesChart').getContext('2d');
var servicesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Serviços Solicitados',
            data: [400, 500, 600],
            backgroundColor: 'orange',
            borderColor: 'orange',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de Satisfação
var ctx2 = document.getElementById('satisfactionChart').getContext('2d');
var satisfactionChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['28% satisfeitos', '50% neutros', '10% insatisfeitos'],
        datasets: [{
            data: [28, 50, 10],
            backgroundColor: ['#ffa500', '#cccccc', '#ff6347']
        }]
    },
    options: {
        responsive: true
    }
});

// Navegação entre as seções
function showDashboard() {
    hideAllSections();
    document.getElementById('dashboard-section').classList.remove('hidden');
}

function showAddService() {
    hideAllSections();
    document.getElementById('add-service-section').classList.remove('hidden');
}

function showChat() {
    hideAllSections();
    document.getElementById('chat-section').classList.remove('hidden');
}

function showEditService() {
    hideAllSections();
    document.getElementById('edit-service-section').classList.remove('hidden');
}

function showConfig() {
    hideAllSections();
    document.getElementById('config-section').classList.remove('hidden');
}

function hideAllSections() {
    document.getElementById('dashboard-section').classList.add('hidden');
    document.getElementById('add-service-section').classList.add('hidden');
    document.getElementById('chat-section').classList.add('hidden');
    document.getElementById('edit-service-section').classList.add('hidden');
    document.getElementById('config-section').classList.add('hidden');
}

// Função para adicionar serviço
function addService() {
    var serviceName = document.getElementById('serviceName').value;
    var serviceCategory = document.getElementById('serviceCategory').value;
    var serviceDescription = document.getElementById('serviceDescription').value;
    var servicePrice = document.getElementById('servicePrice').value;
    
    var servicesList = document.getElementById('servicesList');
    var newService = document.createElement('div');
    newService.textContent = `Nome: ${serviceName}, Categoria: ${serviceCategory}, Descrição: ${serviceDescription}, Preço: R$ ${servicePrice}`;
    
    servicesList.appendChild(newService);

    // Limpar campos
    document.getElementById('serviceName').value = '';
    document.getElementById('serviceCategory').value = '';
    document.getElementById('serviceDescription').value = '';
    document.getElementById('servicePrice').value = '';
}

// Função para enviar mensagem no chat
function sendMessage() {
    var messageInput = document.getElementById('messageInput').value;
    var chatBox = document.getElementById('chat-box');

    var messageEntry = document.createElement('div');
    messageEntry.textContent = messageInput;
    chatBox.appendChild(messageEntry);

    document.getElementById('messageInput').value = '';
}

// Função para salvar configurações
function saveSettings() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    alert(`Configurações salvas!\nUsuário: ${username}\nEmail: ${email}`);
}
