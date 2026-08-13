exports.handler = async (event) => {
  console.log('Handler called');
  
  try {
    const body = JSON.parse(event.body || '{}');
    const trend = body.trend || 'comida de fusión coreana';
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        trend: trend,
        message: '✅ Shibuya Content Automation Ready!',
        timestamp: new Date().toISOString(),
        options: [
          { text: 'Opción 1: Comida fusión coreano-amazónica', score: 9.5 },
          { text: 'Opción 2: Bebidas amazónicas con sabor coreano', score: 8.2 }
        ]
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message })
    };
  }
};
