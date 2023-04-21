import requests
from bs4 import BeautifulSoup

url = 'https://www.gmx.house/arbitrum/leaderboard'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')
# print(response)
# print(response.content)
# print(soup.prettify())
s = soup.find('div',class_="cube")
print(s)
# Find the leaderboard table
# table = soup.find('column', class_='.13')
# print(table)
# Extract the headers from the table
# headers = []
# for th in table.find_all('th'):
#     headers.append(th.text.strip())

# # Extract the rows from the table
# rows = []
# for tr in table.find_all('tr')[1:]:
#     row = {}
#     for i, td in enumerate(tr.find_all('td')):
#         row[headers[i]] = td.text.strip()
#     rows.append(row)

# # Print the leaderboard data
# for row in rows:
#     print(row)
