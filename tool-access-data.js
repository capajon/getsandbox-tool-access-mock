var consts = {
    'SEVEN_DAYS': 'D',
    'THIRTY_DAYS': 'D',
    'TWELVE_MONTHS': 'M'
};

var generate = function generate(granularity) {
    return [
      {
        "2000": {
          "1420070400000": 424390,
          "1420156800000": 202978,
          "1420243200000": 519492,
          "1420329600000": 693234,
          "1420416000000": 121755,
          "1420502400000": 41547
        }
      },
      {
        "3000": {
          "1420070400000": 381522,
          "1420156800000": 126550,
          "1420243200000": 1230,
          "1420329600000": 193934,
          "1420416000000": 663782,
          "1420502400000": 337066
        }
      },
      {
        "13000": {
          "1420070400000": 419704,
          "1420156800000": 119846,
          "1420243200000": 348619,
          "1420329600000": 421309,
          "1420416000000": 398641,
          "1420502400000": 359808
        }
      },
      {
        "37000": {
          "1420070400000": 247088,
          "1420156800000": 275128,
          "1420243200000": 286612,
          "1420329600000": 77486,
          "1420416000000": 6419,
          "1420502400000": 783195
        }
      },
      {
        "51000": {
          "1420070400000": 503802,
          "1420156800000": 439438,
          "1420243200000": 186430,
          "1420329600000": 226156,
          "1420416000000": 61089,
          "1420502400000": 15323
        }
      },
      {
        "33333": {
          "1420070400000": 503802,
          "1420156800000": 439438,
          "1420243200000": 186430,
          "1420329600000": 226156,
          "1420416000000": 61089,
          "1420502400000": 15323
        }
      }
    ];
};

module.exports = {
    'consts': consts,
    'generate': generate
}