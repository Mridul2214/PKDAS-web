import requests

domains = [
    "tcs.com", "deloitte.com", "kpmg.com", 
    "natwest.com", "capgemini.com", "deshaw.com", 
    "nestle.com", "cipla.com", "unilever.com", 
    "barclays.com", "ust.com"
]

for d in domains:
    url = f"https://logo.clearbit.com/{d}"
    r = requests.head(url)
    print(f"{d}: {r.status_code}")
