'''server/app.py - main api app declaration'''
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import requests
import constants

''' to avoid an error xd'''
import collections
collections.Iterable = collections.abc.Iterable

'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='../build')
CORS(app)

POLYGON_AUTH = { 'Authorization': 'Bearer FtWeEQQ5RN3At7kYZ0dC3fOfVsONDyuB' }
POLYGON_URL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=FtWeEQQ5RN3At7kYZ0dC3fOfVsONDyuB'

##
# API routes
##

@app.route('/api/items')
def items():
  '''Sample API route for data'''
  return jsonify([{'title': 'A'}, {'title': 'B'}])

@app.route('/api/polygon')
def get_data():
  '''Sample API route for data'''
  payload = {'apiKey': constants.polygon_api_key}
  print(payload)
  r = requests.get(POLYGON_URL, params=payload)
  data = r.json()

  return data

##
# View route
##

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  '''Return index.html for all non-api routes'''
  #pylint: disable=unused-argument
  return send_from_directory(app.static_folder, 'index.html')