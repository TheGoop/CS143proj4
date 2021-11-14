db.laureates.aggregate(
    {
        $project:
        {
            "familyName": "$familyName.en"
        }
    },

    {
        $project:
        {
            "_id": 0,
            "familyName": 1
        }
    },

    {
        $group:
        {
            _id: "$familyName",
            totaldocs: { $sum: 1 }
        }
    },
    { $match: { totaldocs: { $gt: 4 } } },
    {
        $project:
        {
            "_id": 0,
            "familyName": "$_id"
        }
    },
    { $match: { "familyName": { "$ne": null } } },
)