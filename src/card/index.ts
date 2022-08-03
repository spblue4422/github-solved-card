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

                .cls-2 {
                    fill: white;
                }
            </style>
            <rect
                x="0"
                y="0"
                width="${this.width - 1}"
                height = "99%"
                fill="#FFFFFF"
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
                <text x="290" y="40" class="handle">${handle}</text>
                <foreignObject width="40" height="40" x="240" y="15">
                    ${classes[cls]}
                </foreignObject>
                <text x="240" y="90">Rank</text>
                <text x="340" y="90">${rank}</text>
                <text x="240" y="120">Solved</text>
                <text x="360" y="120">${solvedCount}</text>
            </g>
        </svg>`;
    }
}

export default Card;
