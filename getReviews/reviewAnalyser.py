import json
finalData = {'allreviews': {}}
with open('./my-app/getReviews/finalReviews.json', 'r', encoding='utf-8') as result:
    data = json.load(result)

from textblob import TextBlob

def analyze_review_quality(r: str) -> float:
    review = data['allreviews'][r]
    if not review['m'].strip():
        return 0  # Empty or blank review is considered poor

    # Analyze the sentiment using TextBlob
    blob = TextBlob(review['m'])
    polarity = blob.sentiment.polarity  # Ranges from -1 (negative) to +1 (positive)

    if polarity > 0.3:
        return 3       # Good review
    elif polarity < -0.1:
        if(review['r'] >= 5):
            return 2
        return 0       # Bad review
    else:
        return 1     # Neutral/mixed review
dat = {}
for i in data['allreviews']:
    dat[i] = data['allreviews'][i]['m']

print(dat)
exit

for r in data['allreviews']:
    if ',' not in r:
        score = analyze_review_quality(r)
        finalData['allreviews'][f'{score},{r}'] = data['allreviews'][r]
    else:
        finalData['allreviews'][f'{r}'] = data['allreviews'][r]


#sorting
newData = {'allreviews': {}}
newData["averageRating"] =  4.7
newData["reviewsCount"] =  87
for r in sorted(finalData['allreviews'], reverse=True):
    newData['allreviews'][r] = finalData['allreviews'][r]
    

with open('./my-app/getReviews/finalReviews.json', 'w', encoding='utf-8') as result:
    result.write(json.dumps(newData))
