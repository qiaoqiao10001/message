import React from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         comments:[
    //             {username:'tom',content:'too diff'},
    //             {username:'jack',content:'too easy'}
    //         ]
    //     }
    // }
    //给组件对象添加state属性
    state = {
            comments:[
                {username:'tom',content:'too diff'},
                {username:'jack',content:'too easy'}
            ]
    }

    render(){
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd/>
                    <CommentList comments={comments}/>
                </div>
            </div>
        )
    }
}