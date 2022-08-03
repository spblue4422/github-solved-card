import { profile } from '../types';
import { getTier } from '../utils';
import { tiers } from '../../assets/tier';
import { classes } from '../../assets/class';

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

    async render() {
        const { handle, solvedCount, tier, rating, rank, cls } = this.data;

        const { tierString, tierNumber } = await getTier(tier);

        return `<svg
            width="${this.width}"
            height="${this.height}"
            viewBox = "0 0 ${this.width} ${this.height}"
            fill= "none"
            xmlns="http://www.w3.org/2000/svg">
            <style>
                text {
                    fill: black;
                }
            </style>
            <rect
                x="0"
                y="0"
                width="${this.width - 1}"
                height = "99%"
                fille="#FFFFFF"
                stroke="#424242"
            />

            <g data-testid="card-tier">
                <text x="50" y="20" class="rank">${tierString}</text>
                <foreignObject width="300" height="400" x="40" y="25">
                    ${tiers[tier]}
                </foreignObject>
                <text x="60" y="135" class="rating">${rating}</text>
            </g>

            <g data-testid="card-profile">
                <text x="300" y="30" class="handle">${handle}</text>
                <foreignObject width="40" height="40" x="240" y="40">
                    ${classes[cls]}
                </foreignObject>
                <text x="240" y="80">Rank: ${rank}</text>
                <text x="240" y="120">Solved: ${solvedCount}</text>
            </g>
        </svg>`;
    }
}

export default Card;
