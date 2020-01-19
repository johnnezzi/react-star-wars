const avatarUtils = {
    getHairColour : function(hair) {
        if(hair.includes("grey")) return "SilverGray";
        if(hair.includes("brown")) return "Brown";
        if(hair.includes("blond")) return "Blond";
        if(hair.includes("black")) return "Black";
        if(hair.includes("yellow")) return "Yellow";
        if(hair.includes("auburn")) return "Auburn";
        return "No Hair";
    },

    getHairStyle : function(gender) {
        const longHair = ["LongHairBigHair", "LongHairBun", "LongHairShavedSides", "LongHairDreads"];
        const shortHair = ["ShortHairShaggyMullet", "ShortHairSides", "ShortHairShortRound", "ShortHairShortWaved"];
        return gender === "female" ? shortHair[getRandomnNumber(3)] :  longHair[getRandomnNumber(3)]

    },

    getSkinTone : function(skin_colour) {
        if (skin_colour.includes("light", "fair", "blue")) return "Light";
        if (skin_colour.includes("white", "metal", "grey", "silver" )) return "Pale";
        if (skin_colour.includes("gold", "green", "yellow")) return "Yellow";
        if (skin_colour.includes("dark")) return "DarkBrown";
        if (skin_colour.includes("tan", "orange")) return "Tanned";
        if (skin_colour.includes("brown")) return "Brown";
        if (skin_colour.includes("black")) return "Black";
        return "Pale"
    }
};

const getRandomnNumber = function(maximum) {
    const min = Math.ceil(1);
    const max = Math.floor(maximum);
    return Math.floor(Math.random() * ( max - min + 1 ) + min)
};
export default avatarUtils;