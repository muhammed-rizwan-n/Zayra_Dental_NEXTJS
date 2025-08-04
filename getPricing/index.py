import json
with open('./my-app/getPricing/Zayradental-pricing - pricing.tsv', 'r') as result:
    finaldata = result.read().splitlines()
    result.close()
id= {}
new_data = {}
for i in finaldata[1:len(finaldata)+1:]:
    i = i.split('\t')
    dummy = {}
    dummy = {'priority': i[3], 'price':i[4], 'description': i[5], 'exlusivePlan': i[6], 'surface':i[7:-1:] if i[7] and i[10] else None}
    if i[1] not in new_data:
        new_data[i[1]] = {i[2]:dummy} 
    else:
        new_data[i[1]][i[2]] = dummy
    if i[0]:
        dummy.update({'name':i[2], 'category':i[1]})
        id[i[0]] =   dummy

with open('./my-app/app/pricing/pricing.json', 'w', encoding='utf-8') as result:
    result.write(json.dumps(new_data))
with open('./my-app/app/pricing/price_id.json', 'w', encoding='utf-8') as result:
    result.write(json.dumps(id))


    result.close()