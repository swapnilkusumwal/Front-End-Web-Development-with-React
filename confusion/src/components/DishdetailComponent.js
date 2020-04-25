import React from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

    // changeTime(date){
    //     return new Date(date).toLocaleDateString("en-US",{
    //         year:"numeric",
    //         month:"short",
    //         day:"numeric"
    //     });
    // }
    function RenderDish({dish}){
        
        if (dish!=null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle className="navbar-brand">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div>
                </div>
            )
        }
    }
    function RenderComment({comments}){
        if(comments!=null){
            let list= comments.map((comments) =>{
                // let date=comments.date;
                // console.log(date);
                return (
                    <li key={comments.id}>
                        <div>
                            <p>{comments.comment}</p>
                            <p>-- {comments.author} , {new Intl.DateTimeFormat('en-US' , {year :'numeric', month: 'short',day:'2-digit' }).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                    </li>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
            )
        }
        else{
            return(
                <div>
                    
                </div>
            )
        }
    }
    const DishDetail= (props) => {
        // const {dish} = props.dish;
        // console.log(dish);
        if(props.dish!=null){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComment comments={props.dish.comments}></RenderComment>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            )
        }
    }


export default DishDetail;