import json
#All reviews in google: https://www.google.com/search?hl=en-IN&gl=in&q=Zayra+dental+practice,+599+Harehills+Ln,+Harehills,+Leeds+LS9+6NQ,+United+Kingdom&ludocid=4640401750948393297&lsig=AB86z5UIk0qZkbIkmNIA1KjZmX9S&hl=en&gl=IN#
with open('./my-app/getReviews/finalReviews.json', 'r', encoding='utf-8') as result:
    finaldata = json.load(result)

def overallRating():
    with open('./my-app/getReviews/overall_review.txt', 'r',encoding='utf-8') as file:
        data = str(file.readlines()[3])
        data = json.loads(data)
    #print(data)
    data = json.loads(data[0][2])
    finaldata['averageRating'] = data[2]
    finaldata['reviewsCount'] = data[3]

def oldReviews():
    # Open and read the JSON file
    with open('./my-app/getReviews/old_review.txt', 'r',  encoding='utf-8') as file:
        data = str(file.readlines()[3])
        data = json.loads(data)
        data = json.loads(data[0][2])
    # FOR getLocal based url data
    for i in data[2]:
        #https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png
        finaldata['allreviews'][f'{i[1]}|{i[2][2]}|{i[3][0]}']= {
            'r': i[1],
            't': i[2][2],
            'n': i[3][0],
            'ui':i[3][1].replace('\\u003d',"="),
            'revlink': i[12],
            'm': i[27],
        }
        print(finaldata['allreviews'][f'{i[1]}|{i[2][2]}|{i[3][0]}'])
        # print("Rating=", i[1])
        # print("Time=", i[2][2])
        # print("Name=", i[3][0])
        # print("User icon=", i[3][1].replace('\\u003d',"="))
        # print("Review Link=",i[12])
        # print("Message=",i[26]) #25->lang 27->message?
        # print("Image=", i[44][1][2])


def newReviews():
        
    with open('./my-app/getReviews/new_review.txt', 'r',  encoding='utf-8') as file:
        data = str(file.readlines()[3])
        data = json.loads(data)
        data = json.loads(data[0][2])
        #print(data)
    for i in data[2]:
        if i[1] <3:
            continue
        finaldata['allreviews'][f'{i[1]}|{i[2][2]}|{i[3][0]}']= {
            'r': i[1],
            't': i[2][2],
            'n': i[3][0],
            'ui':i[3][1].replace('\\u003d',"="),
            'revlink': i[12],
            'm': i[27],
        }
        # print("Rating=", i[1])
        # print("Time=", i[2][2])
        # print("Name=", i[3][0])
        # print("User icon=", i[3][1].replace('\\u003d',"="))
        # print("Review Link=",i[12].replace('\\u003d',"="))
        # print("Message=",i[27]) #26->lang 27->message?
        # print("Image=", i[44][1][2])
        
#overallRating()
#newReviews()
oldReviews()
review_count = {1:0,2:0,3:0,4:0,5:0}
finaldata['allreviews'] = {key: finaldata['allreviews'][key] for key in sorted(finaldata['allreviews'],reverse=True)}
for reviews in finaldata['allreviews']:
    review_count[finaldata['allreviews'][reviews]["r"]] +=1

print(len(finaldata['allreviews']),review_count)

with open('./my-app/getReviews/finalReviews.json', 'w', encoding='utf-8') as result:
    result.write(json.dumps(finaldata))