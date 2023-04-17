export const getMLPrediction = async postData => {
  try {
    const res = await fetch(
      'https://fos-backend.onrender.com/models/machine_learning',
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
    const res = await fetch(
      'https://fos-backend.onrender.com/models/safety_chart',
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
