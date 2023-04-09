export const getMLPrediction = async postData => {
  try {
    const res = await fetch(
      'http://172.17.32.144:2000/models/machine_learning',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      },
    );
    const data = res.json();
    return data;
  } catch (e) {
    console.log('Could not fetch api:', e);
  }
};

export const getSafetyChartPrediction = async postData => {
  try {
    const res = await fetch('http://172.17.32.144:2000/models/safety_chart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const data = res.json();
    return data;
  } catch (e) {
    console.log('Could not fetch api:', e);
  }
};
