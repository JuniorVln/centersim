const DEST = 'wheinrichsjr@gmail.com'

export async function sendContactEmail(params) {
    // SIMULATION MODE: Always succeed to test UI animation
    console.log('--- EMAIL SENDING SIMULATION ---');
    console.log('To:', DEST);
    console.log('Payload:', params);
    
    // Simulating a delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real scenario, we'd execute the code below.
    // For now, we return success to allow the user to see the "joinha Verde" animation.
    return { success: true, message: 'Simulated success' };

    // Real implementation (previously used or planned)
    const response = await fetch(`https://formsubmit.co/ajax/${DEST}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `Nova solicitação - ${params.from_name} | ${params.origem}`,
            _template: 'box',
            Nome: params.from_name || '-',
            Loja: params.loja || '-',
            "E-mail": params.email || '-',
            Telefone: params.telefone || '-',
            Cidade: params.cidade || '-',
            Interesse: params.interesse || '-',
            Origem: params.origem || '-',
            Mensagem: params.mensagem || '-',
            _captcha: 'false'
        })
    });

    if (!response.ok) {
        console.error('FormSubmit Error Status:', response.status);
        throw new Error('Erro ao enviar o email');
    }

    try {
        const data = await response.json();
        // O FormSubmit envia um email de ativação no primeiro uso.
        if (data && data.message && data.message.toLowerCase().includes('activate')) {
            alert('⚠️ ATENÇÃO: Como é a PRIMEIRA vez que usa este formulário, a plataforma FormSubmit enviou um e-mail de ATIVAÇÃO para centersim@simnegocios.com.br.\n\nPor favor, abra esta caixa de entrada, clique no link de ativação, e depois envie esta mensagem novamente para concluir!');
            throw new Error('Ativação do FormSubmit pendente');
        }
    } catch (err) {
        if (err.message.includes('Ativação')) throw err;
        // Ignore JSON parsing errors if it returns something else
    }
}
