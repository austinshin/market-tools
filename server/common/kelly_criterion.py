# Edge = (Profit Ratio + 1)(Win Probability%)-1
def calculate_edge(winProbability, profitRatio):
  edge = (profitRatio + 1) * (winProbability) - 1
  return edge


# Stake% = (Win Probability% * (Profit Ratio + 1)–1)/((Profit Ratio + 1)–1)
def calculate_stake(winProbability, profitRatio):
  stake = (winProbability*(profitRatio +1)-1)/((profitRatio + 1)-1)
  return stake

# Expected Growth (EG) = (1 + (O-1) * S)p * (1 – S)1-p – 1
# O = Profit Ratio + 1
# P = Win Probability%
# S = Stake% of Bankroll
def calculate_expected_growth(winProbability, profitRatio):
  O = profitRatio + 1
  S = calculate_stake(winProbability, profitRatio)
  P = winProbability
  first_arg = pow((1 + (O - 1) * S), P)
  second_arg = pow((1 - S), (1 - P))
  expectedGrowth = first_arg * second_arg - 1
  return expectedGrowth
