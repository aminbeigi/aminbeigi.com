import mechanicalsoup
import json
from bs4 import BeautifulSoup

""" Automatic upadater for index.html.

This script will automatically update the title-section,
about-section and bottom-section of index.html.
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
        
    # replace each 'title-section'
    for i, tag in enumerate(soup.find_all('div', {'class': 'title-section'})):
        tag.string.replace_with(data[i]['name'])

    # replace each 'about-seciton'
    for i, tag in enumerate(soup.find_all('div', {'class': 'about-section'})):
        tag.string.replace_with(data[i]['description'])
    
    # replace each 'bottom-section'
    for i, tag in enumerate(soup.find_all('i', {'class': 'fas fa-code'})):
        lang_API_url = data[i]['languages_url']
        lang_response = browser.get(lang_API_url)
        lang_data = json.loads(lang_response.text)

        current_lst = []
        for j in range(len(lang_data)):
            current_lst.append(list(lang_data.keys())[j])
        tag.string.replace_with(f"created with {'/'.join(current_lst)}")
    
    # store prettified version of modified html
    new_text = soup.prettify()

    # save file
    with open('index.html', mode = 'w') as new_html_file:
        new_html_file.write(new_text)

def main():
    update()

if __name__ == '__main__':
    main()
