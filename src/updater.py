import mechanicalsoup
import json

""" automatic upadater for index.html

This script will automatically update the title and description
of index.html.
"""

USERNAME = 'aminbeigi'
API_URL = f'https://api.github.com/users/{USERNAME}/repos'

def updater():
    browser = mechanicalsoup.Browser()
    response = browser.get(API_URL)
    data = json.loads(response.text) 
    name_list = []
    description_list = []
    

def main():
    updater()

if __name__ == '__main__':
    main()