import json

# load data
data = json.load(open("/home/cs143/data/nobel-laureates.json", "r"))

laureates = data["laureates"]


def parseLaureatesJSON(laureates):
    print(len(laureates))
    laureates_json = ""
    for laureate in laureates:
        l_json = json.dumps(laureate)
        laureates_json += l_json + "\n"

    with open("laureates.import", "w") as fd:
        fd.write(laureates_json)


parseLaureatesJSON(laureates)