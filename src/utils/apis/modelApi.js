export const getMLPrediction = async postData => {
  try {
    const res = await fetch('http://172.17.5.69:2000/models/machine_learning', {
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
