from bs4 import BeautifulSoup
from selenium import webdriver

browser = webdriver.PhantomJS()
browser.get('https://www.flightradar24.com/56.16,-49.51/3')

soup = BeautifulSoup(browser.page_source, "html.parser")
result = soup.find_all("span", {"id": "menuPlanesValue"})

for item in result:
    print(item.text)

browser.quit()