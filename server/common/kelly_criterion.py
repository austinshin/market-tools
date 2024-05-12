# Edge = (Profit Ratio + 1)(Win Probability%)-1
def calculate_edge(win_probability, profit_ratio):
  edge = (profit_ratio + 1) * (win_probability) - 1
  return edge


# Stake% = (Win Probability% * (Profit Ratio + 1)–1)/((Profit Ratio + 1)–1)
def calculate_stake(win_probability, profit_ratio):
  stake = (win_probability*(profit_ratio +1)-1)/((profit_ratio + 1)-1)
  return stake

# Expected Growth (EG) = (1 + (O-1) * S)p * (1 – S)1-p – 1
# O = Profit Ratio + 1
# P = Win Probability%
# S = Stake% of Bankroll
def calculate_expected_growth(win_probability, profit_ratio):
  O = profit_ratio + 1
  S = calculate_stake(win_probability, profit_ratio)
  P = win_probability
  first_arg = pow((1 + (O - 1) * S), P)
  second_arg = pow((1 - S), (1 - P))
  expected_growth = first_arg * second_arg - 1
  return expected_growth
