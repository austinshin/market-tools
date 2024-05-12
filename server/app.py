'''server/app.py - main api app declaration'''
from flask import Flask, jsonify, send_from_directory, request
from flask_cors import CORS
from markupsafe import Markup
import requests
from constants import *
from common import *

''' to avoid an error xd'''
import collections
collections.Iterable = collections.abc.Iterable

'''Main wrapper for app creation'''
app = Flask(__name__, static_folder='../build')
CORS(app)

##
# API routes
##

@app.route('/api/polygon', methods=['POST'])
def handle_post():
  payload = {'apiKey': polygon_api_key}
  
  print(request.data)
  r = requests.get(POLYGON_URL, params=payload)
  data = r.json()

  return data

@app.route('/api/account-info', methods=['GET'])
def get_kelly_criterion():
  edge = kelly_criterion.calculate_edge(win_probability, profit_ratio)
  stake = kelly_criterion.calculate_stake(win_probability, profit_ratio)
  expected_growth = kelly_criterion.calculate_expected_growth(win_probability, profit_ratio)
  account_info = {
    "1R": bankroll * 0.01,
    "2R": bankroll * 0.02,
    "bankroll": bankroll,
    "win_probability": win_probability,
    "profit_ratio": profit_ratio,
    "edge": edge,
    "stake": stake,
    "expected_growth": expected_growth
  }

  return account_info

##
# View route
##

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  '''Return index.html for all non-api routes'''
  #pylint: disable=unused-argument
  return send_from_directory(app.static_folder, 'index.html')