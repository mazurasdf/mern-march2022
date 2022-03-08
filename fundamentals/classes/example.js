class Sundae{
    constructor(flavor,sauce,toppings,whipped=true,container="tall sundae glass"){
        //flavor,numScoops,sauce,toppings,whipped(boolean),container
        this.flavor = flavor;
        this.numScoops = 3;
        this.sauce = sauce;
        this.toppings = toppings;
        this.whipped = whipped;
        this.container = container;
    }

    eat(){
        this.numScoops -= 1;
        console.log(`wow that's good! I really like ${this.flavor} ice cream!`);
    }
}

const tinRoof = new Sundae("vanilla","chocolate syrup",["peanuts","rainbow spranks"],true,"tall sundae glass");
console.log(tinRoof);
const clevelandBrownie = new Sundae("vanilla","hot fudge",["pecans","rainbow spranks", "brownie"]);
console.log(clevelandBrownie);
clevelandBrownie.eat();
clevelandBrownie.eat();
console.log(clevelandBrownie);