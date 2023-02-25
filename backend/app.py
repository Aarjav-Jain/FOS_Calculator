from flask import Flask,jsonify,request
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np

# we define a variable called app
app = Flask(__name__) 

model = load_model('model_NN_accurate.h5')

# TODO: 
# make two routes
# load the model 
# extract values from request body preably as an array
# convert extracted values to number for prediction
# return the predicted value

def makePredictionML(data):
    newData = np.array(data)
    prediction = model.predict(newData.reshape(1,11))
    return(prediction[0][0])


@app.route("/models/machine_learning",methods=['POST'])
def MLResult():
    if(request.method == 'POST'):
        data = request.get_json(force=True)
        predictionValue = makePredictionML(data)
        return str(predictionValue)

@app.route('/test')
def test():
    return jsonify('test successful')

if __name__ == '__main__':
    app.run(debug=True)