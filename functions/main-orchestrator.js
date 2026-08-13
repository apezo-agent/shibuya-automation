exports.handler = async (event, context) => {
  try {
    const { trendInput } = JSON.parse(event.body || '{}');
    console.log(`[ORCHESTRATOR] Processing: ${trendInput}`);
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        trend: trendInput || 'comida de fusión coreana',
        message: 'Shibuya Content Automation is ready!',
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
