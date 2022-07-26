import { profile } from '../types';
import { getTier } from '../utils';
import { tiers } from '@assets/tier';
import { classes } from '@assets/class';

interface CardProps {
    width: number;
    height: number;
    data: profile;
}

class Card {
    private width: number;
    private height: number;
    private data: profile;

    constructor({ width = 500, height = 150, data }: CardProps) {
        this.width = width;
        this.height = height;
        this.data = data;
    }

    renderCard = async () => {
        const { handle, solvedCount, tier, rating, rank, cls } = this.data;

        const { tierString, tierNumber } = await getTier(tier);

        return `<svg 
            width="${this.width}"
            height="${this.height}"
            viewBox = "0 0 ${this.width} ${this.height}"
            fill= "none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="0"
                y="0"
                width="${this.width} - 1"
                height = "99%"
                fille="#FFFFFF"
                stroke="#424242"
            />
    
            <g data-testid="card-tier">
                <text x="10" y="5">${tierString}</text>
                <foreignObject width="150" height="100" x="10" y="20">
                    ${tiers[tier]}
                </foreignObject>
                <text x="10" y="125">${rating}</text>
            </g>

            <g data-testid="card-profile">
                <text x="180" y="30">${handle}</text>
                <foreignObject width="20" hegiht="20">
                    ${classes[cls]}
                </foreginObject>
                <text x="180" y="60">Rank: ${rank}</text>
                <text x="180" y="90">Solved: ${solvedCount}</text>
            </g>
        </svg>`;
    };
}

export default Card;
