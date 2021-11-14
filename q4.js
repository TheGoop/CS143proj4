db.laureates.aggregate(
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
            "name": "nobelPrizes.affiliations.name.en",
            "country": "$nobelPrizes.affiliations.country.en",
            "city": "$nobelPrizes.affiliations.city.en"
        }
    },
    // { $unwind: "$country" },
    // { $unwind: "$country" },
    // { $unwind: "$city" },
    // { $unwind: "$city" },
    // {
    //     $group:
    //     {
    //         _id: { city: '$city', country: '$country' },
    //         totaldocs: { $sum: 1 }
    //     }
    // }
)