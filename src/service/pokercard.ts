import { PokerCard } from '../model/pokercard';
export class PokerCardService {

    standardValues: Array<string> = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20','40','100','∞','?','Tea'];
    fibonacciValues: Array<string> = ['0', '1', '2', '3', '5', '8', '13', '21','34','55','89','144','∞','?','Tea'];
    tshirtValues: Array<string> = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '∞','?','Tea'];


    public getStandardPokerCards(): PokerCard[] {
        const pokerCards = new Array<PokerCard>();
        this.standardValues.forEach(v => {
            const pokerCard = new PokerCard(v);
            pokerCards.push(pokerCard);
        })
        return pokerCards;
    }

    public getFibonacciPokerCards(): PokerCard[] {
        const pokerCards = new Array<PokerCard>();
        this.fibonacciValues.forEach(v => {
            const pokerCard = new PokerCard(v);
            pokerCards.push(pokerCard);
        })
        return pokerCards;
    }

    public getTShirtPokerCards(): PokerCard[] {
        const pokerCards = new Array<PokerCard>();
        this.tshirtValues.forEach(v => {
            const pokerCard = new PokerCard(v);
            pokerCards.push(pokerCard);
        })
        return pokerCards;
    }
}