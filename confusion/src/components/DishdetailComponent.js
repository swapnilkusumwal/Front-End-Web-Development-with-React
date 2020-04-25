import React, { Component } from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";
class DishDetail extends Component {

    constructor(props){
        super(props);
        this.state = { 
        };
    }
    changeTime(date){
        return new Date(date).toLocaleDateString("en-US",{
            year:"numeric",
            month:"short",
            day:"numeric"
        });
    }
    renderDish(dish){
        
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
    renderComment(comments){
        if(comments!=null){
            let list= comments.map((comments) =>{
                let date=comments.date;
                // console.log(date);
                return (
                    <li key={comments.id}>
                        <div>
                            <p>{comments.comment}</p>
                            <p>-- {comments.author} , {this.changeTime(date)}</p>
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
    render(){
        const {dish} = this.props;
        // console.log(dish);
        if(dish!=null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(dish.comments)}
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
}   

export default DishDetail;