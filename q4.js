db.laureates.aggregate(
    { $unwind: "$nobelPrizes" },

    { $unwind: "$nobelPrizes.affiliations" },

    {
        $match:
        {
            "nobelPrizes.affiliations.name.en": "University of California"
        }
    },
    {
        $project:
        {
            "_id": 0,
            "id": 1,
            "name": "$nobelPrizes.affiliations.name.en",
            "country": "$nobelPrizes.affiliations.country.en",
            "city": "$nobelPrizes.affiliations.city.en"
        }
    },
    {
        $group:
        {
            _id: { city: '$city', country: '$country' },
            totaldocs: { $sum: 1 }
        }
    },
    {
        $count: "locations"
    },
    {
        $project:
        {
            "_id": 0,
        }
    }

)