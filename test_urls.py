import requests

urls = [
    ("TCS", "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"),
    ("Deloitte", "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg"),
    ("KPMG", "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg"),
    ("NatWest", "https://upload.wikimedia.org/wikipedia/commons/2/27/NatWest_Group_logo.svg"),
    ("Capgemini", "https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_Capgemini.svg"),
    ("D E Shaw", "https://upload.wikimedia.org/wikipedia/commons/4/47/D._E._Shaw_Logo.png"),
    ("Nestlé", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Nestl%C3%A9.svg/2560px-Nestl%C3%A9.svg.png"),
    ("Cipla", "https://upload.wikimedia.org/wikipedia/commons/9/90/Cipla_Logo.svg"),
    ("Unilever", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Unilever_2022_logo.svg/2560px-Unilever_2022_logo.svg.png"),
    ("Barclays", "https://upload.wikimedia.org/wikipedia/commons/7/7e/Barclays_Eagle_logo.svg"),
    ("UST", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UST_Logo.svg/2560px-UST_Logo.svg.png"),
    ("Infosys", "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"),
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for name, url in urls:
    try:
        r = requests.get(url, headers=headers, timeout=5)
        print(f"{name}: {r.status_code}")
    except Exception as e:
        print(f"{name}: Error")
