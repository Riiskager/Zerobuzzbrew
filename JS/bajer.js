// Importering fra Json fil fungerede ikke
const bajer =[
    {
        navn: "Proteinøl", ingrediens: "protein", tags: ["mørk", "pilsner"]
    },
    {
        navn: "Kold røg", ingrediens: "Røget egetræ", tags: ["mørk"]
    },
    {
        navn: "Hassel", ingrediens: "Nødder", tags: ["mørk"]
    },
    {
        navn: "Hot Chocolate", ingrediens: "Brownie", tags: ["mørk"]
    },
    {
        navn: "Hyldest", ingrediens: "Hyldeblomst", tags: ["frugtet"]
    },
    {
        navn: "Inger", ingrediens: "Ingefær", tags: ["frugtet"]
    },
    {
        navn: "Pear 2 Pear", ingrediens: "Pære", tags: ["frugtet", "lys"]
    },
    {
        navn: "Appleciderous", ingrediens: "Æblecider", tags: ["frugtet", "lys", "IPA"]
    },
    {
        navn: "Christmas joy", ingrediens: "Juleøl", tags: ["lys"]
    },
    {
        navn: "Balstyrko", ingrediens: "Rønnebær", tags: ["IPA", "lys"]
    },
    {
        navn: "Lavender", ingrediens: "Lavendel", tags: ["IPA", "pilsner"]
    },
    {
        navn: "Flowerpower", ingrediens: "blomster", tags: ["classic", "mørk", "IPA"]
    },
    {
        navn: "THEBURN!", ingrediens: "Brændnælde", tags: ["pilsner", "mørk", "IPA"]
    },
    {
        navn: "Pinkie", ingrediens: "Hindbær", tags: ["frugtet", "pilsner", "lys"]
    }
]

//Kig i konsollen, det virker!
function findBeersByTags(preferredTags) {
    return bajer.filter(bajer =>
        bajer.tags.some(tag => preferredTags.includes(tag))
    );
}

// Test af funktionen
const userTags = ["mørk", "pilsner"];
const recommendedBeers = findBeersByTags(userTags);

console.log("Anbefalede øl:", recommendedBeers);


