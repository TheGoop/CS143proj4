db.laureates.aggregate(
    {
        $match:
        {
            "nobelPrizes.affiliations.name.en": "CERN"
        }
    },
    {
        $project:
        {
            "_id": 0,
            "country": "$nobelPrizes.affiliations.country.en"
        }
    },
    { $unwind: "$country" },
    { $unwind: "$country" },
    { $limit: 1 }
)