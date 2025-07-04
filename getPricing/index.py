import json
#All reviews in google: https://www.google.com/search?hl=en-IN&gl=in&q=Zayra+dental+practice,+599+Harehills+Ln,+Harehills,+Leeds+LS9+6NQ,+United+Kingdom&ludocid=4640401750948393297&lsig=AB86z5UIk0qZkbIkmNIA1KjZmX9S&hl=en&gl=IN#
with open('./my-app/getPricing/pricing.json', 'r', encoding='utf-8') as result:
    finaldata = json.load(result)

new_data = {}
for i in finaldata:
    dummy = {}
    for j in i['treatments']:
        n = j['name']
        j.pop("name")
        dummy[n] = j
    new_data[i['category']] = dummy
    print(new_data)

with open('./my-app/getPricing/new_pricing.json', 'w', encoding='utf-8') as result:
    result.write(json.dumps(new_data))