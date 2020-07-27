import mechanicalsoup
from bs4 import BeautifulSoup
import json

""" Automatic upadater for index.html.

This script will automatically update the title and description
of index.html.
"""

USERNAME = 'aminbeigi'
API_URL = f'https://api.github.com/users/{USERNAME}/repos'

def update():
    # connect to API get response in JSON 
    browser = mechanicalsoup.Browser()
    response = browser.get(API_URL)
    data = json.loads(response.text) 

    # open index.html for reading
    with open('index.html', 'r') as html_file:
        soup = BeautifulSoup(html_file.read(), features = 'html.parser')
        
    # replace each 'section-title'
    for i, tag in enumerate(soup.find_all('div', {'class': 'section-title'})):
        tag.string.replace_with(data[i]['name'])

    # replace each 'about_seciton'
    for i, tag in enumerate(soup.find_all('div', {'class': 'about-section'})):
        tag.string.replace_with(data[i]['description'])

    # store prettified version of modified html
    new_text = soup.prettify()

    # save file
    with open('index.html', mode = 'w') as new_html_file:
        new_html_file.write(new_text)

def main():
    update()

if __name__ == '__main__':
    main()