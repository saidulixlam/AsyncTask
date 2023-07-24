console.log('Person1: Shows ticket');
console.log('Person2: Shows ticket');

const movie = async () => {
    const wifeGetTicks = new Promise((res,rej)=>{
        setTimeout(() => {
            res('ticket');
        }, 2000);
    })

const getPopcorn = new Promise((res,rej)=>res(`popcorn`)); 
const getButter = new Promise((res,rej)=>res(`butter`));
const getColdrink=new Promise((res,rej)=>res(`coldrink`))
let ticket = await wifeGetTicks;
console.log(`wife : I got the ${ticket}s`);
console.log('husband : We shoud go!');
console.log('wife : No,i am hungry');

const popcorn = await getPopcorn;
    console.log(`husband: I got the ${popcorn}`);
    console.log(`wife : I need butter !`)

const butter = await getButter;
    console.log(`Huusband : I got some ${butter} on popcorn`);
    console.log(`Husband : Do u need anything else ?`);
    console.log(`wife : Yeah, some coldrink will be enough!`);

const coldrink = await getColdrink;
    console.log(`Huusband : I got the ${coldrink} for you`);
    console.log(`Husband : Do u need anything else ?`);
    console.log(`wife: let's go ,we will b late`);
    console.log('husband : Fine!, Thanks *grinks*');
return ticket;
}
movie().then((m)=>{
    console.log(`Person3 : Shows ${m}`);
})
console.log('Person4: Shows ticket');
console.log('Person5: Shows ticket');