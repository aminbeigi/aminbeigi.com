import mechanicalsoup
import json

""" Automatic upadater for index.html.

This script will automatically update the title and description
of index.html.
"""

USERNAME = 'aminbeigi'
API_URL = f'https://api.github.com/users/{USERNAME}/repos'

def updater():
    # Get access to API in JSON 
    browser = mechanicalsoup.Browser()
    response = browser.get(API_URL)
    data = json.loads(response.text) 
    name_list = []
    description_list = []

    i = 0
    while(True):
        try:
            name_list.append(data[i]['name'])
            i += 1
        except IndexError:
            break

    i = 0
    while (True):
        try:
            description_list.append(data[i]['description'])
            i += 1
        except IndexError:
            break

def main():
    updater()

if __name__ == '__main__':
    main()