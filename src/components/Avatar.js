import React from 'react';
import Avatar from 'avataaars'
import avatarUtils from "../utils/avatarUtils";
const { getHairColour, getHairStyle, getSkinTone, } = avatarUtils;

const CharacterAvatar = ({options}, hash) => {
    const hairColour = getHairColour(options.hair_color);
    const skinColour = getSkinTone(options.skin_color);
    const top = getHairStyle(options.gender);

    return (
        <div>
            <Avatar avatarStyle={"circle"} hairColor={hairColour} skinColor={skinColour} topType={top} hash={hash}/>
        </div>
    );
};

export default CharacterAvatar;
