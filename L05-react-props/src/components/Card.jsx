import Section from "./Section";

 function Card (props){
//     const {myage,fname}=props;
// //    console.log(props.myage);
// console.log(myage);
// console.log(fname);
console.log(props);

let college="mirai";
const myage=props.myage;


    return (
        <div>
            <h1>this is card functional compoenets</h1>
            {/* <h1>{props.myage}</h1> */}
            <Section mycollege={college} myage={myage} />
        </div>
    );
}


export default Card;
