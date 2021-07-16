from collections import defaultdict
import gensim
import json

passage = "Treasury Secretary Janet Yellen cautioned Thursday that prices could continue to rise for several more months, though she expects the recent startling inflation run to ease over time. In a CNBC interview, the Cabinet official added that she worries about the problems inflation could pose for lower - income families looking to buy homes at a time when real estate values are surging."
# You can find the Google News (and other pre-trained models) here: https://github.com/3Top/word2vec-api
word_vectors = gensim.models.KeyedVectors.load_word2vec_format('GoogleNews-vectors-negative300.bin', binary=True)

words = passage.split(' ')

cosines = defaultdict(dict)
for word1 in words:
    for word2 in words:
        try:
            cosines[word1][word2] = word_vectors.similarity(word1, word2).astype(float)
        except KeyError:
            cosines[word1][word2] = 0.0

with open('similarities.json', 'w') as file:
    json.dump(cosines, file)

print(cosines)