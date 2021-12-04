// group by orgname
// filter out null
// group by year
// count number of tuples
db.laureates.aggregate(
    { $match: { "orgName": { "$ne": null } } },
    { $unwind: "$nobelPrizes" },
    {
        $project:
        {
            "_id": 0,
            "year": "$nobelPrizes.awardYear"
        }
    },
    {
        $group:
        {
            "_id": "$year"
        }
    },
    {
        $count: "years"
    }
)